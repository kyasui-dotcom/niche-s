export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname.startsWith('/api/diagnose')) {
      return handleDiagnose(request, env, url);
    }

    return env.ASSETS.fetch(request);
  }
};

const CATEGORY_MAP = {
  flowers: {
    label: '花・フラワーギフト',
    keywords: ['母の日 花 ギフト', '母の日 フラワーアレンジ', '母の日 プリザーブドフラワー'],
    note: '定番感を優先したい人向け。レビュー件数と配送締切の確認が大事。'
  },
  sweets: {
    label: 'スイーツ・お菓子',
    keywords: ['母の日 スイーツ ギフト', '母の日 焼き菓子', '母の日 ゼリー ギフト'],
    note: '消えもの寄りで選びやすい定番。冷蔵・常温の違いも見やすいです。'
  },
  gourmet: {
    label: 'グルメ・飲み物',
    keywords: ['母の日 グルメ ギフト', '母の日 紅茶 ギフト', '母の日 コーヒー ギフト'],
    note: '少し丁寧な印象を出しやすい帯。お茶時間の提案にも向いています。'
  },
  practical: {
    label: '実用品・雑貨',
    keywords: ['母の日 実用品 ギフト', '母の日 エプロン ギフト', '母の日 ストール ギフト'],
    note: '使いやすさで選びたい人向け。色味や素材感は商品画像で要確認。'
  },
  relax: {
    label: '癒し・セルフケア',
    keywords: ['母の日 リラックス ギフト', '母の日 バスギフト', '母の日 ハンドクリーム ギフト'],
    note: '気分転換寄りの提案に向いたカテゴリ。香りの好みは個人差があります。'
  }
};

const BUDGETS = {
  lite: { label: '3,000円前後', min: 2000, max: 3999 },
  standard: { label: '5,000円前後', min: 4000, max: 6499 },
  premium: { label: '8,000円前後', min: 6500, max: 9999 },
  luxe: { label: '10,000円以上', min: 10000, max: 20000 }
};

const PURPOSES = {
  classic: { label: '定番で外しにくい', boost: ['flowers', 'sweets'] },
  easy: { label: '気軽に受け取りやすい', boost: ['sweets', 'gourmet'] },
  useful: { label: '使ってもらいやすい', boost: ['practical', 'relax'] },
  special: { label: '少し特別感を出したい', boost: ['flowers', 'relax', 'gourmet'] }
};

const URGENCY = {
  relaxed: { label: 'まだ比較する余裕あり', fastOnly: false },
  soon: { label: '今週中には決めたい', fastOnly: false },
  urgent: { label: 'かなり直前。配送優先', fastOnly: true }
};

async function handleDiagnose(request, env, url) {
  if (request.method !== 'GET') {
    return json({ error: 'Method not allowed' }, 405);
  }

  const budgetKey = url.searchParams.get('budget') || 'standard';
  const categoryKey = url.searchParams.get('category') || 'flowers';
  const purposeKey = url.searchParams.get('purpose') || 'classic';
  const urgencyKey = url.searchParams.get('urgency') || 'relaxed';

  const budget = BUDGETS[budgetKey] || BUDGETS.standard;
  const category = CATEGORY_MAP[categoryKey] || CATEGORY_MAP.flowers;
  const purpose = PURPOSES[purposeKey] || PURPOSES.classic;
  const urgency = URGENCY[urgencyKey] || URGENCY.relaxed;

  const applicationId = env.RAKUTEN_APPLICATION_ID;
  const accessKey = env.RAKUTEN_ACCESS_KEY;
  const affiliateId = env.RAKUTEN_AFFILIATE_ID;

  if (!applicationId || !accessKey) {
    return json({
      error: 'Rakuten applicationId/accessKey is not configured.',
      setupRequired: true
    }, 500);
  }

  try {
    const keywords = buildQueries(categoryKey, purposeKey);
    const results = [];
    const seen = new Set();

    for (const keyword of keywords) {
      const items = await fetchRakutenItems({ applicationId, accessKey, affiliateId, keyword, budget, urgency });
      for (const item of items) {
        if (seen.has(item.itemCode)) continue;
        seen.add(item.itemCode);
        results.push(shapeItem(item, category, purpose, budget));
        if (results.length >= 9) break;
      }
      if (results.length >= 9) break;
    }

    return json({
      request: {
        budget: budgetKey,
        budgetLabel: budget.label,
        category: categoryKey,
        categoryLabel: category.label,
        purpose: purposeKey,
        purposeLabel: purpose.label,
        urgency: urgencyKey,
        urgencyLabel: urgency.label
      },
      diagnosis: {
        headline: `${budget.label}で${category.label}を探すなら、まずは「${category.label} × ${purpose.label}」から見るのが素直です。`,
        note: category.note,
        checklist: buildChecklist(urgencyKey),
        searchKeywords: keywords
      },
      items: rankItems(results, purpose, categoryKey)
    });
  } catch (error) {
    return json({
      error: error instanceof Error ? error.message : 'Rakuten API の取得に失敗しました。',
      setupRequired: false
    }, 502);
  }
}

function buildQueries(categoryKey, purposeKey) {
  const category = CATEGORY_MAP[categoryKey] || CATEGORY_MAP.flowers;
  const purpose = PURPOSES[purposeKey] || PURPOSES.classic;
  const boostTerms = {
    classic: '人気 定番',
    easy: '高評価 個包装',
    useful: '実用的 おしゃれ',
    special: '上質 特別'
  };

  return category.keywords.map((base) => `${base} ${boostTerms[purposeKey] || boostTerms.classic}`);
}

async function fetchRakutenItems({ applicationId, accessKey, affiliateId, keyword, budget, urgency }) {
  const endpoint = new URL('https://openapi.rakuten.co.jp/ichibams/api/IchibaItem/Search/20220601');
  endpoint.searchParams.set('applicationId', applicationId);
  endpoint.searchParams.set('accessKey', accessKey);
  if (affiliateId) endpoint.searchParams.set('affiliateId', affiliateId);
  endpoint.searchParams.set('keyword', keyword);
  endpoint.searchParams.set('format', 'json');
  endpoint.searchParams.set('formatVersion', '2');
  endpoint.searchParams.set('hits', '12');
  endpoint.searchParams.set('page', '1');
  endpoint.searchParams.set('sort', '+itemPrice');
  endpoint.searchParams.set('availability', '1');
  endpoint.searchParams.set('minPrice', String(budget.min));
  endpoint.searchParams.set('maxPrice', String(budget.max));
  if (urgency.fastOnly) endpoint.searchParams.set('shipOverseasFlag', '0');

  const response = await fetch(endpoint, {
    headers: {
      'User-Agent': 'OpenClaw-MothersDayRakuten/1.0'
    },
    cf: {
      cacheTtl: 900,
      cacheEverything: true
    }
  });

  const text = await response.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    throw new Error(`Rakuten API returned non-JSON (${response.status}).`);
  }

  if (!response.ok) {
    throw new Error(`Rakuten API error ${response.status}: ${(data?.error_description || data?.message || text).slice(0, 240)}`);
  }

  return Array.isArray(data.Items) ? data.Items : [];
}

function shapeItem(item, category, purpose, budget) {
  const price = Number(item.itemPrice || 0);
  const reviewAverage = Number(item.reviewAverage || 0);
  const reviewCount = Number(item.reviewCount || 0);
  const image = item.mediumImageUrls?.[0]?.imageUrl || item.smallImageUrls?.[0]?.imageUrl || item.itemImageUrl || '';
  const affiliateUrl = item.affiliateUrl || item.itemUrl;

  return {
    itemCode: item.itemCode,
    itemName: item.itemName,
    shopName: item.shopName,
    itemPrice: price,
    reviewAverage,
    reviewCount,
    imageUrl: image.replace('?_ex=128x128', ''),
    itemUrl: affiliateUrl,
    catchcopy: item.catchcopy,
    itemCaption: item.itemCaption,
    genreId: item.genreId,
    shippingFlag: item.asurakuFlag === 1 || item.shippingleadtime === 1,
    diagnosisReason: buildReason(item, category, purpose, budget)
  };
}

function buildReason(item, category, purpose, budget) {
  const points = [];
  const price = Number(item.itemPrice || 0);
  const gap = Math.abs(price - Math.round((budget.min + budget.max) / 2));
  if (gap <= 800) points.push('予算帯の真ん中に近い');
  if (Number(item.reviewCount || 0) >= 30) points.push('レビュー件数が比較しやすい');
  if (Number(item.reviewAverage || 0) >= 4.2) points.push('評価が高め');
  if ((item.catchcopy || '').length > 0) points.push('特徴が説明しやすい');
  if (points.length === 0) points.push(`${category.label}で探しやすい価格帯`);
  return `${purpose.label}の軸で見たとき、${points.slice(0, 2).join(' / ')}候補です。`;
}

function rankItems(items, purpose, categoryKey) {
  return [...items]
    .map((item) => {
      let score = 0;
      score += Math.max(0, 40 - Math.abs(item.itemPrice - medianBudget(items)) / 120);
      score += Math.min(item.reviewCount, 120) / 6;
      score += item.reviewAverage * 8;
      if (purpose.boost.includes(categoryKey)) score += 6;
      if (item.shippingFlag) score += 4;
      return { ...item, score: Math.round(score) };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 6);
}

function medianBudget(items) {
  if (!items.length) return 5000;
  const prices = items.map((item) => item.itemPrice).sort((a, b) => a - b);
  return prices[Math.floor(prices.length / 2)] || 5000;
}

function buildChecklist(urgencyKey) {
  if (urgencyKey === 'urgent') {
    return ['最短発送', '母の日当日着の可否', 'レビュー件数', '冷蔵/常温'];
  }
  if (urgencyKey === 'soon') {
    return ['配送締切', 'レビュー件数', '価格帯の比較', 'セット内容'];
  }
  return ['価格帯', 'レビュー件数', '見た目の好み', 'ショップ評価'];
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': status === 200 ? 'public, max-age=300' : 'no-store'
    }
  });
}

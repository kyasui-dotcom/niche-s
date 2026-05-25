export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (isQuarantinedPath(url.pathname)) {
      return withSecurityHeaders(new Response('Gone', {
        status: 410,
        headers: {
          'content-type': 'text/plain; charset=utf-8',
          'x-robots-tag': 'noindex, nofollow, noarchive'
        }
      }));
    }

    if (url.pathname === '/api/diagnose' || url.pathname === '/mothers-day/api/diagnose') {
      return handleDiagnose(request, env, url);
    }

    if (url.pathname === '/x-client-ops') {
      return Response.redirect('https://x.niche-s.com/', 301);
    }

    if (url.pathname.startsWith('/x-client-ops/')) {
      const redirectUrl = new URL(request.url);
      redirectUrl.hostname = 'x.niche-s.com';
      redirectUrl.pathname = url.pathname.replace(/^\/x-client-ops/, '') || '/';
      return Response.redirect(redirectUrl.toString(), 301);
    }

    if (isBlockedAssetPath(url.pathname)) {
      return withSecurityHeaders(new Response('Not Found', {
        status: 404,
        headers: {
          'content-type': 'text/plain; charset=utf-8',
          'x-robots-tag': 'noindex, nofollow, noarchive'
        }
      }));
    }

    const assetResponse = await env.ASSETS.fetch(request);
    return withSecurityHeaders(withAnalyticsTag(assetResponse));
  }
};

const GA_MEASUREMENT_ID = 'G-VFCY3JSFQD';
const GA_TAG_SNIPPET = `<script async src="https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${GA_MEASUREMENT_ID}');
</script>`;
const BLOCKED_ASSET_PREFIXES = ['/src/', '/.git/', '/.wrangler/', '/.deploy-assets/', '/node_modules/'];
const BLOCKED_ASSET_FILES = new Set(['/wrangler.toml', '/README.md', '/HANDOFF.md', '/.gitignore']);
const QUARANTINED_PATH_PREFIXES = [
  '/app-article-1000-knock',
  '/uiux-improvement-1000-knock'
];
const QUARANTINED_PATHS = new Set();

function isBlockedAssetPath(pathname) {
  return BLOCKED_ASSET_FILES.has(pathname) || BLOCKED_ASSET_PREFIXES.some((prefix) => pathname.startsWith(prefix));
}

function isQuarantinedPath(pathname) {
  return QUARANTINED_PATHS.has(pathname) || QUARANTINED_PATH_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`));
}

function withAnalyticsTag(response) {
  const contentType = response.headers.get('content-type') || '';
  if (response.status !== 200 || !contentType.includes('text/html')) {
    return response;
  }

  return new HTMLRewriter()
    .on('head', {
      element(element) {
        element.append(GA_TAG_SNIPPET, { html: true });
      }
    })
    .transform(response);
}

function withSecurityHeaders(response) {
  const secured = new Response(response.body, response);
  secured.headers.set('x-content-type-options', 'nosniff');
  secured.headers.set('referrer-policy', 'strict-origin-when-cross-origin');
  secured.headers.set('permissions-policy', 'camera=(), microphone=(), geolocation=(), payment=()');
  secured.headers.set('content-security-policy', "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self' https://openapi.rakuten.co.jp https://www.google-analytics.com https://region1.google-analytics.com https://www.googletagmanager.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self'");
  return secured;
}

const CATEGORY_MAP = {
  flowers: {
    label: '花・フラワーギフト',
    keywords: ['母の日 花 カーネーション ギフト', '母の日 フラワーアレンジ ギフト', '母の日 プリザーブドフラワー ギフト'],
    excludes: ['ペット', '犬', '猫', '仏花', '供花'],
    note: '定番感を優先したい人向け。レビュー件数と配送締切の確認が大事。'
  },
  sweets: {
    label: 'スイーツ・お菓子',
    keywords: ['母の日 スイーツ ギフト', '母の日 焼き菓子 ギフト', '母の日 和菓子 ギフト'],
    excludes: ['訳あり 業務用', 'ペット', '犬', '猫'],
    note: '消えもの寄りで選びやすい定番。冷蔵・常温の違いも見やすいです。'
  },
  gourmet: {
    label: 'グルメ・飲み物',
    keywords: ['母の日 グルメ ギフト', '母の日 紅茶 ギフト', '母の日 コーヒー ギフト'],
    excludes: ['ペット', '犬', '猫', '業務用'],
    note: '少し丁寧な印象を出しやすい帯。お茶時間の提案にも向いています。'
  },
  practical: {
    label: '実用品・雑貨',
    keywords: ['母の日 実用品 ギフト', '母の日 ストール ギフト', '母の日 エプロン おしゃれ ギフト'],
    excludes: ['ペット', '犬', '猫', 'メンズ'],
    note: '使いやすさで選びたい人向け。色味や素材感は商品画像で要確認。'
  },
  relax: {
    label: '癒し・セルフケア',
    keywords: ['母の日 バスギフト', '母の日 ハンドクリーム ギフト', '母の日 リラックス ギフト'],
    excludes: ['ペット', '犬', '猫', 'メンズ'],
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
      const filteredItems = filterItems(items, categoryKey);
      for (const item of filteredItems) {
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
  const boostTerms = {
    classic: '人気 定番 送料無料',
    easy: '高評価 すぐ届く 送料無料',
    useful: '実用的 おしゃれ 人気',
    special: '上質 特別感 人気'
  };

  return category.keywords.map((base) => `${base} ${boostTerms[purposeKey] || boostTerms.classic}`);
}

async function fetchRakutenItems({ applicationId, accessKey, affiliateId, keyword, budget, urgency }) {
  const endpoint = new URL('https://openapi.rakuten.co.jp/ichibams/api/IchibaItem/Search/20220601');
  endpoint.searchParams.set('applicationId', applicationId);
  endpoint.searchParams.set('accessKey', accessKey);
  endpoint.searchParams.set('format', 'json');
  endpoint.searchParams.set('formatVersion', '2');
  endpoint.searchParams.set('keyword', keyword);
  endpoint.searchParams.set('hits', '12');
  endpoint.searchParams.set('page', '1');
  endpoint.searchParams.set('sort', '+itemPrice');
  endpoint.searchParams.set('availability', '1');
  endpoint.searchParams.set('minPrice', String(budget.min));
  endpoint.searchParams.set('maxPrice', String(budget.max));
  endpoint.searchParams.set('imageFlag', '1');
  if (affiliateId) endpoint.searchParams.set('affiliateId', affiliateId);
  if (urgency.fastOnly) endpoint.searchParams.set('shipOverseasFlag', '0');

  const response = await fetch(endpoint, {
    headers: {
      'User-Agent': 'niche-s-mothers-day/1.0',
      'Origin': 'https://niche-s.com'
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

  const items = Array.isArray(data.Items) ? data.Items : [];
  return items.filter((item) => item && item.itemCode && item.itemName && item.itemUrl);
}

function shapeItem(item, category, purpose, budget) {
  const price = Number(item.itemPrice || 0);
  const reviewAverage = Number(item.reviewAverage || 0);
  const reviewCount = Number(item.reviewCount || 0);
  const image = normalizeImageUrl(
    item.mediumImageUrls?.[0]?.imageUrl ||
    item.smallImageUrls?.[0]?.imageUrl ||
    item.itemImageUrl ||
    item.imageUrl ||
    ''
  );
  const affiliateUrl = item.affiliateUrl || item.itemUrl;

  return {
    itemCode: item.itemCode,
    itemName: item.itemName,
    shopName: item.shopName,
    itemPrice: price,
    reviewAverage,
    reviewCount,
    imageUrl: image,
    itemUrl: affiliateUrl,
    catchcopy: item.catchcopy,
    itemCaption: item.itemCaption,
    genreId: item.genreId,
    shippingFlag: item.asurakuFlag === 1 || item.shippingleadtime === 1,
    diagnosisReason: buildReason(item, category, purpose, budget)
  };
}

function normalizeImageUrl(url) {
  if (!url) return '';
  if (typeof url === 'object' && url.imageUrl) return normalizeImageUrl(url.imageUrl);
  return String(url).replace(/^http:\/\//, 'https://');
}

function filterItems(items, categoryKey) {
  const category = CATEGORY_MAP[categoryKey] || CATEGORY_MAP.flowers;
  const excludes = (category.excludes || []).map((term) => term.toLowerCase());
  return items.filter((item) => {
    const text = `${item.itemName || ''} ${item.catchcopy || ''} ${item.shopName || ''}`.toLowerCase();
    return !excludes.some((term) => text.includes(term));
  });
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

async function proxyToWorker(request, upstreamBase, mountPath) {
  const incomingUrl = new URL(request.url);
  const upstreamUrl = new URL(upstreamBase);
  const subpath = incomingUrl.pathname.slice(mountPath.length) || '/';
  upstreamUrl.pathname = subpath;
  upstreamUrl.search = incomingUrl.search;

  const headers = new Headers(request.headers);
  headers.set('host', upstreamUrl.host);
  headers.set('x-forwarded-host', incomingUrl.host);
  headers.set('x-forwarded-proto', incomingUrl.protocol.replace(':', ''));

  return fetch(new Request(upstreamUrl.toString(), {
    method: request.method,
    headers,
    body: request.method === 'GET' || request.method === 'HEAD' ? undefined : request.body,
    redirect: 'manual'
  }));
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

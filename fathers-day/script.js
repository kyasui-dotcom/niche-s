const form = document.getElementById('diagnosis-form');
const summary = document.getElementById('summary');
const statusBox = document.getElementById('status');
const results = document.getElementById('results');

const DATA = {
  classic: {
    label: '定番で外しにくい人',
    categories: ['グルメ・うなぎ', '晩酌・ビール', '名入れタンブラー'],
    bestFor: '失敗しにくさを優先したいとき',
    caution: '定番でも配送締切とレビュー件数は先に確認したほうが安全です。'
  },
  gourmet: {
    label: '食べる・飲むが好き',
    categories: ['うなぎ・海鮮', 'クラフトビール', 'おつまみセット'],
    bestFor: '家で楽しめる消えものを贈りたいとき',
    caution: '冷蔵・冷凍の受け取りやすさ、好みの偏りに注意。'
  },
  practical: {
    label: '実用品のほうが喜ばれやすい',
    categories: ['タンブラー', '甚平・ルームウェア', '財布・小物'],
    bestFor: '使いやすさと実感価値を優先したいとき',
    caution: 'サイズ・色・素材の相性を見落としやすいです。'
  },
  hobby: {
    label: '趣味やこだわりがある',
    categories: ['コーヒー器具', 'ゴルフ小物', 'ガジェット雑貨'],
    bestFor: '相手像がかなり見えているとき',
    caution: '趣味寄りは刺さる一方で、ズレると弱いので絞り込み必須。'
  },
  relax: {
    label: '癒しや休息を渡したい',
    categories: ['マッサージ小物', '入浴・リラックス雑貨', 'お取り寄せスイーツ'],
    bestFor: '頑張りへの労いを伝えたいとき',
    caution: '香りや触感など好み差が出るものはレビュー確認が重要。'
  }
};

const BUDGETS = {
  lite: { label: '3,000円前後', search: '3000円 父の日 ギフト', note: '気軽で受け取りやすい帯。消えもの・雑貨が強め。', bucket: '3,000円前後で探す' },
  standard: { label: '5,000円前後', search: '5000円 父の日 ギフト', note: '一番選択肢が多く、定番も少し特別感も狙いやすい帯。', bucket: '5,000円前後で探す' },
  premium: { label: '8,000円前後', search: '8000円 父の日 ギフト', note: '食・酒・名入れ系で見栄えを出しやすい帯。', bucket: '8,000円前後で探す' },
  luxe: { label: '10,000円以上', search: '10000円 父の日 高級 ギフト', note: '上質さや特別感を優先したいときの帯。', bucket: '10,000円以上で探す' }
};

const TONES = {
  safe: { label: 'まずは無難で外しにくく', modifier: '人気 定番 高評価', focus: '失敗しにくい方向', reason: 'まずは王道カテゴリから比較しやすい条件です。' },
  premium: { label: '少し特別感を出したい', modifier: '上質 特別感 名入れ', focus: '少し特別感のある方向', reason: '見た目やギフト感が出る候補を優先すると相性が良いです。' },
  casual: { label: '気軽に受け取りやすく', modifier: '送料無料 気軽 実用', focus: '受け取りやすい方向', reason: '重すぎない価格感と配送しやすさを優先したい条件です。' },
  useful: { label: '使ってもらいやすさ優先', modifier: '実用 人気 長く使える', focus: '実用品寄りの方向', reason: '生活の中で使いやすいものから入ると外しにくい条件です。' }
};

const URGENCY = {
  relaxed: { label: 'まだ比較する余裕あり', checklist: ['レビュー件数', 'セット内容', '好みのズレ', '予算帯の幅'] },
  soon: { label: '今週中には決めたい', checklist: ['配送締切', '最短発送', 'レビュー件数', '冷蔵/常温'] },
  urgent: { label: 'かなり直前。配送優先', checklist: ['最短発送', '当日着の可否', 'ショップ評価', '常温で受け取りやすいか'] }
};

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function buildRakutenSearchUrl(keyword) {
  const url = new URL('https://search.rakuten.co.jp/search/mall/');
  url.searchParams.set('sitem', keyword);
  url.searchParams.set('f', 'A');
  return url.toString();
}

function buildRecommendations({ budget, persona, tone, urgency }) {
  const personaData = DATA[persona] || DATA.classic;
  const budgetData = BUDGETS[budget] || BUDGETS.standard;
  const toneData = TONES[tone] || TONES.safe;
  const urgencyData = URGENCY[urgency] || URGENCY.relaxed;

  const keywordSeeds = personaData.categories;
  const items = keywordSeeds.map((category, index) => {
    const keyword = `${budgetData.search} ${category} ${toneData.modifier}`;
    return {
      rank: index + 1,
      title: index === 0 ? `${category}から先に見る` : `${category}も比較候補に入れる`,
      category,
      budgetLabel: budgetData.bucket,
      reason: index === 0
        ? `${personaData.bestFor}。${toneData.reason}`
        : `${category}は ${toneData.focus} と相性がよく、候補の幅を広げやすいです。`,
      caution: index === 0
        ? personaData.caution
        : urgency === 'urgent'
          ? '直前なら在庫と発送日を優先。ギフト包装の可否も見落とし注意。'
          : '比較を増やしすぎると決めきれなくなるので、レビュー上位から3つ程度に絞るのがおすすめ。',
      searchKeyword: keyword,
      url: buildRakutenSearchUrl(keyword)
    };
  });

  return {
    request: {
      budgetLabel: budgetData.label,
      personaLabel: personaData.label,
      toneLabel: toneData.label,
      urgencyLabel: urgencyData.label
    },
    diagnosis: {
      headline: `${budgetData.label}で${personaData.label}向けに選ぶなら、まずは「${items[0].category}」から見るのが素直です。`,
      note: `${budgetData.note} ${personaData.bestFor}。`,
      checklist: urgencyData.checklist,
      keywords: items.map((item) => item.searchKeyword)
    },
    items
  };
}

function renderSummary(payload) {
  const { request, diagnosis } = payload;
  summary.innerHTML = `
    <strong>${escapeHtml(diagnosis.headline)}</strong>
    <span>${escapeHtml(diagnosis.note)}</span>
    <div class="meta-pills">
      <span>予算: ${escapeHtml(request.budgetLabel)}</span>
      <span>相手像: ${escapeHtml(request.personaLabel)}</span>
      <span>渡し方: ${escapeHtml(request.toneLabel)}</span>
      <span>急ぎ具合: ${escapeHtml(request.urgencyLabel)}</span>
    </div>
    <div class="checklist">
      ${diagnosis.checklist.map((item) => `<span>${escapeHtml(item)}</span>`).join('')}
    </div>
    <div class="keyword-list">
      ${diagnosis.keywords.map((item) => `<span>${escapeHtml(item)}</span>`).join('')}
    </div>
  `;
}

function renderResults(items = []) {
  results.innerHTML = items.map((item, index) => `
    <article class="result-card ${index === 0 ? 'best' : ''}">
      <span class="rank-badge">${index === 0 ? 'まず見る候補' : `候補 ${index + 1}`}</span>
      <h3>${escapeHtml(item.title)}</h3>
      <div class="result-tags">
        <span class="category">カテゴリ: ${escapeHtml(item.category)}</span>
        <span class="budget">${escapeHtml(item.budgetLabel)}</span>
        <span class="reason">Rakuten検索向き</span>
      </div>
      <p>${escapeHtml(item.reason)}</p>
      <div class="note-box">注意点: ${escapeHtml(item.caution)}</div>
      <div class="note-box">検索ワード: ${escapeHtml(item.searchKeyword)}</div>
      <div class="result-actions">
        <a class="button primary" href="${escapeHtml(item.url)}" target="_blank" rel="nofollow sponsored noopener noreferrer">楽天でこの条件を検索する</a>
      </div>
    </article>
  `).join('');
}

function runDiagnosis() {
  const formData = new FormData(form);
  const payload = buildRecommendations({
    budget: formData.get('budget'),
    persona: formData.get('persona'),
    tone: formData.get('tone'),
    urgency: formData.get('urgency')
  });

  renderSummary(payload);
  renderResults(payload.items);
  statusBox.textContent = 'そのまま使える検索導線を3本に絞って表示しました。';
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  runDiagnosis();
});

runDiagnosis();

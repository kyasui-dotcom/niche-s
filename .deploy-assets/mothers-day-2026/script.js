const AFFILIATE_MODE = 'affiliate-first';

const CANDIDATES = {
  flowers: [
    {
      id: 'flowers-mini-arrangement',
      name: '定番のフラワーアレンジ',
      label: '花の王道',
      budgets: [3000, 5000, 8000, 12000],
      urgencyPenalty: { normal: 0, soon: 4, lastminute: 10 },
      description: '迷ったときに外しにくい定番。母の日らしさがひと目で伝わりやすいカテゴリです。',
      bestFor: '定番感を重視したい / 写真映えを期待したい',
      caution: '直前は配送締切の確認が必須。',
      query: '母の日 フラワーアレンジ ギフト'
    },
    {
      id: 'flowers-sweets-set',
      name: '花とスイーツのセット',
      label: '迷いにくい組み合わせ',
      budgets: [5000, 8000, 12000],
      urgencyPenalty: { normal: 0, soon: 2, lastminute: 8 },
      description: '見た目の華やかさと食べやすさを両立しやすい、比較的選びやすい王道セット。',
      bestFor: 'ひとつで特別感を出したい / 何を足すか悩みたくない',
      caution: '要冷蔵・配送日指定の条件差に注意。',
      query: '母の日 花 スイーツ セット'
    },
    {
      id: 'flowers-preserved',
      name: 'プリザーブドフラワー',
      label: '長く飾りやすい',
      budgets: [5000, 8000, 12000],
      urgencyPenalty: { normal: 0, soon: 1, lastminute: 5 },
      description: '生花より配送リスクを抑えつつ、長く楽しんでもらいやすい選択肢。',
      bestFor: '長持ち重視 / 手入れの手軽さを優先したい',
      caution: 'サイズ感の誤差は商品写真で要確認。',
      query: '母の日 プリザーブドフラワー ギフト'
    }
  ],
  sweets: [
    {
      id: 'sweets-baked',
      name: '焼き菓子ギフト',
      label: '配送の失敗が少なめ',
      budgets: [3000, 5000, 8000],
      urgencyPenalty: { normal: 0, soon: 0, lastminute: 2 },
      description: 'レビュー比較がしやすく、直前でも選びやすい定番の消えもの。',
      bestFor: '好みの外しにくさ / 配送優先',
      caution: '甘さの好みや個包装有無は確認したい。',
      query: '母の日 焼き菓子 ギフト 人気'
    },
    {
      id: 'sweets-fruit-jelly',
      name: 'フルーツゼリー・涼菓',
      label: '春後半〜初夏向け',
      budgets: [3000, 5000, 8000],
      urgencyPenalty: { normal: 0, soon: 1, lastminute: 2 },
      description: '季節感が出しやすく、年齢を問わず渡しやすい軽めのギフト候補。',
      bestFor: '重すぎない贈り物 / 季節感を出したい',
      caution: '要冷蔵か常温かは商品ごとに差があります。',
      query: '母の日 フルーツゼリー ギフト'
    },
    {
      id: 'sweets-premium-tea',
      name: '紅茶・コーヒーとスイーツの組み合わせ',
      label: '少し丁寧な印象',
      budgets: [5000, 8000, 12000],
      urgencyPenalty: { normal: 0, soon: 1, lastminute: 3 },
      description: '食べて終わりになりすぎず、ちょっとした時間ごと贈りやすい組み合わせ。',
      bestFor: 'お茶時間が好き / 少し上品に見せたい',
      caution: 'カフェインや好みが分かれる場合は注意。',
      query: '母の日 紅茶 スイーツ ギフト'
    }
  ],
  practical: [
    {
      id: 'practical-apron',
      name: '上品なエプロン・キッチン雑貨',
      label: '実用品の定番',
      budgets: [3000, 5000, 8000],
      urgencyPenalty: { normal: 0, soon: 1, lastminute: 2 },
      description: '毎日の延長線で使ってもらいやすく、レビュー比較もしやすいカテゴリです。',
      bestFor: '使うシーンが想像しやすいものを選びたい',
      caution: '色や柄の好みは分かれやすいです。',
      query: '母の日 エプロン ギフト おしゃれ'
    },
    {
      id: 'practical-stole',
      name: 'ストール・軽い羽織もの',
      label: '季節の変わり目向け',
      budgets: [5000, 8000, 12000],
      urgencyPenalty: { normal: 0, soon: 1, lastminute: 4 },
      description: '実用品寄りでも見た目の特別感を出しやすい、比較的わかりやすいギフト帯。',
      bestFor: '実用品だけど地味すぎないものを探したい',
      caution: '素材感や色味が写真で違って見えることがあります。',
      query: '母の日 ストール ギフト'
    },
    {
      id: 'practical-mug',
      name: 'マグカップ＋小さなお菓子',
      label: '低予算でも形になる',
      budgets: [3000, 5000],
      urgencyPenalty: { normal: 0, soon: 0, lastminute: 1 },
      description: '予算を抑えつつ“ちゃんと贈った感”を作りやすい、軽量な組み合わせです。',
      bestFor: '3,000円前後で実用品寄りにしたい',
      caution: '既に似た物を持っていないかだけ確認したい。',
      query: '母の日 マグカップ ギフト お菓子'
    }
  ],
  relax: [
    {
      id: 'relax-handcare',
      name: 'ハンドケア・バスギフト',
      label: '軽く気分転換寄り',
      budgets: [3000, 5000, 8000],
      urgencyPenalty: { normal: 0, soon: 0, lastminute: 1 },
      description: 'サイズが重すぎず、母の日っぽい特別感も出しやすい定番カテゴリ。',
      bestFor: '気を遣わせすぎない / 受け取りやすさ重視',
      caution: '香りの好みは個人差が大きめ。',
      query: '母の日 ハンドクリーム バスギフト'
    },
    {
      id: 'relax-massage',
      name: '小型マッサージ家電',
      label: '高単価寄り',
      budgets: [8000, 12000],
      urgencyPenalty: { normal: 0, soon: 2, lastminute: 5 },
      description: '予算が取れるならわかりやすい満足感を出しやすく、比較記事にも展開しやすい候補。',
      bestFor: 'わかりやすい機能価値を贈りたい',
      caution: '重さや使い勝手の確認が重要。',
      query: '母の日 マッサージ器 ギフト'
    },
    {
      id: 'relax-aroma',
      name: 'アロマ・リラックスセット',
      label: '雰囲気重視',
      budgets: [5000, 8000, 12000],
      urgencyPenalty: { normal: 0, soon: 1, lastminute: 2 },
      description: '写真映えしやすくSNSでも説明しやすい“癒し”系の組み合わせ。',
      bestFor: '世界観のある贈り物にしたい',
      caution: '香りの好き嫌いは事前に少し考えたい。',
      query: '母の日 アロマ ギフト セット'
    }
  ]
};

const PLATFORM_LINKS = [
  { name: '楽天市場で候補を見る', host: 'Rakuten', url: (query) => `https://search.rakuten.co.jp/search/mall/${encodeURIComponent(query)}/` },
  { name: 'Amazonで候補を見る', host: 'Amazon', url: (query) => `https://www.amazon.co.jp/s?k=${encodeURIComponent(query)}` },
  { name: 'Yahoo!ショッピングで候補を見る', host: 'Yahoo!ショッピング', url: (query) => `https://shopping.yahoo.co.jp/search?p=${encodeURIComponent(query)}` }
];

const BUDGET_LABELS = {
  3000: '3,000円前後',
  5000: '5,000円前後',
  8000: '8,000円前後',
  12000: '10,000円以上'
};

const URGENCY_COPY = {
  normal: 'まだ比較する余裕あり',
  soon: '今週中には決めたい',
  lastminute: 'かなり直前。配送優先で選びたい'
};

function scoreCandidate(candidate, budget, urgency, taste) {
  const budgetDistance = Math.min(...candidate.budgets.map((value) => Math.abs(value - budget)));
  const budgetPenalty = budgetDistance / 120;
  const urgencyPenalty = candidate.urgencyPenalty[urgency] || 0;
  const tasteBonus = candidate.id.startsWith(taste) ? 4 : 0;
  return Math.round(100 - budgetPenalty - urgencyPenalty + tasteBonus);
}

function pickCandidates({ budget, taste, urgency }) {
  return [...CANDIDATES[taste]]
    .map((candidate) => ({ ...candidate, score: scoreCandidate(candidate, budget, urgency, taste) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
}

function renderSummary({ budget, taste, urgency }, picks) {
  const best = picks[0];
  const summary = document.getElementById('summary');
  summary.innerHTML = `
    <strong>${BUDGET_LABELS[budget]} × ${URGENCY_COPY[urgency]} なら「${best.name}」がいちばん素直です。</strong>
    <span>${best.description} まずはカテゴリ比較で外しにくい候補を掴み、そのあと価格帯・レビュー・配送締切で絞る流れを想定しています。</span>
    <div class="meta-pills">
      <span>Monetization: ${AFFILIATE_MODE}</span>
      <span>想定流入: SEO + SNS</span>
      <span>タイプ: ${document.querySelector(`#taste option[value="${taste}"]`).textContent}</span>
    </div>
  `;
}

function renderCandidates(picks) {
  const results = document.getElementById('results');
  results.innerHTML = picks.map((candidate, index) => `
    <article class="candidate-card ${index === 0 ? 'best' : ''}">
      <span class="rank-badge">${index === 0 ? 'おすすめ' : `候補 ${index + 1}`}</span>
      <h3>${candidate.name}</h3>
      <p class="match-score">${candidate.score}<span> / 100</span></p>
      <p class="candidate-reason">${candidate.label} — ${candidate.description}</p>
      <div class="reason-grid">
        <div class="reason-card">
          <h3>向いている人</h3>
          <p>${candidate.bestFor}</p>
        </div>
        <div class="reason-card">
          <h3>比較時の注意</h3>
          <p>${candidate.caution}</p>
        </div>
      </div>
      <div class="buy-links">
        ${PLATFORM_LINKS.map((platform) => `
          <a href="${platform.url(candidate.query)}" target="_blank" rel="nofollow sponsored noopener noreferrer">
            <span>
              <strong>${platform.host}</strong><br />
              <span class="buy-note">${platform.name}</span>
            </span>
            <span>→</span>
          </a>
        `).join('')}
      </div>
      <p class="affiliate-note">※ 送客前提の比較導線です。実際の在庫・送料・レビュー件数・締切は遷移先で確認してください。</p>
    </article>
  `).join('');
}

function renderShareCopy(form, picks) {
  const best = picks[0];
  const copyOptions = [
    `母の日ギフト、${BUDGET_LABELS[form.budget]}で${URGENCY_COPY[form.urgency]}なら「${best.name}」から見るのがいちばん早そう。花・スイーツ・実用品・癒し系で迷ってる人向けに候補を絞れるページを置いてみた。`,
    `母の日プレゼント、30秒で候補を絞るならこれ。${BUDGET_LABELS[form.budget]} / ${document.querySelector(`#taste option[value="${form.taste}"]`).textContent} / ${URGENCY_COPY[form.urgency]} でまず最初の1個を決めやすくした。`,
    `「母の日、何を贈るかまだ決まってない」向けに、予算とタイプからEC比較へ流せる軽い診断ページを作った。まずは${best.name}あたりから見るのが無難。`
  ];

  const share = document.getElementById('share-copy');
  share.innerHTML = copyOptions.map((text, index) => `
    <div class="share-item">
      <p><strong>${index === 0 ? 'そのまま投稿しやすい文面' : `別案 ${index}`}</strong></p>
      <code>${text}</code>
      <div class="share-helper">
        <span>説明しやすい一言フックを優先した文面です。</span>
        <button class="button subtle copy-button" type="button" data-copy="${text.replace(/"/g, '&quot;')}">コピーする</button>
      </div>
    </div>
  `).join('');

  share.querySelectorAll('.copy-button').forEach((button) => {
    button.addEventListener('click', async () => {
      const text = button.getAttribute('data-copy');
      try {
        await navigator.clipboard.writeText(text);
        button.textContent = 'コピーしました';
      } catch {
        button.textContent = 'コピー失敗';
      }
      setTimeout(() => { button.textContent = 'コピーする'; }, 1800);
    });
  });
}

function updateDiagnosis() {
  const budget = Number(document.getElementById('budget').value);
  const taste = document.getElementById('taste').value;
  const urgency = document.getElementById('urgency').value;
  const form = { budget, taste, urgency };
  const picks = pickCandidates(form);
  renderSummary(form, picks);
  renderCandidates(picks);
  renderShareCopy(form, picks);
}

document.getElementById('gift-form').addEventListener('submit', (event) => {
  event.preventDefault();
  updateDiagnosis();
});

updateDiagnosis();

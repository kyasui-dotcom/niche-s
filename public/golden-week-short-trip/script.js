const form = document.getElementById('diagnosis-form');
const summary = document.getElementById('summary');
const results = document.getElementById('results');

const optionLabels = {
  budget: {
    lite: '5,000円以内',
    standard: '12,000円前後',
    premium: '25,000円前後',
    luxe: '40,000円以上'
  },
  distance: {
    near: '60分以内',
    mid: '90分以内',
    far: '2時間以内'
  },
  group: {
    solo: 'ひとり',
    couple: '2人',
    family: '家族',
    friends: '友人グループ'
  },
  priority: {
    save: '出費を抑えたい',
    easy: '移動のしんどさを減らしたい',
    food: 'ごはん・温泉・体験をちゃんと楽しみたい',
    special: '少しだけ非日常感がほしい'
  }
};

const priorityKeywords = {
  save: '日帰り 節約 公園 道の駅',
  easy: '近場 ドライブ 日帰り',
  food: '日帰り 温泉 ランチ',
  special: '近場 1泊 小旅行'
};

function escapeHtml(value = '') {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function buildPlan(values) {
  const { budget, distance, group, priority } = values;
  const nearTrip = distance === 'near';
  const relaxedBudget = budget === 'premium' || budget === 'luxe';
  const needsFlex = group === 'family' || group === 'friends';

  let headline = '日帰り中心の近場プランが相性よさそうです';
  let note = 'まずは移動を短くし、混雑日に予約が必要なものだけ先に押さえる進め方が無難です。';

  if (relaxedBudget && !nearTrip) {
    headline = '1泊の近場小旅行まで視野に入ります';
    note = '宿を取るなら観光地のど真ん中より、移動しやすい周辺エリアを先に見ると崩れにくいです。';
  } else if (priority === 'save') {
    headline = '半日〜日帰りでコスパ重視が噛み合います';
    note = '高速代・駐車場代・食事代を分けて見ると、思ったより出費を抑えやすいです。';
  } else if (priority === 'food') {
    headline = '移動を欲張らず、食事か温泉を主役にする形が向いています';
    note = '体験を増やすより、1本だけ満足度の高い予約を押さえるほうがGWらしい充実感が出やすいです。';
  }

  const checklist = [
    nearTrip ? '朝出発で日帰り優先' : '1泊候補も比較',
    needsFlex ? '駐車場 or 席予約を先に確認' : '移動時間を先に固定',
    priority === 'save' ? '食事予算の上限を先に決める' : '混雑ピーク時間を避ける',
    relaxedBudget ? '宿は駅近・IC近くも候補に入れる' : '無理に泊まらず日帰りに寄せる'
  ];

  const basePlans = [
    {
      title: 'まず見る動き方',
      description: nearTrip
        ? '片道60分以内で、朝イチ出発 → 昼ピーク前にメイン行動 → 夕方前に戻る流れ。'
        : '片道90分〜2時間以内で、1本だけ主目的を置く近場小旅行。寄り道を増やしすぎない形。',
      bullets: [
        group === 'family' ? '子ども連れなら昼食時間を固定して崩れにくくする' : 'メインの立ち寄り先は1〜2個までに絞る',
        priority === 'food' ? 'ランチ or 温泉のどちらかを主役にする' : '移動時間の短さを価値として扱う',
        budget === 'lite' ? '有料施設は1つまでに絞る' : '少し良い食事か体験を1本だけ入れる'
      ],
      ctaLabel: '近場アイデアを検索',
      ctaUrl: `https://search.rakuten.co.jp/search/mall/${encodeURIComponent(priorityKeywords[priority])}/`
    },
    {
      title: '先に押さえる予約',
      description: needsFlex
        ? '宿より先に、駐車場・ランチ・座席予約の可否を確認したほうが崩れにくい条件です。'
        : '混雑日に詰まりやすいのは、人気ランチ・日帰り温泉・指定席系。必要なものだけ先に固定。',
      bullets: [
        nearTrip ? '日帰りなら駐車場とランチを最優先' : '1泊なら宿の場所よりアクセスのしやすさを優先',
        group === 'friends' ? '集合場所と出発時間を前日に固定' : '出発時間を先に決めると当日のストレスが減る',
        priority === 'special' ? '予約は“ひとつだけ特別”に寄せる' : '予約を増やしすぎず柔軟性を残す'
      ],
      ctaLabel: '宿・旅行の探し方を見る',
      ctaUrl: 'https://travel.rakuten.co.jp/'
    },
    {
      title: 'この条件の落とし所',
      description: relaxedBudget
        ? '近場1泊にして、移動を短くしながら食事や温泉の質を上げるプランがきれいです。'
        : '日帰りで済ませて、食事・体験・おみやげに少し寄せるほうが満足度を作りやすい条件です。',
      bullets: [
        priority === 'save' ? '交通費と食費の上限を先に分けておく' : '帰宅時間を先に決めて無理に詰め込まない',
        group === 'solo' ? '混雑時間をずらせるので朝遅め出発も選択肢' : '同伴者の疲れやすさを基準に予定を減らす',
        distance === 'far' ? '“行ける”より“戻りやすい”を優先' : '近さをそのまま快適さとして使う'
      ],
      ctaLabel: 'Niche-sの季節案件へ戻る',
      ctaUrl: 'https://niche-s.com/'
    }
  ];

  return { headline, note, checklist, plans: basePlans };
}

function renderSummary(labels, plan) {
  summary.innerHTML = `
    <strong>${escapeHtml(plan.headline)}</strong>
    <span>${escapeHtml(plan.note)}</span>
    <div class="meta-pills">
      <span>予算: ${escapeHtml(labels.budget)}</span>
      <span>移動: ${escapeHtml(labels.distance)}</span>
      <span>人数: ${escapeHtml(labels.group)}</span>
      <span>優先: ${escapeHtml(labels.priority)}</span>
    </div>
    <div class="checklist">
      ${plan.checklist.map((item) => `<span>${escapeHtml(item)}</span>`).join('')}
    </div>
  `;
}

function renderPlans(plans) {
  results.innerHTML = plans
    .map(
      (plan, index) => `
        <article class="result-card ${index === 0 ? 'best' : ''}">
          <span class="rank-badge">${index === 0 ? 'まず見る案' : `案 ${index + 1}`}</span>
          <h3>${escapeHtml(plan.title)}</h3>
          <p>${escapeHtml(plan.description)}</p>
          <ul class="result-list">
            ${plan.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join('')}
          </ul>
          <div class="result-actions">
            <a class="button primary" href="${escapeHtml(plan.ctaUrl)}" target="_blank" rel="nofollow sponsored noopener noreferrer">${escapeHtml(plan.ctaLabel)}</a>
          </div>
        </article>
      `
    )
    .join('');
}

function runDiagnosis() {
  const values = Object.fromEntries(new FormData(form).entries());
  const labels = Object.fromEntries(
    Object.entries(values).map(([key, value]) => [key, optionLabels[key][value]])
  );
  const plan = buildPlan(values);
  renderSummary(labels, plan);
  renderPlans(plan.plans);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  runDiagnosis();
});

runDiagnosis();

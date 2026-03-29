const roomSize = document.getElementById('roomSize');
const laundryLoad = document.getElementById('laundryLoad');
const usageFrequency = document.getElementById('usageFrequency');
const mainPain = document.getElementById('mainPain');

const capacityLabel = document.getElementById('capacityLabel');
const summaryText = document.getElementById('summaryText');
const typeLabel = document.getElementById('typeLabel');
const typeReason = document.getElementById('typeReason');
const fitText = document.getElementById('fitText');
const cautionText = document.getElementById('cautionText');
const checkpoints = document.getElementById('checkpoints');
const shareCopy = document.getElementById('shareCopy');
const copyButton = document.getElementById('copyButton');
const copyStatus = document.getElementById('copyStatus');
const rakutenLink = document.getElementById('rakutenLink');
const amazonLink = document.getElementById('amazonLink');
const yahooLink = document.getElementById('yahooLink');

const capacityMap = [
  { min: 0, label: '6L/日未満クラス', query: '除湿機 コンパクト 部屋干し', caution: '軽さ優先だと乾燥速度は控えめになりがち。レビューで衣類乾燥時間も確認。'},
  { min: 4, label: '6〜8L/日クラス', query: '除湿機 6L 8L 部屋干し', caution: '一人暮らし〜二人暮らしの梅雨対策向け。タンク容量が小さすぎると連続運転で手間が出ます。'},
  { min: 7, label: '8〜10L/日クラス', query: '除湿機 8L 10L 衣類乾燥', caution: '家族ぶんや頻度高めならこの辺から比較開始が無難。サイズ感も必ず確認。'},
  { min: 10, label: '10L/日以上クラス', query: '除湿機 10L 12L 14L 衣類乾燥', caution: '乾燥力は強い反面、重さ・価格・運転音の確認が重要。'}
];

function calculate() {
  let score = 0;
  if (roomSize.value === 'medium') score += 2;
  if (roomSize.value === 'large') score += 4;
  if (roomSize.value === 'xlarge') score += 6;

  if (laundryLoad.value === 'medium') score += 2;
  if (laundryLoad.value === 'heavy') score += 4;

  if (usageFrequency.value === 'often') score += 2;
  if (usageFrequency.value === 'daily') score += 4;

  if (mainPain.value === 'drying') score += 2;
  if (mainPain.value === 'mold') score += 2;
  if (mainPain.value === 'power') score += 1;

  const capacity = [...capacityMap].reverse().find((item) => score >= item.min) || capacityMap[0];

  let recommendedType = 'コンプレッサー式寄り';
  let reason = '梅雨〜夏の部屋干し乾燥力を優先しやすい条件です。';
  if (mainPain.value === 'space') {
    recommendedType = 'デシカント式も有力';
    reason = '持ち運びや軽さ・サイズ感を先に見たい条件です。';
  } else if (mainPain.value === 'power') {
    recommendedType = 'コンプレッサー式寄り';
    reason = '梅雨時の電気代バランスを見やすい方式です。';
  } else if (usageFrequency.value === 'daily' && laundryLoad.value === 'heavy') {
    recommendedType = 'ハイブリッド式も比較候補';
    reason = '通年で高頻度に使うなら、季節をまたぐ扱いやすさにも価値があります。';
  }

  capacityLabel.textContent = capacity.label;
  summaryText.textContent = `${describeRoom()}・${describeLaundry()}・${describeFrequency()}なら、まずは ${capacity.label} から比較し始めると候補が絞りやすいです。`;
  typeLabel.textContent = recommendedType;
  typeReason.textContent = reason;
  fitText.textContent = buildFitText(capacity.label, recommendedType);
  cautionText.textContent = capacity.caution;

  checkpoints.innerHTML = [
    `${capacity.label} 前後で「衣類乾燥」表記があるか`,
    'タンク容量と連続排水対応の有無',
    mainPain.value === 'space' ? '本体サイズ・重さ・持ち手の使いやすさ' : '運転音と夜間利用レビュー',
    usageFrequency.value === 'daily' ? '毎日回す前提で手入れしやすいか' : '必要な時だけ出して使いやすいか'
  ].map((item) => `<li>${item}</li>`).join('');

  updateLinks(capacity.query, recommendedType);
  updateShareCopy(capacity.label, recommendedType);
}

function describeRoom() {
  return ({ small: 'コンパクトな部屋', medium: '標準的な部屋', large: '広めの部屋', xlarge: 'かなり広めの空間' })[roomSize.value];
}
function describeLaundry() {
  return ({ light: '洗濯量は少なめ', medium: '洗濯量は普通', heavy: '洗濯量は多め' })[laundryLoad.value];
}
function describeFrequency() {
  return ({ sometimes: '使うのは雨の日中心', often: '週に数回は使う', daily: 'ほぼ毎日使う' })[usageFrequency.value];
}
function buildFitText(capacity, type) {
  return `${capacity} を見ると、「大きすぎて候補が多すぎる」も「小さすぎて後悔する」も避けやすめ。${type} を軸に見ると、レビュー比較の観点も揃えやすいです。`;
}
function updateLinks(query, type) {
  const encoded = encodeURIComponent(`${query} ${type}`);
  rakutenLink.href = `https://search.rakuten.co.jp/search/mall/${encoded}/`;
  amazonLink.href = `https://www.amazon.co.jp/s?k=${encoded}`;
  yahooLink.href = `https://shopping.yahoo.co.jp/search?p=${encoded}`;
}
function updateShareCopy(capacity, type) {
  shareCopy.value = `部屋干し除湿機サイズ診断をやってみた。\n・目安: ${capacity}\n・優先方式: ${type}\n・条件: ${describeRoom()} / ${describeLaundry()} / ${describeFrequency()}\n梅雨前に比較の入口を整理したい人向け。\nhttps://niche-s.com/dehumidifier/`;
}

[roomSize, laundryLoad, usageFrequency, mainPain].forEach((element) => {
  element.addEventListener('change', calculate);
});

copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(shareCopy.value);
    copyStatus.textContent = 'コピーしました。SNSやメモにそのまま貼れます。';
  } catch (error) {
    shareCopy.focus();
    shareCopy.select();
    copyStatus.textContent = '自動コピーできなかったので、選択状態にしました。';
  }
});

calculate();

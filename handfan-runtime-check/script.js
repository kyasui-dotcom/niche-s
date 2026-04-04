const mahInput = document.getElementById('mah');
const efficiencyInput = document.getElementById('efficiency');
const wattsInput = document.getElementById('watts');
const presetInput = document.getElementById('preset');
const hoursValue = document.getElementById('hoursValue');
const whValue = document.getElementById('whValue');
const wattsValue = document.getElementById('wattsValue');
const useCaseNote = document.getElementById('useCaseNote');

function formatHours(hours) {
  if (!Number.isFinite(hours) || hours <= 0) return '0.0';
  return hours >= 10 ? hours.toFixed(1) : hours.toFixed(1);
}

function buildUseCaseNote(hours, mah, watts) {
  if (hours < 4) return `${mah.toLocaleString()}mAh でも ${watts.toFixed(1)}W だと短めです。強風中心なら予備バッテリーや大容量モデルを考えたいライン。`;
  if (hours < 8) return `${mah.toLocaleString()}mAh なら短い外出〜半日向けの目安。テーマパークやフェスなら少し不安が残る長さです。`;
  if (hours < 14) return `${mah.toLocaleString()}mAh・${watts.toFixed(1)}W前後なら、通勤 + 日中の外出くらいはカバーしやすい目安です。`;
  return `${mah.toLocaleString()}mAh でこの消費W数ならかなり余裕あり。旅行・イベント・スマホ兼用も視野に入れやすいです。`;
}

function calculate() {
  const mah = Math.max(0, Number(mahInput.value) || 0);
  const efficiency = Math.min(100, Math.max(1, Number(efficiencyInput.value) || 85));
  const watts = Math.max(0.1, Number(wattsInput.value) || 3);
  const wh = (mah * 3.7 / 1000) * (efficiency / 100);
  const hours = wh / watts;

  hoursValue.textContent = formatHours(hours);
  whValue.textContent = `${wh.toFixed(1)}Wh`;
  wattsValue.textContent = `${watts.toFixed(1)}W`;
  useCaseNote.textContent = buildUseCaseNote(hours, mah, watts);
}

presetInput.addEventListener('change', () => {
  wattsInput.value = presetInput.value;
  calculate();
});

[mahInput, efficiencyInput, wattsInput].forEach((input) => {
  input.addEventListener('input', calculate);
});

document.querySelectorAll('[data-mah], [data-watts]').forEach((button) => {
  button.addEventListener('click', () => {
    if (button.dataset.mah) mahInput.value = button.dataset.mah;
    if (button.dataset.watts) wattsInput.value = button.dataset.watts;
    calculate();
  });
});

calculate();

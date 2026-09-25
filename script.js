const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');
tabs.forEach((tab) => tab.addEventListener('click', () => {
  tabs.forEach((item) => item.classList.toggle('active', item === tab));
  panels.forEach((panel) => panel.classList.toggle('active', panel.id === tab.dataset.tab));
}));

document.querySelector('#reveal-button').addEventListener('click', (event) => {
  document.querySelector('#love-note').classList.add('shown');
  event.currentTarget.textContent = 'это всё правда ♡';
});

const loveMessages = ['очень сильно', 'безумно', 'до луны и обратно', 'всем сердцем', 'бесконечно. Даже ползунка не хватает ♡'];
document.querySelector('#love-range').addEventListener('input', (event) => {
  document.querySelector('#range-result').textContent = loveMessages[event.target.value - 1];
});

const memories = [
  'Там всё началось. И я бы снова выбрал тот же путь — к тебе.',
  'Один первый взгляд, который оказался началом целого мира.',
  'И вот мы здесь: 107 дней счастья и ещё столько всего впереди.'
];
document.querySelector('#memory-range').addEventListener('input', (event) => {
  document.querySelector('#memory-text').textContent = memories[event.target.value];
});

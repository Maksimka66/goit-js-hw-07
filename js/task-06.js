function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Усі необхідні елементи для роботи
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');
const inputString = document.querySelector('input[type="number"]');

createBtn.classList.add('create-btn');
destroyBtn.classList.add('destroy-btn');
inputString.classList.add('form-for-fill');

// Функція для створення боксів
const createBoxes = amount => {
  boxes.innerHTML = '';
  for (let i = 0; i < amount; i++) {
    const newElem = document.createElement('div');
    newElem.style.width = 30 + 10 * i + 'px';
    newElem.style.height = 30 + 10 * i + 'px';
    newElem.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(newElem);
  }
};

// Кнопка для створення колекції
const createCollection = createBtn.addEventListener('click', () => {
  if (inputString.value <= 100 && inputString.value >= 1) {
    createBoxes(inputString.value);
  }
});

// Функція та кнопка для очищення #boxes
const destroyBoxes = () => {
  boxes.innerHTML = '';
  inputString.value = '';
};

const removeBoxes = destroyBtn.addEventListener('click', () => {
  destroyBoxes();
});

const inputToFill = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

inputToFill.addEventListener('input', event => {
  output.textContent = event.currentTarget.value.trim()
    ? event.currentTarget.value
    : 'Anonymous';
});

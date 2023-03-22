const inputField = document.getElementById('name-input');
const outputField = document.getElementById('name-output');

inputField.addEventListener('input', event => {
  inputField.textContent = event.currentTarget.value
    ? (outputField.textContent = event.currentTarget.value)
    : (outputField.textContent = 'Anonymous');
});

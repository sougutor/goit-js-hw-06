const input = document.getElementById('validation-input');

input.addEventListener('input', onInputChange);

function onInputChange(event) {
  input.classList.add('invalid');

  if (event.currentTarget.value.length === +input.dataset.length) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  }
}

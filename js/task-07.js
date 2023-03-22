const refs = {
  input: document.getElementById('font-size-control'),
  textSize: document.getElementById('text'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  refs.textSize.style.fontSize = `${event.currentTarget.value}px`;
}

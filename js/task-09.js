const refs = {
  text: document.querySelector('.color'),
  btn: document.querySelector('.change-color'),
};

refs.btn.addEventListener('click', getRandomHexColor);

function getRandomHexColor() {
  document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  refs.text.textContent = document.body.style.backgroundColor;
}

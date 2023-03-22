const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const value = document.getElementById('value');

const counterValue = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

decrementBtn.addEventListener('click', () => {
  counterValue.decrement();
  value.textContent = counterValue.value;
});

incrementBtn.addEventListener('click', () => {
  counterValue.increment();
  value.textContent = counterValue.value;
});

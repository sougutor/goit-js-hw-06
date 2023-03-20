const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.getElementById('ingredients');

const allItems = [];

const markup = ingredients.map(ingredient => {
  const item = document.createElement('li');
  item.textContent = ingredient;
  item.classList.add('item');
  allItems.push(item);
});

list.append(...allItems);

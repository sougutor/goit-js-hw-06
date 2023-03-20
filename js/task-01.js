const categories = [...document.getElementById('categories').children];

console.log(`Number of categories:`, categories.length);

categories.forEach(category => {
  console.log(`Category:`, category.firstElementChild.textContent);
  console.log(`Elements`, category.lastElementChild.childElementCount);
});

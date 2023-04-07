const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ul = document.querySelector("#ingredients");
const li = ingredients.map(ingredient => { 
  const el = document.createElement('li');
  el.textContent = ingredient;
  el.classList.add("item");
  return el;
});

ul.append(...li);
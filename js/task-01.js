const categories = document.querySelector("#categories");

const liArr = [...categories.children];

const liCount = `Number of categories: ${liArr.length}`;
console.dir(liCount);

const result = liArr.forEach((item) => {
  const ul = [...item.lastElementChild.children];
  console.log(`Category: ${item.firstElementChild.textContent}
Elements: ${ul.length}`);
});

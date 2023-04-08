function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("controls");
const boxes = document.querySelector("#boxes");

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const input = document.querySelector("input");

createBtn.addEventListener("click", () => createBoxes(input.value));
destroyBtn.addEventListener("click", destroyBoxes);
boxes.classList.add("box-style");

function createEl(size) {
  const element = document.createElement("div");
  element.style.width = size + "px";
  element.style.height = size + "px";
  element.style.backgroundColor = getRandomHexColor();

  boxes.append(element);
}

function createBoxes(amount) {
  let size;
  for (let i = 0; i < amount; i++) {
    size = 30 + 10 * i;
    createEl(size);
  }
}

function destroyBoxes() {
  boxes.replaceChildren();
}

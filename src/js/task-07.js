const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
input.addEventListener("input", changeText);

function changeText (evt) {
   const el = evt.currentTarget;
   text.style.fontSize = el.valueAsNumber + "px";
}
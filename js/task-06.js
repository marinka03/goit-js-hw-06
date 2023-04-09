const input = document.querySelector("#validation-input");
input.addEventListener("blur", checkSymbol);

function checkSymbol(evt) {
  const lengthData = Number(evt.currentTarget.dataset.length);
  const el = evt.currentTarget;
  if (el.value.length === lengthData) {
    el.classList.add("valid");
    el.classList.remove("invalid");
  } else {
    el.classList.add("invalid");
    el.classList.remove("valid");
  }
}

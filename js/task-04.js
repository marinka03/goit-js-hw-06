const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const spanValue = document.querySelector("#value");

let counterValue = 0;
const step = 1;
decrementBtn.addEventListener("click", () => {
    counterValue -= step;
    spanValue.textContent = counterValue;
});

incrementBtn.addEventListener("click", () => {
    counterValue += step;
    spanValue.textContent = counterValue;
});

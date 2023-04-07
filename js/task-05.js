const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");
input.addEventListener("input", changeName);

function changeName (evt){
if(!evt.currentTarget.value){
    return span.textContent = "Anonymous";
}
    return span.textContent = evt.currentTarget.value;
}
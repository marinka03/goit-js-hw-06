const input = document.querySelector("#validation-input");
input.addEventListener("blur", checkSymbol);

 function checkSymbol (evt) {
    const length = evt.currentTarget.dataset.length;
    const el = evt.currentTarget;
    if(el.value.length < length){
        el.classList.add("invalid");
        el.classList.remove("valid");
    } else {
        el.classList.add("valid");
        el.classList.remove("invalid");
    }
 }
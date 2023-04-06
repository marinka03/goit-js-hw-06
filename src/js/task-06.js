const input = document.querySelector("#validation-input");
input.addEventListener("blur", checkSymbol);

 function checkSymbol (evt) {
    const length = evt.currentTarget.dataset.length;
    const el = evt.currentTarget;
    if(el.value.length < length){
        el.classList.add("input-error");
        el.classList.remove("input-success");
    } else {
        el.classList.add("input-success");
        el.classList.remove("input-error");
    }
 }
const inputTipe = document.querySelector('#name-input');
const outputTipe = document.querySelector('#name-output');
    
inputTipe.addEventListener('input', function () {
    const inputValue = inputTipe.value.trim();
     if (inputValue === "") {
        outputTipe.textContent = "Anonymous"}
    else { outputTipe.textContent = inputValue; }
});

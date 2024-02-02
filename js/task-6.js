function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const cotrols = document.querySelector("#controls");
const input = document.querySelector('[type="number"]');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const boxesElements = document.querySelector("#boxes");

buttonCreate.addEventListener('click', function () {
  if (Number(input.value) >= 1 && Number(input.value) <= 100) { createBoxes(Number(input.value)); } else { alert('Enter a value between 1 and 100') };
  function createBoxes(amount) {
  destroyBoxes();
  let size = 30;
  for (let i = 0; i < amount; i++){
    const box = document.createElement('div');
    box.style.width = `${size + 10*i}px`;
    box.style.height = `${size + 10 * i}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesElements.appendChild(box);
    
  }

};
  input.value = '';
})
function destroyBoxes() {
  boxesElements.innerHTML = "";
}
buttonDestroy.addEventListener('click', destroyBoxes);



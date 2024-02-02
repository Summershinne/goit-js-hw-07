 function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }

  const button = document.querySelector(".change-color");
  const colorDisplay = document.querySelector(".color");
  const body = document.querySelector("body");
  button.addEventListener("click", function () {
    const randomColor = getRandomHexColor();
    body.style.backgroundColor = randomColor;
    colorDisplay.textContent = randomColor;
  });




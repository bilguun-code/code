const budagnuud = ["green", "red", "rgba(133,122,200)", "#f15025"];
const myButton = document.getElementById("myButton");
const color = document.querySelector(".color");

myButton.addEventListener("click", function () {
  const randomNumber = getRandomNumber();

  document.body.style.backgroundColor = budagnuud[randomNumber];
  color.textContent = budagnuud[randomNumber];
  console.log(budagnuud[randomNumber])
});

function getRandomNumber() {
    return Math.floor(Math.random() * budagnuud.length);
}

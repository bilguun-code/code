const budagnuud = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const myButton = document.getElementById("myButton");
const color = document.querySelector(".color");

myButton.addEventListener("click", function () {
    let v = "#";
    for (let i = 0; i < 6; i++) {
        v += budagnuud[getRandomNumber()];
    }

    color.textContent = v;
    console.log(v)
    document.body.style.backgroundColor = v;
});

function getRandomNumber() {
    return Math.floor(Math.random() * budagnuud.length);
}

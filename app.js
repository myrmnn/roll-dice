const num = document.getElementById("num");
const btn = document.querySelector("button");
const die1 = document.querySelector(".die1");
const die2 = document.querySelector(".die2");

btn.addEventListener("click", function () {
  roll();
  num.classList.add("bounce-animation");
  die2.classList.add("spin-animation");
  die1.classList.add("counter-spin-animation");
  setTimeout(function () {
    num.classList.remove("bounce-animation");
    die2.classList.remove("spin-animation");
    die1.classList.remove("counter-spin-animation");
  }, 500);
});

function roll() {
  let result = Math.floor(Math.random() * 12 + 1);
  num.innerHTML = `${result}`;
}

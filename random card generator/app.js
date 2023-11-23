let mezcla = [];
let suits = ["♦", "♥", "♠", "♣"];
let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

const generaCarta = () => {
  for (let suit of suits) {
    for (let card of cards) {
      let num = [card, suit];
      mezcla.push(num);
    }
  }
  return mezcla;
};

generaCarta();

const deckCards = () => {
  let distribuidas = mezcla.splice(Math.floor(Math.random() * mezcla.length), 1)[0];
  document.querySelector("#numero").innerHTML = distribuidas[0];
  document.querySelector("#topSuit").innerHTML = distribuidas[1];
  document.querySelector("#botSuit").innerHTML = distribuidas[1];

  if (distribuidas[1] === "♦" || distribuidas[1] === "♥") {
    document.querySelector("#topSuit").classList.add("red-icon");
    document.querySelector("#botSuit").classList.add("red-icon");
  } else {
    document.querySelector("#topSuit").classList.remove("red-icon");
    document.querySelector("#botSuit").classList.remove("red-icon");
  }


  if (mezcla.length === 0) {
    document.querySelector("#numero").innerHTML = "X";
    document.querySelector("#topSuit").innerHTML = "X";
    document.querySelector("#botSuit").innerHTML = "X";
    start.disabled = true;
  }
};

window.onload = function () {
  let start = document.querySelector("#start");
  start.addEventListener("click", deckCards);
};

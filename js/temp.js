const player = {
  name: "alpha",
  points: 10,
  blackcow: true,
};

player.lastname = "beta";
console.log(player);

const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
};

const a = calculator.plus(3, 5);
const b = calculator.minus(2, 5);

console.log(a);
console.log(b);

const c = parseInt(prompt("Age?"));

if (isNaN(c)) {
  console.log("Input a number you idiot");
} else if (c >= 18 && c < 50) {
  console.log("BBBB");
} else if (c >= 150 || false) {
  console.log("CCCC");
} else {
  console.log("DDDD");
}

const title = document.getElementById("title");
console.dir(title);

title.innerText = "got you!";

const title = document.querySelector(".title h1");

function onClick() {
  const currentcolor = title.style.color;
  let newColor;

  if (currentcolor === title.style.color) {
    newColor = "tomato";
  } else {
    newColor = "teal";
  }
  title.style.color = newColor;
}

title.addEventListener("click", onClick);

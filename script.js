let reddiv = document.getElementById("red");
let yellowdiv = document.getElementById("yellow");
let greendiv = document.getElementById("green");
// let countr = 0;
// reddiv.onclick = () => {
//   console.log("red clicked and you chose: rock");
//   countr = countr + 1;
//   console.log(countr);
// };
yellowdiv.onclick = () => {
  console.log("yellow clicked  and you chose: paper ");
};
greendiv.onclick = () => {
  console.log("green clicked  and you chose: scissor ");
};

let squares = document.querySelectorAll(".btn");
// console.log(squares[2].value);
//for each
// squares.forEach(num=> console.log(num.name))
let timesClicked = { red: 0, green: 0, yellow: 0 };
squares.forEach((num) => {
  num.onclick = () => {
    timesClicked[num.value] += 1;
    // console.log(timesClicked[num.value]);
    num.innerText = timesClicked[num.value];
    // console.log(num.name)
  };
});
//clear function
const clearbtn = document.getElementById("clear");
clearbtn.onclick = () => clearGame();
function clearGame() {
  squares.forEach((num) => {
    num.innerText = "";
  });
}

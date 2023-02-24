let change = document.getElementById("karochange");
let red = document.getElementById("red");
let aqua = document.getElementById("aqua");
let brown = document.getElementById("brown");

let clearkaro = document.getElementById("clear");

change.onclick = () => {
  document.getElementById("demo").innerHTML = "Vertically centered";
  console.log("changes done and updated the demo");
};
let redcount = 0;
let aquacount = 0;
let browncount = 0;

red.onclick = () => {
  redcount = redcount + 1;
  red.innerHTML = redcount;
};
aqua.onclick = () => {
  aquacount = aquacount + 1;
  aqua.innerHTML = aquacount;
};
brown.onclick = () => {
  browncount = browncount + 1;
  brown.innerHTML = browncount;
};
// clearall.onclick = () => {
//   red.innerHTML = "";
//   aqua.innerHTML = "";
//   brown.innerHTML = "";
// };
clearkaro.onclick = () => {
  //inner html change but count value remain constant

  redcount = 0; //fixed the issue of count value being remain constant
  red.innerHTML = "";
  aquacount = 0;
  aqua.innerHTML = ""; //fixed the issue of count value being remain constant
  browncount = 0;
  brown.innerHTML = ""; //fixed the issue of count value being remain constant
};

// different way of selecting elements

let squares = document.querySelectorAll(".squares");
console.log(squares);
let square = document.querySelectorAll(".square");
let picker = document.getElementById("pick");
let reset = document.getElementById("reset");
reset.onclick = () => {
  for (let i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = "blue";
  }
};
// console.log(square[0]);
// console.log(square[1]);
// console.log(square[2]);
// console.log(square[3]);
// var list = document.getElementById("d1");
// var list2 = list.querySelectorAll(".square");
// console.log(list2.length);

var list = document.getElementById("d2");
var list2 = list.querySelectorAll("p");
let changecolorbtn = document.getElementById("changecolorbtn");
let removecolor = document.getElementById("removecolor");
removecolor.onclick = () => {
  for (var i = 0; i < list2.length; i++) {
    list2[i].style.backgroundColor = "";
  }
};
changecolorbtn.onclick = () => {
  for (var i = 0; i < list2.length; i++) {
    list2[i].style.backgroundColor = "red";
  }
};
// list2[0].style.backgroundColor = "red";
// list2[1].style.backgroundColor = "red";
// list2[2].style.backgroundColor = "red";

document.getElementById("show").innerHTML = list2.length;
//selecting the random elemnt in html div
picker.onclick = () => {
  square[Math.floor(Math.random() * square.length)].style.background = "red";
};

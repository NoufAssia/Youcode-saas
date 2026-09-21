// Modifying the Properties of an Object

const prompt = require("prompt-sync")();

const xPoint = Number(prompt("Enter the horizontal position x: "));
const yPoint = Number(prompt("Enter the vertical position: "));

let point = {
	x: xPoint,
	y: yPoint,
}

point.x = 5;
point.y = 6;

console.log("Here is the new coordinate x: " + point.x);
console.log("Here is the new coordinate y: " + point.y);



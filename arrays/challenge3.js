const prompt = require("prompt-sync")();

const size = Number(prompt("Enter the size of the array: "));

let sum = 0;
let array = [];

for (let i = 0; i < size; i++)
{
	let index = Number(prompt("Enter the number at index ${i}: "));
	array.push(index);
	sum += array[i];
}
console.log("Here is the sum of the array element " + sum + " :");

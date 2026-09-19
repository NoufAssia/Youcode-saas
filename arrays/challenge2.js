const prompt = require("prompt-sync")();

const lenght = Number(prompt("Enter the size of the array: "));

let array = [];

for (let i = 0; i < lenght; i++)
{
	let index = prompt("Enter the number at index ${i}: ");
	array.push(index);
}
console.log(array);



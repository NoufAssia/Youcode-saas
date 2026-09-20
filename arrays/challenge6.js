//Multiplication des éléments

const prompt = require("prompt-sync")();

const size = Number(prompt("Enter the size of the array: "));
const factor = Number(prompt("Enter the factor: "));

let array = [];

for (let i = 0; i < size; i++)
{
	const index = prompt("Enter the element at index ${i}: ");
	array.push(index);
}
let i = 0;
while (i in array)
{
	array[i] *= factor; 
	i++;
}

console.log(array);

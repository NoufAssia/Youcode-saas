//Calculer la Moyenne

const prompt = require("prompt-sync")();

const size = Number(prompt("Enter the size of the array: "));

let array = [];

for (let i = 0; i < size; i++)
{
	const index = Number(prompt(`Enter the number at index ${i}: `));
	array.push(index);
}

let sum = 0;

for (let i = 0; i < size; i++)
{
	sum += array[i];
}

let average = (sum / size).toFixed(2);

console.log(`Here is the average of the given array: ${average}.`);



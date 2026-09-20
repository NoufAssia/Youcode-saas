//Inversion d'un array

const prompt = require("prompt-sync")();

const size = Number(prompt("Enter the number of elemnts in this array: "));

const array = [];

for (let i = 0; i < size; i++)
{
	let index = Number(prompt("Enter the elemnet at index ${i}: "));
	array.push(index);
}

let start = 0;
let end = size - 1;

while (start < end)
{
	let swap = array[start];
	array[start] = array[end];
	array[end] = swap;
	start++;
	end--;
}

console.log(array);


const prompt = require("prompt-sync")();

const size = Number(prompt("Enter the size of this array: "));

let array = [];

for (let i = 0; i < size; i++)
{
	const index = prompt("Enter the element at index ${i}: ");
	array.push(index);
}

let array2 = [];

for (let i = 0; i < size; i++)
{
	array2[i] = array[i];
}
console.log(array);
console.log(array2);

//Trouver le min

const prompt = require("prompt-sync")();

const size = Number(prompt("Enter the size of the array: "));

let array = [];

for (let i = 0; i < size; i++)
{
	let index = prompt("Enter the number at index ${i}: ");
	array.push(index);
}

let min = array[0];
let j = 0;
while (j in array)
{
	if (min > array[j])
	{
		min = array[j];
	}
	j++;
}

console.log(min);

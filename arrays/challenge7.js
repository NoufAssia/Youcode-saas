// Tableau en orde croissant
const prompt = require("prompt-sync")();

const size = Number(prompt("Enter the size of array: "));

let array = [];

for (let i = 0; i < size; i++)
{
	let index = prompt("Enter the element at index ${i}: ");
	array.push(index);
}
for (let i = 0; i < size; i++)
{
	for (let j = i + 1; j < size; j++)
	{
		if (array[i] > array[j])
		{
			let swap = array[i];
			array[i] = array[j];
			array[j] = swap;
		}
	}
}

console.log(array);

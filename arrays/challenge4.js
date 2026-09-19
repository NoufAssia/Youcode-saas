const prompt = require("prompt-sync")();

const size = Number(prompt("Enter the size of the array: "));

let array = [];

for (let i = 0; i < size;  i++)
{
	index = prompt("Enter the element at index ${i}: ");
	array.push(index);
}
let max = array[0];
let j = 0;
while (j in array)
{
	if (array[j] > max)
	{
		max = array[j];
	}
	j++;
}

console.log(max);

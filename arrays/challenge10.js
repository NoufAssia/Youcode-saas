//Rechercher un élément

const prompt = require("prompt-sync")();

const size = Number(prompt("Enter the number of elements: "));
const element = Number(prompt("Enter the element to research for: "));

let array = [];

for (let i = 0; i < size; i++)
{
	const index = Number(prompt(`Enter the element at index ${i}: `));
	array.push(index);
}

let found = 0;

for (let i = 0; i < size; i++){
	if (array[i] === element)
	{
		found = 1;
		console.log(array[i]);
		break;
	}
}

if (found == 1)
{
	console.log(`the element ${element} is found.`);
}
else
	console.log(`the element ${element} is not found.`);

//factotial function

const prompt = require("prompt-sync")();

const num = Number(prompt("Enter a number: "));

function factorial(num)
{
	let result = num;

	for (let i = num - 1; i > 0; i--)
	{
		result = result * i;		
	}
	return (result);
}

console.log(factorial(num));

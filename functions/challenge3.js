//Fonction de Maximum

const prompt = require("prompt-sync")();

const num1 = Number(prompt("Enter the first number: "));
const num2 = Number(prompt("Enter the second number: "));

function max(num1, num2)
{
	if (num1 > num2)
	{
		return (num1);
	}
	else
		return (num2);
}

console.log(`the biggest number is: ${max(num1, num2)}.`);

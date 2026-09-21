//Fonction de multiplication

const prompt = require("prompt-sync")();

const num1 = Number(prompt("Enter the first number: "));
const num2 = Number(prompt("Enter the second number: "));

function product(num1, num2)
{
	return (num1 * num2);
}

console.log(`Here is the product of these two numbers: ${product(num1, num2)}.`);


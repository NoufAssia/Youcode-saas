//Fonction de somme

const prompt = require("prompt-sync")();

const num1 = Number(prompt("Enter the first number: "));
const num2 = Number(prompt("Enter the second number: "));

function somme(nm1, nm2)
{
	let sum = nm1 + nm2;
	return (sum);
}

console.log(`Here is the sum of these two numbers: ${somme(num1, num2)}.`);



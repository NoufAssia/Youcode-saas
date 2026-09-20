// calcul de la puissance

const prompt = require("prompt-sync")();

//ask user

const base = Number(prompt("Enter a number: "));
const exponent = Number(prompt("Enter an exponent: "));
let result;

for (let i = 1; i <= exponent; i++)
{
	result = base ** i;
}
console.log(`the result is: ${result}.`);

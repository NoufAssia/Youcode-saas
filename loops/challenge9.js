//Compteur de chiffres

const prompt = require("prompt-sync")();

let num = Number(prompt("Enter a number: "));

let result = 0;

while (num > 0)
{
	num = Math.floor(num / 10);
	result += 1;
}

console.log(result);

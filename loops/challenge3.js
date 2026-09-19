const prompt = require("prompt-sync")();

//ask the user

const num = Number(prompt("Enter a number: "));

let sum = 0;

//loop the sum

for (let i = 1; i <= num; i++)
{
	sum += i;
}

//print the result

console.log(`Here is the sum of ${num} natural numbers: ${sum}.`);

const prompt = require("prompt-sync")();

//ask the user

const num = Number(prompt("Enter a positive number: "));

let factorial = 1;

// loop the multiplication

for (let i = 1; i <= num; i++)
{
	factorial *= i;
}

// print the result

console.log(`Here is the factorial of this number: ${factorial}.`);



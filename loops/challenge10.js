const prompt = require("prompt-sync")();

//ask user

const num = Number(prompt("Enter an number: "));
let sum = 0;

for (let i = 1; i <= num; i++)
{
	 sum += i;
}
console.log(`Here is the sum of ${num} natural numbers: ${sum}`);

const prompt = require("prompt-sync")();

const number = Number(prompt("Enter a number: "));

if (number % 2 == 0)
{
	console.log("the number is even.");
}
else if (number % 2 != 0)
{
	console.log("the number is odd.");
}

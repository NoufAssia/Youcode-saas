//Fonction de compte à rebours

const prompt = require("prompt-sync")();

const num = Number(prompt("Enter a number: "));

function countdown(num)
{
	let i = num;
	while (i >= 0)
	{
		console.log(i);
		i--;
	}
}

countdown(num);

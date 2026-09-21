// Fonction de vérification de parité

const prompt = require("prompt-sync")();

const num = Number(prompt("Enter a number: "));

function check(num)
{
	if (num % 2 == 0)
	{
		return (true);
	}
	else
		return (false);
}

if (check(num) == true)
{
	console.log("This number is even.");
}
else
	console.log("This number is odd.");


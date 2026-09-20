//affichage des N premiers nombres pair

const prompt = require("prompt-sync")();

// ask user

const num = Number(prompt("Enter a number: "));

for (let i = 1; i <= num; i++)
{
	
		console.log(i * 2);
}

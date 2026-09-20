// Pyramide d'étoile

const prompt = require("prompt-sync")();

//ask the user

const lines = Number(prompt("Enter the number of lines: "));

// draw the pyramid

for (let i = 1; i <= lines; i++)
{
	let space = " "; 
	let etoile = "*";
	console.log(space.repeat(lines - i) + etoile.repeat((i * 2) - 1));
}

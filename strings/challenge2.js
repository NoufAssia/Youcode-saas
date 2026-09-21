// length of string

const prompt = require("prompt-sync")();

const string = prompt("Enter a string: ");

function length(string)
{
	let i = 0;
	while (string[i] !== undefined)
	{
		i++;
	}
	return (i);
}

console.log("The length of your string is: " + length(string) + ".");

// remove space from string

const prompt = require("prompt-sync")();

const string = prompt("Enter a string: ");

let i = 0;

while (string[i] !== undefined)
{
	i++;
}

function rmSpace(string)
{
	let result = "";
	for (let j = 0; j < i; j++)
	{
		if (string[j] !== " ")
		{
			result = result + string[j];
		}
	}
	return (result);
}

console.log(rmSpace(string));

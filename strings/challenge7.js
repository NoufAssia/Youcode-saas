// Conversion to Capital Letters

const prompt = require("prompt-sync")();

const string = prompt("Enter a string: ");

let i = 0;
while (string[i] !== undefined)
{
	i++;
}

function uppercase(string)
{
	let string2 = "";

	for (let j = 0; j < i; j++)
	{
		if (string[j] >= "a" && string[j] <= "z")
		{
			string2 = string2 + string[j].toUpperCase();			
		}
		else
		{
			string2 = string2 + string[j];
		}
	}
	return (string2);
}

console.log(uppercase(string));

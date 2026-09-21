//Counting Occurrences of a Character

const prompt = require("prompt-sync")();

const string = prompt("Enter the string to search in: ");
const char = prompt("Enter the character to search for: ");

let i = 0;
while (string[i] !== undefined)
{
	i++;
}

function find(string)
{
	let result = 0;
	for (let j = 0; j < i; j++)
	{
		if (string[j] === char)
		{
			result += 1;
		}
	}
	return (result);
} 

console.log(`Here is the number of occurences of character ${char}: ${find(string)}`);

// Conversion to Lowercase

const prompt = require("prompt-sync")();

const string = prompt("Enter a string: ");

let i = 0;
for (let char of string)
{
	i++;
}

// charCodeAt() returns the numeric value of char at index
// String.fromCharCode turn the numeric value to char

function lowerCase(string)
{
	let string2 = "";
	for (let j = 0; j < i; j++)
	{
		if (string[j] >= "A" && string[j] <= "Z")
		{
			string2 = string2 + (String.fromCharCode(string[j].charCodeAt(0) + 32));
		}
		else
		{
			string2 += string[j];
		}
	}
	return (string2);
}
console.log(lowerCase(string));



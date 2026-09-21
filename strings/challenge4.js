//string comparison

const prompt = require("prompt-sync")();

const string1 = prompt("Enter the first string: ");
const string2 = prompt("Enter the second string: ");

// calculate the length of string1

let l1 = 0;
while (string1[l1] !== undefined)
{
	l1++;
}

//calculate the length of string2

let l2 = 0;

while(string2[l2] !== undefined)
{
	l2++;
}

// compare length and chars

if (l1 != l2)
{
	console.log("They are not equal.");
}
else 
{
	let result = comparison(string1, string2);
	if (result == false)
	{
		console.log("They are not equal.");
	}
	else
		console.log("They are equal.");
}

	
function comparison(string1, string2)
{
	let i = 0;

	while (string1[i] !== undefined)
	{
		if (string1[i] !== string2[i])
		{
			return (false);
		}
		else 
			i++;
	}
		return (true);
}

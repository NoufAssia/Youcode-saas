//Reverse string

const prompt = require("prompt-sync")();

const string = prompt("Enter a string: ");
let i = 0;
while (string[i] !== undefined)
{
	i++;
}

let result = "";
for (let j = i - 1; j >= 0; j--)
{
	result = result + string[j];
}

console.log("Here is the reversed string: " + result + ".");

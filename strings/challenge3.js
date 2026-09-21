//string concatenation

const prompt = require("prompt-sync")();

let string1 = prompt("Enter the first string: ");
let string2 = prompt("Enter the second string: ");

let stringResult = "";
let i = 0;

while (string1[i] !== undefined)
{
	stringResult += string1[i];
	i++;
}

let j = 0;

while (string2[j] !== undefined)
{
	stringResult += string2[j];
	j++;
	i++;
}

console.log(stringResult);

//stringResult = string1 + string2;
//console.log(stringResult);

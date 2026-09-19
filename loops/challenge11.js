const prompt = require("prompt-sync")();

//ask user
const num = Number(prompt("Enter a number: "));

console.log("Here is the reverse table of multiplication: ");

for (let i = 10; i >= 1; i--)
{
	let result = num * i;
	console.log(`${num} * ${i} = ${result}`);
}

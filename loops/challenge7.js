//inversion d'un entier

const prompt = require("prompt-sync")();

//ask user 

let num = Number(prompt("Enter a number: "));

let result = 0;
  
while (num > 0)
{
	let digit = num % 10;
	result = (result * 10) + digit;
	num = Math.floor(num / 10); 
}

console.log(`Here is the number in reverse: ${result}.`);

const prompt = require("prompt-sync")();

let num1 = Number(prompt("Entrer le premier nombre: "));
let num2 = Number(prompt("Entrer le deuxième nombre: "));

let sum = num1 + num2;
if (num1 == num2)
{
	let triple = sum * 3;
	console.log("Voici le triple de somme de cette deux nombres: " + triple + ".");
}
else 
	console.log("Voici  la somme de cette deux nombres: " + sum + ".");

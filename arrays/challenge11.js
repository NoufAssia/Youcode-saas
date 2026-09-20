//Remplacer un element

const prompt = require("prompt-sync")();
 
const size = Number(prompt("Entrer le nombre d'éléments: "));
const find = Number(prompt("Entrer la valeur a remplacer: "));
const replace = Number(prompt("Entrer la nouvelle valeur: "));

let array = [];
for (let i = 0; i < size; i++)
{
	const index = Number(prompt(`Entrer la valeur à index ${i}: `));
	array.push(index);
}
console.log("Voici l'ancien array.");
console.log(array);

for (let i = 0; i < size; i++)
{
	if (array[i] === find)
	{
		array[i] = replace;
	}
}

console.log("Voici le nouveau array.");
console.log(array);




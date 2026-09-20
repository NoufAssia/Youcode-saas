// table de multiplication

const prompt = require("prompt-sync")();

//ask the user

const num = Number(prompt("Entrer un nombre: "));

console.log('Voici la table de multiplication: ');
//loop the multiplication

for (let i = 1; i <= 10; i++)
{
	let resultat = num * i;
	console.log(`${num} * ${i} = ${resultat} `);
}


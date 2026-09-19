const prompt = require("prompt-sync")();

let prime = 500;
const age = Number(prompt("Entrer ton age (en années): "));
console.log(`----Entrer le type de ton voiture----
1. Spotive.
2. Utilitaire.
3. familiale.`);
const typeDeVoiture = Number(prompt("-> "));
const accidents = Number(prompt("Entre le nombre d'accidents (5 dernières années): "));

// age consition
	//
if (age < 25)
{
	prime *= 1.5;
}
else if (age > 65)
{
	prime *= 1.2;
}

//car type condition

if (typeDeVoiture == 1)
{
	prime *= 2;
}
else if (typeDeVoiture == 2)
{
	prime *= 1.2;
}
else if (typeDeVoiture == 3)
{
	prime *= 1.1;
}

// accident condition

if (accidents > 1)
{
	prime *= 0.30;
}

//result

console.log(`la prime d'assurance est: ${prime}.`);

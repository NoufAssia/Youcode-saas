const prompt = require("prompt-sync")();

const revenu = Number(prompt("Entrer ton revenu anuuel (en euros): "));
const credit = Number(prompt("Entrer ton score de credit (sur 1000): "));
const duree = Number(prompt("Entrer la durée du prêt (en années): "));

if (revenu >= 30000)
{
	if (credit >= 700 && duree <= 10)
	{
		console.log("Éligible.");
	}
	else if (credit >= 650 && duree <= 15)
	{
		console.log("Éligible avec conditions.");
	}
}
else 
	console.log("Non éligible.");



const prompt = require("prompt-sync")();

const temperature = prompt("Entrer la tempèrature en Celsius: ");

if (temperature < 0){
	console.log("L'eau et solide.");}
else if (temperature >= 0 && temperature < 100){
	console.log("L'eau et liquide.");}
else
	console.log("L'eau et gas.");

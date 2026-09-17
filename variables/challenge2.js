const prompt = require("prompt-sync")();

const c = Number(prompt("Entrer la température en Celsius: "));

let k = c + 273.15;

console.log(`Voici la tempèrature on Kelvin: ${k}k.`);

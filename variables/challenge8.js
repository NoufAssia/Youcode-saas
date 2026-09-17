const prompt = require("prompt-sync")();

const num1 = Number(prompt("Entrer Le premier nombre: "));
const num2 = Number(prompt("Entrer Le deuxième nombre: "));
const num3 = Number(prompt("Entrer Le troisième nombre: "));

let moygeo = ((num1 * num2 * num3) ** (1 / 3)).toFixed(2);

console.log(`Voici la moyenne géométrique: ${moygeo}.`);

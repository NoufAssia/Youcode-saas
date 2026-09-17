const prompt = require("prompt-sync")();

const num1 = Number(prompt("Entrer le premier nombre: "));
const num2 = Number(prompt("Entrer le dexienme nombre: "));
const num3 = Number(prompt("Entrer le troisième nombre: "));

let moypond = (((num1 * 2) + (num2 * 3) + (num3 * 5)) / 10).toFixed(2);

console.log(`Voici la moyenne pondérée: ${moypond}.`);



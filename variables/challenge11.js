const prompt = require("prompt-sync")();

const longueur = Number(prompt("Entrer la longueur de regtangle: "));
const largeur = Number(prompt("Entrer la largeur de rectangle: "));

let surface = longueur * largeur;

console.log(`Voici la surface de rectangle: ${surface}.`);

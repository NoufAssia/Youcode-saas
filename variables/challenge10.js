const prompt = require("prompt-sync")();

const rayon = Number(prompt("Entrer le rayon de la sphère: "));
const pi = 3.14159;
let volume = (rayon ** 3) * pi * (4 /3);

console.log(`Voici le volume de la sphère: ${volume.toFixed(1)}`);

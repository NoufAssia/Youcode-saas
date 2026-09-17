const prompt = require("prompt-sync")();

const x1 = Number(prompt("Entrer la coordonnée x du premier point: "))
const y1 = Number(prompt("Entrer la coordonnée y du premier point: "))
const z1 = Number(prompt("Entrer la coordonnée z du premier point: "))
const x2 = Number(prompt("Entrer la coordonnée x du deuxième point: "))
const y2 = Number(prompt("Entrer la coordonnée y du deuxième point: "))
const z2 = Number(prompt("Entrer la coordonnée z du deuxième point: "))
let = distance = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2) + ((z2 -z1) ** 2)).toFixed(2);


console.log(`Voici la distance entre les deux points dans un espace 3D: ${distance}.`);

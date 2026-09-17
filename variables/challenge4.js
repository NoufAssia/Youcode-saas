const prompt = require("prompt-sync")();

const kmParHeure = Number(prompt("Entrer la vitesse en k/h: "));

let mParSecond = kmParHeure * 0.27778;

console.log("Voici la vitess en m/s: " + mParSecond.toFixed(2) + ".");

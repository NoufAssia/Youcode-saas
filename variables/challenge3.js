const prompt = require("prompt-sync")();

const km = prompt("Entrer la distance en kilomètre: ");

let yards = km * 1093.61;

console.log("Voici la distance en yards: " + yards.toFixed(2) + ".");

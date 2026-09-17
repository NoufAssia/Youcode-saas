const prompt = require("prompt-sync")();

const num1 = Number(prompt("Enter the first number: "));
const num2 = Number(prompt("Enter the second number: "));

let sum = num1 + num2;
let sub = num1 - num2;
let mult = num1 * num2;
let div = num1 / num2;

console.log(`Here is the calculation:
- Addition: ${sum}.
- Subtraction: ${sub}.
- Multiplication: ${mult}.
- Division: ${div.toFixed(2)}.`);

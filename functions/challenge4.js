//Fonction de Minimum

const prompt = require("prompt-sync")();

const num1 = Number(prompt("Enter the first number: "));
const num2 = Number(prompt("Enter the second number: "));

function min(num1, num2)
{
        if (num1 < num2)
        {
                return (num1);
        }
        else
                return (num2);
}

console.log(`the smallest number is: ${min(num1, num2)}.`);

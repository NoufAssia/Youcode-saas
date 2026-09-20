//Afficher les element impaire

const prompt = require("prompt-sync")();

const size = Number(prompt("Enter the size of the array: "));

let array = [];

for (let i = 0; i < size; i++)
{
        const index = Number(prompt(`Enter the element at index ${i}:  `));
        array.push(index);
}

// search for odd numbers

let found = 0;

for (let i = 0; i < size; i++)
{
        if (array[i] % 2 != 0)
        {
                if (found == 0)
                {
                        console.log("Here is the odd numbers in the array: ");
                }
                found = 1;
                console.log(array[i]);
        }
}

if (found == 0)
{
        console.log("There is no odd numbers in this array.");
}


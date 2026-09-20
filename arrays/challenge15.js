//Fusion de deux arrays

const prompt = require("prompt-sync")();

// array1

const size1 = Number(prompt("Enter the size of the array 1: "));

let array1 = [];

for (let i = 0; i < size1; i++)
{
        const index1 = Number(prompt(`Enter the number at index ${i}: `));
        array1.push(index1);
}

//array2

const size2 = Number(prompt("Enter the size of the array 2: "));

let array2 = [];

for (let i = 0; i < size2; i++)
{
        const index2 = Number(prompt(`Enter the number at index ${i}: `));
        array2.push(index2);
}

// merge the arrays

for (let i = 0; i < size2; i++)
{
	array1.push(array2[i]);
}

console.log(array1);


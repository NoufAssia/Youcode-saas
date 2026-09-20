//affichage des n premiers nombres impaire

const prompt= require("prompt-sync")();

//ask the user

const num = Number(prompt("Enter a number: "));

for (let i = 1; i <= num; i++)
{
		console.log(2 * i - 1);
}
// exmaple: 2*1 = 2, 2-1= 1 -> le premier nombre impaire , then i++

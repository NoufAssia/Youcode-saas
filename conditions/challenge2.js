const prompt = require("prompt-sync")();

let char = prompt("Enter a character: ").toLowerCase();

switch (char)
{
	case "a":
	case "e":
	case "i":
	case "o":
	case "u":
	case "y":
		console.log("the character " + char + " is vowel.");
		break;
	default:
		console.log("the character " + char + " is consonant or maybe another character. ");
}

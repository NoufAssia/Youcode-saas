//Creation and use of an object

const prompt = require("prompt-sync")();
const firstName = prompt("Enter your first name: ");
const lastName = prompt("Enter your last name: ");
const age = Number(prompt("Enter your age: "));

let person = {
	firstName: firstName,
	lastName:  lastName,
	age: age,
}

console.log("Here is your informations: ");
console.log(`First name: ${person.firstName}.`);
console.log(`last name: ${person.lastName}.`);
console.log(`age: ${person.age}.`);



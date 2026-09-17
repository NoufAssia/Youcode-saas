const prompt = require("prompt-sync")();

const firstName = prompt("Enter your first name: ");
const lastName  = prompt("Enter your last name: ");
const age = prompt("Enter your age: ");
const sex = prompt("Enter your sex: ");
const email = prompt("Enter your email: ");

console.log(`Here is your information:
- First name: ${firstName}.
- Last name: ${lastName}.
- Age: ${age}.
- Sex: ${sex}.
- Email: ${email}.`);

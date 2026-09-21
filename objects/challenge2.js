//Object with table

const prompt = require("prompt-sync")();

const firstName = prompt("Enter your first name: ");
const lastName = prompt("Enter your last name: ");
const subjects = Number(prompt("Enter how many sabject you have: "));

let array = [];

for (let i = 0; i < subjects; i++)
{
	const index = Number(prompt(`Enter the grade of subject ${i + 1}: `));
	array.push(index);
}

let student = {
	firstName: firstName,
	lastName: lastName,
	grades: array,
}

console.log("Here is your information: ");
console.log("first Name: " + student.firstName);
console.log("last Name: " + student.lastName);
console.log("Grades: " + student.grades.join(", "));

let sum = 0;
for (let num of student.grades)
{
	sum += num;
}

let average = sum / subjects;
console.log("the average: " + average);

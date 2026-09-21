//Passing an object into an argument

const prompt = require("prompt-sync")();

const length = prompt("Enter the length of rectangle: ");
const width = prompt("Enter the width of the rectangle: ");

let rectangle = {
	length: length,
	width: width,
}

function area(length, width)
{
	let area = length * width;
	return (area);
}

console.log("The area of this rectangle is: " + area(rectangle.length, rectangle.width));


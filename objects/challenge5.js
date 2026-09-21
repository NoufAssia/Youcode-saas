//Return Object and Function

const prompt = require("prompt-sync")();

const title = prompt("Enter the title of the book: ");
const author = prompt("Enter the author of the book: ");
const year = Number(prompt("Enter the year of publication of the book: "));

function book(title, author, year)
{
	let bookInfo = {
		title: title,
		author: author,
		year: year,
	}
	return (bookInfo);
}

console.log("Here is the information of the book: ");

console.log(book(title, author, year));



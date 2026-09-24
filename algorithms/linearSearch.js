let array = ["a", "b", "d"];
let x = "d";

function linearSearch(array, x)
{
	for (let i = 0; i < array.length; i++)
	{
		if (array[i] === x)
		{
			return (i);
		}
	}
	return(-1);
}

if (linearSearch(array, x) === -1)
{
	console.log("Not found");
}
else
	console.log("found at index: " + linearSearch(array, x));

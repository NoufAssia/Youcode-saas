//Initialisation et affichage

let array = [1, 9, 0, 5, 6, 7];

function length(array)
{
	let i = 0;
	while (i in array)
	{
		i++;
	}
	return (i);
}

function affiche(array)
{
	for (let i = 0; i < length(array); i++)
	{
		console.log(array[i]);
	}
}

affiche(array);

let array = [2, -1, 3, 0, 6];

console.log(bblSort(array));

function bblSort(array)
{
	for (let i = 0; i < array.length - 1; i++)
	{
		for (let j = 0; j < array.length - i - 1; j++)
		{
			if (array[j] > array[j + 1])
			{
				let swap = array[j];
    			array[j] = array[j + 1];
    			array[j + 1] = swap;
			}	
		}
	}
	return (array);
}





















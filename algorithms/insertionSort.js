let array = [5, 2, 4, 1, 3];

for (let i = 0; i < array.length - 1; i++) 
{
    let min = i;

    for (let j = i + 1; j < array.length; j++) 
	{
        if (array[j] < array[min]) 
		{
            min = j;
        }
    }

        // Swap
        let temp = array[i];
        array[i] = array[min];
        array[min] = temp;
}
console.log(array);
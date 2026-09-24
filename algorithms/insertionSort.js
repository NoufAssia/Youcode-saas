let array = [5, 2, 4, 1, 3];

function insertionSort(array)
{
    for (let i = 1; i < array.length; i++) 
    {
        let temp = array[i];
         let j = i - 1;

        while (j >= 0 && array[j] > temp) 
	    {
            array[j + 1] = array[j];
            j = j - 1;
        }

        array[j + 1] = temp;
    }
    return (array);
}
console.log(insertionSort(array));
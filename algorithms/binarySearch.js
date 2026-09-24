let array = [1, 3, 5, 7, 9];
let x = 87;

function binarySearch(array, x)
{
	let left = 0;
	let right = array.length - 1;

	while(left <= right)
	{
		let mid = Math.floor((left + right) / 2);
		if (array[mid] === x)
		{
			console.log("found");
			return;
		}
		
		if (array[mid] < x)
		{
			left = mid + 1;
		}
		else
		{
			right = mid - 1;
		}
	}
	    console.log("not found");
}
binarySearch(array, x);


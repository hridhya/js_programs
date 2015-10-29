module.exports = function arrayMap(arr, fn) {
    // SOLUTION GOES HERE
    mapped = [];
    for (var i = 0; i < arr.length; i++)
		mapped.push(fn(arr[i]));
		
	return mapped;
    
}

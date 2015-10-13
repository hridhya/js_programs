function SecondGreatLow(arr) {

    
    arr = arr.sort(function(a, b) {return a - b;});

    
    for (var i = arr.length - 1; i > 0; i--) {
        if (arr[i] == arr[i - 1]) {
            // If it is, we use the .splice method to remove it.
            arr.splice(i, 1);
        }
    }

    if (arr.length > 2) {
        return arr[1] + " " + arr[arr.length - 2];
    } else if (arr.length == 2) {
        return arr[1] + " " + arr[0];
    } else {
        return arr[0] + " " + arr[0];
    }

}
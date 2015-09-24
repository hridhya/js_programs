// Your code here.
function reverseArray(array){
  newArray = [];
  for (var i = array.length-1; i>=0; i--){
    newArray.push(array[i]);
  }
  return newArray;
};
function reverseArrayInPlace(arr) {
    var temp = 0;
    for (var i = 0; i < arr.length / 2; i++) {
        temp = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = temp;
    }
};

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
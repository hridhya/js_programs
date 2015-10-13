var arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.

console.log(arrays);
var newArray = [];
arrays.forEach(function(numbers){
  numbers.forEach(function(number){
  newArray.push(number);
  });
});

console.log(newArray);
// → [1, 2, 3, 4, 5, 6]



var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
  return a.concat(b);
}, []);
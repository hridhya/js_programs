function range(start, stop, step){
  if (!step) { 
    step = 1; 
  }
  var array = [];
  if (step<0){
  	for (var i=start; i>=stop; i+=step){
    	array.push(i);
  	}
  }
  else{
    for (var i=start; i<=stop; i+=step){
    	array.push(i);
  	}
  }
  return array;
};

function sum(array){
  var result = 0;
  for (var i = 0; i< array.length; i++){
    result = result+array[i];
  }
  return result;
};
console.log(sum(range(1, 10)));
// → 55
console.log(range(5, 2, -1));
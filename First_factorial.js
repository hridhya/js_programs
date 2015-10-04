function FirstFactorial(num) { 
  
  var fact = 1;
  if (num == 0){
    return fact;
  }
  if (num > 0){
    for (var i = num; i > 0; i--){
    	fact = fact * i;
  	}
  }
	
  return fact; 
         
}
   
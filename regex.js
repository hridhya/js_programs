function SimpleSymbols(str) { 

  var test_str = /[a-zA-Z]/;
  for (var i=0; i<str.length; i++){
    if (test_str.test(str[i])){
        if ((str[i+1] != "+") || (str[i-1] != "+")){
      		return false;
     	}
  	 }
   }
    
  return true; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SimpleSymbols(readline());           
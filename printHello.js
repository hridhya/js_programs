function printHello(n) {
	var ans = "";
	while( n > 1){
		ans = ans + "hello-";
		n = n-1;
      }
  if (n == 1){
      ans = ans + "hello";
	  return ans;
	}
}


console.log(printHello(4));	

function printHelloRecursion(n) {
  if (n == 1){
    return "Hello";
  }
  
  else {
    return "hello-" + printHelloRecursion(n-1);
  }
}
console.log(printHelloRecursion(4));	
  
    
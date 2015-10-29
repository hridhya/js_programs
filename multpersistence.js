function MultiplicativePersistence(num) { 

  // code goes here  
  var per = 0;
  function parse(intN){
    var arr = [];
    intN = intN.toString().split("");
    for (i = 0; i < intN.length; i++) {
            arr.push(parseInt(intN[i]));
        }
    return arr;
  }
  
  function multiply(n){
    var product = 1;
        for (i = 0; i < n.length; i++) {
            product *= n[i];
        }
    return product;
    
  }
  
  while (num.toString().length > 1){
    num = parse(num);
    num = multiply(num);
    per ++;
  }
  return per; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
MultiplicativePersistence(readline());           

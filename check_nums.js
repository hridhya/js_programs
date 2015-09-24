function CheckNums(num1,num2) { 
  
  if (num1 < num2){
    var str = "true";
  }
  else if (num1 > num2){
    str = "false";
  }
  
  else {
    str = "-1"
  }

  // code goes here  
  return str; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
CheckNums(readline());     
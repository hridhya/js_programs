function FirstReverse(str) { 

  // code goes here 
  ver buff = "";
  for(var i=str.length()-1;i>0;i--){
    buff+=str[i];
  }
  return buff; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
FirstReverse(readline());    
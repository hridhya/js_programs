function DivisionStringified(num1,num2) { 
  
  var result = Math.round(num1/num2).toString();
  var array = result.split("");
  if (array.length > 3){
    
    for (var i = array.length - 3; i > 0; i -= 3){
      
      array.splice(i,0,",");
    }
  }
  
  
  return array.join("");         
}
   
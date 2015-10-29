function MeanMode(arr) { 

  // code goes here 
  
  var map = {};
  var sum = 0;
  var mode = 0;
  var highfreq = 0;
  for (var i = 0; i < arr.length; i++){
    sum = sum + arr[i];
  }
  
  var mean = sum / arr.length;
  
  for (i = 0; i < arr.length; i++){
    if(map[arr[i]]){
           map[arr[i]]++;
       }
    else{
       map[arr[i]] = 1;
       }
   }
       
   for (i = 0; i<arr.length; i++){
      if(map[arr[i]] > highfreq){
        highfreq = map[arr[i]];
        mode = arr[i];
      }
   }
       
   if (mean == mode)
     return 1;
      
  
  return 0; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
MeanMode(readline());           

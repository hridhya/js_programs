function SwapCase(str) { 
  var ans = "";

  for (var i = 0; i <str.length; i++){
    if (str[i] == str[i].toUpperCase()){
      ans = ans + str[i].toLowerCase();
    }
    else{
      ans = ans + str[i].toUpperCase();
    }
  }
  return ans; 
         
}
   
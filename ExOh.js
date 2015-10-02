function ExOh(str) { 
  	var counto = 0;
  	var countx = 0;
	for (var i=0; i<str.length; i++){
      if (str[i] == 'o'){
        counto = counto + 1;
      }
      else{
        countx = countx + 1;
      }
    }
  if (counto == countx){
    return "true"
  }
  else{
    return "false"
  }
         
}
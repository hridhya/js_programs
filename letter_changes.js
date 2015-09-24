function LetterChanges(str) { 
   var alphabets = "abcdefghijklmnopqrstuvwxyz";
   var newAlphabets = "bcdEfghIjklmnOpqrstUvwxyzA";
   var result = "";
    
  
    for (i = 0; i < str.length; i++) {
        
        if (alphabets.indexOf(str[i]) !== -1) {
           
            var index = alphabets.indexOf(str[i]);
           
            result += newAlphabets.charAt(index);

        } else {
            
            result += str[i];
        }
    }
   
    return result;
}
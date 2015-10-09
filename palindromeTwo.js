function PalindromeTwo(str) { 

  str = str.replace(/[^a-zA-Z]/g,"").toLowerCase();
  str_rev = str.split("").reverse().join("");
  if (str == str_rev){
    return "true";
  }
  else{
    return "false";
  }
         
}
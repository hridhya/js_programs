function Palindrome(str) { 

  str = str.replace(/[\s]/g, "");
  str_rev = str.split("").reverse().join("");
  return str == str_rev;
         
}
   
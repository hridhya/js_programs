function countBs(str){
  var count = 0;
  for (var i = 0; i<str.length;i++){
    if(str.charAt(i) == "B"){
      count+=1;
    }
  }
    return count;
};


function countChar(str,chr){
  var count = 0;
  for (var i = 0; i<str.length; i++){
    if(str.charAt(i) == chr){
      count+=1;
    }
  }
  return count;
};

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
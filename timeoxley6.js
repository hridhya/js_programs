
function countWords(inputWords) {
      // SOLUTION GOES HERE
      return inputWords.reduce(function(count, words){
      	
      	if (count[words]) 
      		count[words]++;
      	else
      		count[words]=1;
      		
      	return count; },{});
      
}

module.exports = countWords

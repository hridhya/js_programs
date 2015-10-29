
    function doubleAll(numbers) {
    	var doubles = [];
        numbers.map(function(num) {
  			doubles.push( num * 2);});
  		return doubles;
    }

    module.exports = doubleAll
    
   
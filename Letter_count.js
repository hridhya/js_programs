function letterCount(check_str){

	var count = {};
	for letter in check_str{
		if (count.has_key(letter)){
			count[letter] += 1;
		}
		else{
			count[letter] = 1;
		}
	}
			
	for key in count{
		if (count[key] > 1){
			console.log( key, count[key]);
		}
	}
	
	return check_str;
	
}
			

repeat(str.strip())	

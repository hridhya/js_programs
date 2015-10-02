function VowelCount(str){
	var lst = ['a', 'e', 'i', 'o', 'u'];
	var count = 0;
	for (var i=0; i<str.length; i++){
		for (var j=0; j<5; j++){
			if (str[i] == lst[j]){
				count++;
			}
		}
	}
	return count;
}

VowelCount(readline());        


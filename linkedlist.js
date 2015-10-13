function createNode(value, rest){
	return {value: value, rest:rest};
}
	
function prepend(value, rest){
	return {value:value, rest:rest};
}
	
function arrayToList(arr){
//Building up a list is done back to front
	var index = arr.length - 1;
	var node = createNode(arr[index], null);
	
	index = index - 1;
	
	while (index >= 0 ){
		node = createNode(arr[index], node);
		index = index - 1;
	}

	return node;
}

function listToArray(list){

	var arr = [];
	
	while (list != null){
	
		arr.push(list.value);
		list = list.rest;
	}

	return arr;
}


function nth(list, n){

	if (n<0 || list == null){
		return;
	}
	
	while (list.rest != null && n>0){
	
		list = list.rest;
		n = n-1;
		
	}
	
	if (n == 0){
		return list.value;
	}
	
}
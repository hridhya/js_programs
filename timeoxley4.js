//getShortMessages takes an array of objects with '.message' properties and 
//returns an array of messages that are less than < 50 characters long.

function getShortMessages(messages) {
      // SOLUTION GOES HERE
      
      var filtered =  messages.filter(function(m){
      	return m.message.length < 50;  	
    });
    
    return filtered.map(function(m){
    	return m.message});
}

    module.exports = getShortMessages

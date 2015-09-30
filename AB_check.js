
function ABCheck(str) {


    var testOne = /a...b/;
    var testTwo = /b...a/;

   
    var aThenB = testOne.test(str);
    var bThenA = testTwo.test(str);

    
    return aThenB || bThenA;
}


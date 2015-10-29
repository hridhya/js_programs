function DashInsert(num) {

    
    num = num.toString().split("");
    var answer = "";
    for (var i = 0; i < num.length; i++) {
        if ((i > 0) && (num[i] % 2 === 1) && (num[i - 1] % 2 === 1)) {
            answer += "-";
        }
        answer += num[i];
    }

    return answer;
}
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
DashInsert(readline());       
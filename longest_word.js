function LongestWord(sen) {
    var long_w = "";
    var long_len = 0;
    sen = sen.replace(/[^a-zA-Z0-9\s]/g, "").split(" ");

    for (var i = 0; i < sen.length; i++) {
        if (sen[i].length > long_len) {
            long_len = sen[i].length;
            long_w = sen[i];
        }
    }
    return long_w;
}
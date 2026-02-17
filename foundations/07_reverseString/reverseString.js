const reverseString = function(str) {
    let arrayStr = str.split("");
    let reverseStr = "";
    for (let i = 1; i <= arrayStr.length; i++){
        reverseStr = reverseStr + arrayStr[(arrayStr.length) - i];
    }
    return reverseStr;
};

// Do not edit below this line
module.exports = reverseString;

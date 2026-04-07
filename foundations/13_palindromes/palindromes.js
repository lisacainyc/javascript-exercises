const palindromes = function (str) {
    let charArray = str.replace(/[^a-z0-9]/gi, '').toLowerCase().split('');
    let reverseArray = str.replace(/[^a-z0-9]/gi, '').toLowerCase().split('').reverse();
    for (let i = 0; i < charArray.length; i++){
        if (charArray[i] !== reverseArray[i]){
            return false;
        };
    };
    return true;
};

// Do not edit below this line
module.exports = palindromes;

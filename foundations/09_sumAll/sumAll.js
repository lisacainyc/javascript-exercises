const sumAll = function(...arr) {
    let sortedArray = arr.sort((a, b) => a - b);
    for (let n = 0; n < sortedArray.length; n++){
        if ((typeof sortedArray[n] !== "number") || (!Number.isInteger(sortedArray[n]))|| (sortedArray[n] < 0)){
            return("ERROR");
        }
    }
    let sum = 0;
    for (let i = sortedArray[1]; i >= sortedArray[0]; i--){
        sum = sum + i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

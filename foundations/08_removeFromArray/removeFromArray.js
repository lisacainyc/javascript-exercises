const removeFromArray = function(arr, ...args) {
    const argsArray = Array.from(args);
    let newArray = arr.filter(item => !argsArray.includes(item));
    return(newArray);
};

// Do not edit below this line
module.exports = removeFromArray;

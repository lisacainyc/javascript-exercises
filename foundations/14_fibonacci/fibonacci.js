const fibonacci = function(n) {
    let num = Number(n);
    if (n < 0) {
        return "OOPS";
    }else if (n == 0){
        return 0;
    }else{
    let calc = [1,1];
    for (let i = 0; i < n-2; i++){
        let nextNum = calc[i] + calc[i+1];
        calc.push(nextNum);
    }; 
    return calc.pop();
    };
};

// Do not edit below this line
module.exports = fibonacci;

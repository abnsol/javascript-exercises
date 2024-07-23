const sumAll = function(numOne,numTwo) {
    if (numOne < 0 || numTwo < 0){
        return "ERROR";
    }else if(typeof(numOne) !== 'number' || typeof(numTwo) != 'number'){
        return "ERROR";
    }else if(Math.floor(numOne) != numOne || Math.floor(numTwo) != numTwo){
        return "ERROR";
    }else{
        const n = (Math.max(numTwo,numOne) + 1) - Math.min(numOne,numTwo);
        return n * ((numTwo + numOne)/2);
    }
};

// Do not edit below this line
module.exports = sumAll;

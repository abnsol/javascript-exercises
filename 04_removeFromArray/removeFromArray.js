const removeFromArray = function(array,...args) {
    filtered = [];
    array.forEach(element => {
        if (!args.includes(element)){
            filtered.push(element);
        }
    });
    return filtered;
};

// Do not edit below this line
module.exports = removeFromArray;

function solve(arr) {
    let output = [];
    let currentNumber = arr.shift();
    output.push(currentNumber);
    while (arr.length > 0) {
        currentNumber = arr.shift();
        if(currentNumber >= output[output.length-1]){
            output.push(currentNumber);
        }
    }

    return output;

}

console.log(solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
));
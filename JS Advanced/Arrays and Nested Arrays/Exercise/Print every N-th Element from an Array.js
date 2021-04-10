function solve(arr, step) {
    return arr.filter((num, i) => i % step === 0);

}


console.log(solve(['dsa',
        'asd',
        'test',
        'tset'],
    2
));
function solve(arr) {
    let output = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > output) {
                output = arr[i][j];
            }
        }
    }
    return output;
}

console.log(solve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
));
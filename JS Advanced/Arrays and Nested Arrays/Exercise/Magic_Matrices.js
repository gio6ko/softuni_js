function solve(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let compare = matrix[i].reduce((a, b) => {
            return a + b

        });
        for (let j = 0; j < matrix[i].length; j++) {
            let colSum = 0;
            for (let k = 0; k < matrix.length; k++) {
                colSum += matrix[k][j];
            }
            if (compare !== colSum) {
                return false;
            }
        }
    }


    return true;
}

console.log(solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
));
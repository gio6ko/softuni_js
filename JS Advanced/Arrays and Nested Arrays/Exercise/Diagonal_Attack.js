function solve(input) {
    let matrix = [[]];

    for (let i = 0; i < input.length; i++) {
        matrix[i] = input[i].split(" ").map(Number);
    }

    let sumFirstDiagonal = 0;
    let sumSecondDiagonal = 0;
    for (let i = 0; i < matrix.length; i++) {
        sumFirstDiagonal += matrix[i][i];
        sumSecondDiagonal += matrix[matrix.length - i - 1][i];
    }

    if (sumFirstDiagonal === sumSecondDiagonal) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (i !== j && j !== matrix.length - 1 - i) {
                    matrix[i][j] = sumFirstDiagonal;
                }
            }
        }
    }

    for (let i of matrix) {
        console.log(i.join(' '));
    }

}


console.log(solve(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
));
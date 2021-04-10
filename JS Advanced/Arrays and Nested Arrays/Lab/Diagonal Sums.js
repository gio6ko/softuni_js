function solve(matrix) {
    let firstDiagonal = 0;
    let secondDiagonal = 0;
    for (let i = 0; i < matrix.length; i++) {
        firstDiagonal += matrix[i][i];
        secondDiagonal += matrix[matrix.length - 1 - i][i];
    }

    return `${firstDiagonal} ${secondDiagonal}`;
}


console.log(solve([[20, 40],
    [10, 60]]
));
console.log(solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
));
function solve(input){

    let matrix = [[]];
    for (let i = 0; i < input[0]; i++) {
        let arr = [];
        for (let j = 0; j < input[1]; j++) {
             arr.push(0);
        }

        matrix[i] = arr;
    }


    matrix[input[2]][input[3]] = 1;


}


console.log(solve([4, 4, 0, 0]));
function solve(arr){
    let output = [];

    for(let i of arr){
        if(i<0){
            output.unshift(i);
        }else {
            output.push(i);
        }

    }

    return output;
}

console.log(solve([7, -2, 8, 9]).join(' '));
console.log(solve([3, -2, 0, -1]).join(' '));
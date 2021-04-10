function sum(arr){
    let sum = Number(arr.pop()) + Number(arr.shift());

    return sum;
}

console.log(sum(['20', '30', '40']));
console.log(sum(['5', '10']));
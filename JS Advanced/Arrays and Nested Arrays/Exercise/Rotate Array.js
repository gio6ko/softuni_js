function solve(arr , rotation){
    for (let i = 0; i < rotation; i++) {
        let number =  arr.pop();
        arr.unshift(number);
    }

    return arr.join(' ');
}

console.log(solve(['1',
        '2',
        '3',
        '4'],
    2
));
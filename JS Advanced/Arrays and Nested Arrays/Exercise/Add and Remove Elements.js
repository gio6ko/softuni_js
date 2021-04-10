function solve(arr) {
    let output = [];
    let num = 1;
    for (let i of arr) {
        if (i === 'add') {
            output.push(num);
        } else {
            output.pop();
        }
        num++;
    }

    return output.length === 0 ? 'Empty' : output.join('\n');
}

console.log(solve(['remove',
    'remove',
    'remove']
));
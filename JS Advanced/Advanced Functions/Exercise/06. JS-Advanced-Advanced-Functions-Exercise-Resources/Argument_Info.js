function solve(...args) {

    let result = {};
    args.forEach(el => {
        let type = typeof el !== undefined ? typeof el : undefined + '';
        console.log(`${type}: ${el.toString()}`)
        if (result[type]) {
            result[type] += 1;
        } else {
            result[type] = 1;
        }
    });

    Object.keys(result).sort((a, b) => result[b] - result[a])
        .forEach(key => console.log(`${key} = ${result[key]}`));

}


solve('cat', 42, function () {
    console.log('Hello world!');
})
solve(42, 'cat', [], undefined)
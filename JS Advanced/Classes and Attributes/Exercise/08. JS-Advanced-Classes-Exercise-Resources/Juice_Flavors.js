function solve(arr) {
    let fruits = [];
    let bottles = [];
    arr = arr.map(e => e.split(' => '));
    arr.forEach(e => {
        if (!fruits[e[0]]) {
            fruits[e[0]] = Number(e[1]);
        } else {
            fruits[e[0]] += Number(e[1]);
        }

        if (fruits[e[0]] >= 1000) {
            if (!bottles[e[0]]) {
                bottles[e[0]] = 0;
            }
            bottles[e[0]] += Math.floor(fruits[e[0]] / 1000);
            fruits[e[0]] = fruits[e[0]] - (bottles[e[0]] * 1000);
        }
    });


    let result = '';

    for (let bottlesKey in bottles) {
        result += `${bottlesKey} => ${bottles[bottlesKey]}\n`
    }
    return result;

}


console.log(solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
));
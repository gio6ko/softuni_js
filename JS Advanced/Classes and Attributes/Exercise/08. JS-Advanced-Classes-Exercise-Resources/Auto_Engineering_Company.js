function solve(arr) {

    let cars = {};
    arr.forEach(e => {
        let tokens = e.split(' | ');
        let brand = tokens[0];
        let model = tokens[1];
        let numberProduced = Number(tokens[2]);

        if (!cars[brand]) {
            cars[brand] = {};
        }
        if (!cars[brand][model]) {
            cars[brand][model] = 0;
        }

        cars[brand][model] += numberProduced;
    })

    let result = '';
    Object.entries(cars).forEach(([key, value]) => {
        result += key + '\n';
        for (let valueKey in value) {
            result += `###${valueKey} -> ${value[valueKey]}\n`
        }
    })


    return result;

}


console.log(solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
))
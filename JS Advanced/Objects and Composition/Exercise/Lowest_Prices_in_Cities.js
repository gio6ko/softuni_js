function solve(input) {
    let arr = {};

    while (input.length) {
        let element = input.shift();

        let [town, product, price] = element.split(" | ");

        if (!arr[product]) {
            arr[product] = {town, price: Number(price)};
        } else {
            arr[product] = Number(price) >= arr[product].price ? arr[product] : {town, price: Number(price)};
        }
    }

    let result = [];
    for (const product in arr) {
        result.push(`${product} -> ${arr[product].price} (${arr[product].town})`)
    }


    return result.join('\n');
}


console.log(solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
))
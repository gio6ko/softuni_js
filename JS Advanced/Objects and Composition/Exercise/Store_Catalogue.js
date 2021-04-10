function solve(input) {
    input.sort();

    let catalogue = {};
    let ch;
    while (input.length) {
        ch = input[0].charAt(0);
        let arr = [];
        while (input.length !== 0 && ch === input[0].charAt(0)) {
            let [name,price] = input.shift().split(" : ");
            price = Number(price);
            arr.push(`  ${name}: ${price}`);
        }

        catalogue[ch] = arr.join("\n");
    }
    let result = '';
    for (const letter in catalogue) {
        let values = catalogue[letter];
        result += `${letter}\n${catalogue[letter]}`
        result += "\n";
    }

    return result;

}


console.log(solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
))
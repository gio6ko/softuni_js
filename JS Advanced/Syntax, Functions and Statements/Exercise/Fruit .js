function solve(type, weight, price) {
    let result = 0;
    let kilos = weight/1000;
    result = kilos * price;

    console.log(`I need $${result.toFixed(2)} to buy ${kilos.toFixed(2)} kilograms ${type}.`)
}

solve('orange', 2500, 1.80);
solve('apple', 1563, 2.35);
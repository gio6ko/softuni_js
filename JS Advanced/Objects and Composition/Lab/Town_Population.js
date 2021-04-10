function solve(arr) {
    const towns = {};
    let newArr = arr.filter((a, b) => {
        return a === b;
    })
    console.log()
    for (let town of arr) {
        let [name, population] = town.split(" <-> ");
        population = Number(population);

        if (towns[name] !== undefined) { 
            population += towns[name];
        }
        towns[name] = population;
    }
    for (let town in towns) {
        console.log(`${town} : ${towns[town]}`)
    }
}


solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
);
function solve(name, population, treasury) {
    const city = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percentage) {
            this.population = Math.floor(this.population * (1 + percentage / 100));
        },
        applyRecession(percentage) {
            this.treasury = Math.floor(this.treasury * (1 - percentage / 100));
        }

    }

    return city;
}


const city =
    solve('Tortuga',
        7000,
        15000);
console.log(city);

city.applyGrowth(10);
console.log(city.population);
city.applyRecession(10);
console.log(city.population);

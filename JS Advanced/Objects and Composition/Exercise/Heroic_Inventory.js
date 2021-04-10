function solve(input) {
    let register = [];

    for (let element of input) {
        let [name, level, items] = element.split(" / ");
        level = Number(level);
        items = items ? items.split(", ") : [];
        const hero = {
            name,
            level,
            items
        }
        register.push(hero);
    }
    return JSON.stringify(register);

}


console.log(solve(['Jake / 1000 / Gauss, HolidayGrenade']
))
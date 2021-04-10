function solve(input) {

    let [columns, ...table] = input;
    columns = columns.split("|").filter(x => x !== "").map(x => x.trim());

    function isNumber(x) {
        return isNaN(x) ? x : Number(Number(x).toFixed(2));
    }

    let arr = [];
    for (let i = 0; i < table.length; i++) {
        let obj = {};
        for (let j = 0; j < columns.length; j++) {
            let city = table[i].split("|").filter(x => x !== "").map(x => x.trim()).map(isNumber);
            obj[columns[j]] = city[j];
        }

        arr.push(obj);
    }


    return JSON.stringify(arr);
}


console.log(solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
))
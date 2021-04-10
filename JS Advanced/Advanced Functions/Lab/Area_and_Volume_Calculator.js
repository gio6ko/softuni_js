function solve(area, vol, dataAsJSON) {


    const input = JSON.parse(dataAsJSON);

    return input.map(el => (
        {
            area: area.call(el),
            volume: vol.call(el)
        }
    ));
}

console.log(solve(area, vol, `[
{"x":"1","y":"2","z":"10"},
{"x":"7","y":"7","z":"10"},
{"x":"5","y":"2","z":"10"}
]`
))

function area() {
    return Math.abs(this.x * this.y);
}


function vol() {
    return Math.abs(this.x * this.y * this.z);
}




function add(a) {
    let sum = 0;
    sum += a;

    function add1(b) {
        sum += b;
        return add1
    }

    add1.toString = () => sum;

    return add1;
}


console.log("" + add(1));
console.log("" + add(1)(6)(-3));

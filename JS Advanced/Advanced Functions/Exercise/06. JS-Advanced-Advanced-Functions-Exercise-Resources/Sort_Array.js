function solve(arr, str) {
    if (str === 'asc') {
        return arr.sort((a,b)=>a-b);
    } else if (str === 'desc') {
        return arr.sort((a, b) => b - a);
    }
}
console.log(solve([3,1,2,10],'asc'));
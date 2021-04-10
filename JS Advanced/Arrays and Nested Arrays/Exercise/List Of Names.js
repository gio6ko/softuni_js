function solve(arr){
    let str = '';
    arr.sort((a,b)=> a.localeCompare(b));
    for (let i = 0; i < arr.length; i++) {
        str += `${i+1}.${arr[i]}\n`;
    }
    return str;
}

console.log(solve(["John", "Bob", "Christina", "Ema"]));
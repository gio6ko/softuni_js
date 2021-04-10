function solve(arr) {
    return arr.sort((a,b)=>{
        if(a.length === b.length){
            return a.localeCompare(b);
        }else {
            return a.length - b.length;
        }
    }).join('\n');
}


console.log(solve(['alpha',
    'beta',
    'gamma']
));
console.log(solve(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']
));

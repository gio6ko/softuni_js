function even(myArr) {
    let str = [];
    for (let i = 0; i < myArr.length; i += 2) {
        str[str.length] =  myArr[i];
    }
    console.log(...str);
}

even(['20', '30', '40', '50', '60']);
/*console.log(even(['20', '30', '40', '50', '60']));
console.log(even(['5', '10']));*/
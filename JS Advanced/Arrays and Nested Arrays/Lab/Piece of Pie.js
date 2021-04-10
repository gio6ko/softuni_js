function solve(arr, firstFlavor, secondFlavor) {
    let index1 = arr.indexOf(firstFlavor);
    let index2 = arr.indexOf(secondFlavor) + 1;

    return arr.slice(index1, index2);
}


console.log(solve(['Pumpkin Pie',
        'Key Lime Pie',
        'Cherry Pie',
        'Lemon Meringue Pie',
        'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
));
function solve(x1, y1, x2, y2) {
    if (x1 !== 0 && y1 !== 0) {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }else {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
    }
    if (x2 !== 0 && y2 !== 0) {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
    }else {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
    }

    if(x1===x2 || y1 === y2 || x1===y2 || x2===y1){
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    }else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }

}

//solve(2, 1, 1, 1);
solve(3, 4, 1, 4);


function squareOfStars(a) {
    for (let i = 0; i < a; i++) {
        let result = '';
        for (let j = 0; j < a; j++) {
            result += '* ';
        }
        console.log(result)
    }
}

squareOfStars(1);
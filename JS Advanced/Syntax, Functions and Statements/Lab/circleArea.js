function circleArea(param) {
    let result;
    if (typeof param === 'number') {
        result = Math.pow(param, 2) * Math.PI;
        console.log(result.toFixed(2));
    } else {
        let inputType = typeof param;
        result = `We can not calculate the circle area, because we receive a ${inputType}.`;
        console.log(result);
    }
}

circleArea('Joro');
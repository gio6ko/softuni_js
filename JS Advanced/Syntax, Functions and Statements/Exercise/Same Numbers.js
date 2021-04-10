function solve(number) {
    let str = number + '';
    let answer = true;
    let result = 0;
    for (let i = 0; i < str.length-1; i++) {
        if (str.charAt(i) !== str.charAt(i + 1)) {
            answer = false;
        }

        result += Number(str.charAt(i));
    }

    result += Number(str.charAt(str.length-1));

    console.log(answer);
    console.log(result);
}

solve(2222222);
solve(1234);
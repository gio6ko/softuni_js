function mathOperation(a, b, str) {
    let result;
    switch (str) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;
        case '%':
            result = a % b;
            break;
        case '**':
            result = a ** b;
            break;

    }
    console.log(result);
}

mathOperation(5, 6, '+');
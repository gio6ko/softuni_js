function dayOfWeek(str) {
    let result;
    switch (str) {
        case 'Monday':
            return result = 1;
        case 'Tuesday':
            return result = 2;
        case 'Wednesday':
            return result = 3;
        case 'Thursday':
            return result = 4;
        case 'Friday':
            return result = 5;
        case 'Saturday':
            return result = 6;
        case 'Sunday':
            return result = 7;
        default :
            return result = 'error';
    }
}

console.log(dayOfWeek('Wednesday'));


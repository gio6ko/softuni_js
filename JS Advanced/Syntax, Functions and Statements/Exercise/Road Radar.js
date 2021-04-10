function solve(speed, area) {
    switch (area) {
        case 'motorway':
            console.log(output(130, speed - 130));
            break;
        case 'interstate':
            console.log(output(90, speed - 90));
            break;
        case 'city':
            console.log(output(50, speed - 50));
            break;
        case 'residential':
            console.log(output(20, speed - 20));
            break;

    }

    function output(speedLimit, difference, status) {
        if (difference <= 0) {
            return `Driving ${speed} km/h in a ${speedLimit} zone`
        } else if (speed - speedLimit <= 20) {
            status = 'speeding';
            return `The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`
        } else if (speed - speedLimit > 20 && speed - speedLimit <= 40) {
            status = 'excessive speeding ';
            return `The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`
        } else {
            status = 'reckless driving ';
            return `The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`
        }
    }
}

console.log(solve(40, 'city'));
console.log(solve(21, 'residential'));
console.log(solve(120, 'interstate'));
console.log(solve(200, 'motorway'));

function solve(number, com1,com2,com3,com4,com5) {
    let num = parseInt(number)
    const arr = [com1,com2,com3,com4,com5];
    for (let i = 0; i < arr.length; i++) {
        num = operation(arr[i], num);
        console.log(num);
    }
    function operation(element, number) {
        switch (element) {
            case 'chop':
                return number / 2;
            case 'dice':
                return Math.sqrt(number);
            case 'spice':
                return number + 1;
            case 'bake':
                return number * 3;
            case 'fillet':
                return number - number*0.2;

        }
    }


}

//solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');

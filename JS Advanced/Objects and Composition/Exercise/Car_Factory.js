function solve(requirements) {
    function getEngine(power) {
        let engines = [
            {power: 90, volume: 1800},
            {power: 120, volume: 2400},
            {power: 200, volume: 3500}
        ]


        return engines.find(engine => engine.power >= power);
    }

    function getCarriage(carriage, color) {
        if (carriage === 'hatchback') {
            return {type: 'hatchback', color: color}
        } else if (carriage === 'coupe') {
            return {type: 'coupe', color: color}
        }
    }

    function getWheels(wheelSize) {
        if (wheelSize % 2 === 0) {
            wheelSize--;
        }

        return [wheelSize, wheelSize, wheelSize, wheelSize];

    }


    return {
        model: requirements.model,
        engine: getEngine(requirements.power),
        carriage: getCarriage(requirements.carriage, requirements.color),
        wheels: getWheels(requirements.wheelsize)
    }


}


console.log(solve({
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14
    }
))
class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }


    addCar(carModel, carNumber) {
        if (this.vehicles.length >= this.capacity) {
            throw new Error("Not enough parking space.");
        }

        this.vehicles.push({
            carModel,
            carNumber,
            payed: false
        })
        return `The ${carModel}, with a registration number ${carNumber}, parked.`;
    }


    removeCar(carNumber) {
        if (this.vehicles.some(e => e.carNumber === carNumber) === false) {
            throw new Error("The car, you're looking for, is not found.");
        }

        let car = this.vehicles.find(e => e.carNumber === carNumber);


        if (!car.payed) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`)
        }

        this.vehicles.splice(this.vehicles.indexOf(car), 1);
        return `${carNumber} left the parking lot.`
    }


    pay(carNumber) {
        if (this.vehicles.some(e => e.carNumber === carNumber) === false) {
            throw new Error(`${carNumber} is not in the parking lot.`)
        }

        let car = this.vehicles.find(e => e.carNumber === carNumber);
        if (car.payed) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`)
        }

        car.payed = true;
        return `${carNumber}'s driver successfully payed for his stay.`;
    }


    getStatistics(carNumber) {
        let result = ''
        if (!carNumber) {
            result += `The Parking Lot has ${this.capacity - this.vehicles.length} empty spots left.`
            this.vehicles.sort((a, b) => a.carModel.localeCompare(b.carModel));
            this.vehicles.forEach(e => {
                let isPayed = e.payed ? 'Has payed' : 'Not payed';
                result += `\n${e.carModel} == ${e.carNumber} - ${isPayed}`
            })
        }else {
            let car = this.vehicles.find(e=>e.carNumber === carNumber);
            let isPayed = car.payed ? 'Has payed' : 'Not payed';
            result += `${car.carModel} == ${car.carNumber} - ${isPayed}`;
        }

        return result;
    }

}


const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));

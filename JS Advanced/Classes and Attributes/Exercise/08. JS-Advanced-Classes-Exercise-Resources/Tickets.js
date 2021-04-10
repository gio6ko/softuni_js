function solve(arr, sortCriteria) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;

        }
    }

    const sortMapper = {
        'destination': (a, b) => a.destination.localeCompare(b.destination),
        'price': (a, b) => a.price - b.price,
        'status': (a, b) => a.status.localeCompare(b.status)
    }


    let result = arr.map(splitLine)
        .map(createTicket)
        .sort(sortMapper[sortCriteria]);


    return result;


    function splitLine(line) {

        return line.split('|');
    }

    function createTicket(arr) {
        let [destination, price, status] = arr;
        return new Ticket(destination, Number(price), status);
    }
}


console.log(solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
))
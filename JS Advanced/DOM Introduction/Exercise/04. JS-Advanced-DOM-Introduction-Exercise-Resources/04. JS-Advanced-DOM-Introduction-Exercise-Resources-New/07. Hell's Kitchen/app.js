function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    let text = document.querySelector('#inputs>textarea');

    function onClick() {
        let arr = JSON.parse(text.value);
        let restaurants = [];
        arr.forEach(line => {
            const tokens = line.split(' - ');
            const name = tokens[0];
            const workersArr = tokens[1].split(', ');
            let workers = [];

            for (let worker of workersArr) {
                let workerTokens = worker.split(' ');
                const salary = Number(workerTokens[1]);
                workers.push({name: workerTokens[0], salary});
            }
            // if (restaurants.includes(name)) {
            //     workers = workers.concat(restaurants[name].workers);
            // }

            for (let restaurant of restaurants) {
                if(restaurant[name] === name){
                   workers = workers.concat(restaurant[workers]);
                   break;
                }
            }

            workers.sort((w1, w2) => w2.salary - w1.salary);

            const bestSalary = workers[0].salary;
            const averageSalary = (workers.reduce((sum, worker) => sum + worker.salary, 0) / workers.length);


            restaurants.push({
                name,
                workers,
                averageSalary,
                bestSalary
            });
        })

        restaurants.sort((r1, r2) => r2.averageSalary - r1.averageSalary);
        let bestRestaurant = restaurants[0];
        // console.log(bestRestaurant);
        document.querySelector('#bestRestaurant>p').textContent =
            `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;
        let workersText = '';
        bestRestaurant.workers.forEach(worker => {
            workersText += `Name: ${worker.name} With Salary: ${worker.salary} `
        })
        document.querySelector('#workers>p').textContent = workersText

    }
}
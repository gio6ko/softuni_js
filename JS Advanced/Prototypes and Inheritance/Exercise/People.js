function solve() {
    const TASKS = {
        JUNIOR: [' is working on a simple task.'],
        SENIOR: [' is working on a complicated task.',
            ' is taking time off work.',
            ' is supervising junior workers.'],
        MANAGER: [' scheduled a meeting.',
            ' is preparing a quarterly report.']
    }

    class Employee {
        constructor(name, age, tasks) {
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = tasks;
        }


        get Salary() {
            return this.salary;
        }

        work() {

        }

        collectSalary() {
            console.log(`${this.name} received ${this.salary} this month.`);


        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age, TASKS.JUNIOR);
        }


        work() {
            let task = this.tasks.shift();
            this.tasks.push(task);
            console.log(`${this.name}${task}`);
        }

        collectSalary() {
            super.collectSalary();
        }
    }


    class Senior extends Employee {
        constructor(name, age) {
            super(name, age, TASKS.SENIOR);
        }


        work() {
            let task = this.tasks.shift();
            this.tasks.push(task);
            console.log(`${this.name}${task}`);
        }

        collectSalary() {
            super.collectSalary();
        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age, TASKS.MANAGER);
            this.dividend = 0;
        }


        work() {
            let task = this.tasks.shift();
            this.tasks.push(task);
            console.log(`${this.name}${task}`);
        }


        collectSalary() {
            console.log(`${this.name} received ${this.salary + this.dividend} this month.`)
        }
    }

    return {
        Employee,
        Junior,
        Senior,
        Manager
    }
}


const mod = solve();
const junior = new mod.Junior('Ivan', 25);

var guy1 = new mod.Junior('dragan', 23);
guy1.salary = 1000;
guy1.collectSalary();



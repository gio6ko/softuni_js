class Company {
    constructor() {
        this.departments = [];

    }

    addEmployee(username, salary, position, department) {
        if (!username || !salary || !position || !department || salary < 0) {
            throw new Error('Invalid input!');
        }
        let newEmployee = {
            username,
            salary: Number(salary),
            position
        }

        if (!this.departments[department]) {
            this.departments[department] = [];
        }

        this.departments[department].push(newEmployee);

        return `New employee is hired. Name: ${username}. Position: ${position}`
    }

    bestDepartment() {
        let department = '';
        let maxAverageSalary = 0;
        Object.entries(this.departments).forEach(([key, value]) => {
            let salary = 0;
            value.forEach(e => {
                salary += e.salary;
            })

            if ((salary / value.length) > maxAverageSalary) {
                department = key;
                maxAverageSalary = salary / value.length;
            }
        })

        this.departments[department].sort((a, b) => {
            if (a.salary === b.salary) {
                return a.username.localeCompare(b.username)
            } else {
                return b.salary - a.salary;
            }
        })

        let result = `Best Department is: ${department}\nAverage salary: ${maxAverageSalary.toFixed(2)}\n`

        this.departments[department].forEach(e => {
            result += `${e.username} ${e.salary} ${e.position}\n`
        })

        return result.trim();

    }
}

//
// let c = new Company();
// c.addEmployee("Stanimir", 2000, "engineer", "Construction");
// c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
// c.addEmployee("Slavi", 500, "dyer", "Construction");
// c.addEmployee("Stan", 2000, "architect", "Construction");
// c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
// c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
// c.addEmployee("Gosho", 1350, "HR", "Human resources");
// console.log(c.bestDepartment());




let c = new Company();
let actual1 = c.addEmployee("Stanimir", 2000, "engineer", "Human resources");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}


function solve() {
    let string = 'The {0} {1} fox,quick,brown';
    let params = ['quick', 'brown'];

    console.log(/({\d})/gm.exec(string))
    let result = '';
    while (/({\d})/gm.test(string)) {
        let replacer = params.shift();
         result = string.replace(/({\d})/g.exec(string)[0], replacer);
         string = result;
    }
    console.log(string);
}

// const myPerson = new Person('Joro', 'Jorev');
// const otherPerson = new Person('Georgi', 'Yazmadzhian');
//
// Person.prototype.write = function (message) {
//     console.log(message);
// }
// console.log(Object.getPrototypeOf(myPerson));
// console.log(Object.getPrototypeOf(otherPerson));
// let objValue1 = Object.getPrototypeOf(myPerson).valueOf();
// let objValue2 = Object.getPrototypeOf(otherPerson).valueOf();
// console.log(objValue1 === objValue2);
// console.log(objValue1 ,objValue2);
// console.log(otherPerson.write === myPerson.write);

solve();
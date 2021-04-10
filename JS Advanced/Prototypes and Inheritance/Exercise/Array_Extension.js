(function arrayExtension() {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };
    Array.prototype.skip = function (n) {
        let newArr = [];
        n = Math.abs(n);
        for (let i = n; i < this.length; i++) {
            newArr.push(this[i]);
        }

        return newArr;
    };
    Array.prototype.take = function (n) {
        let newArr = [];
        n = Math.abs(n);
        for (let i = 0; i < n; i++) {
            newArr.push(this[i]);
        }

        return newArr;
    };

    Array.prototype.sum = function () {
        return this.reduce((acc, current) => acc + current);
    };

    Array.prototype.average = function () {
        return this.sum() / this.length;
    };
})()


let arr = [1, 2, 3];
console.log(typeof arr);

console.log(Array.prototype.hasOwnProperty('last'));
console.log(arr.last());
console.log(arr.skip(2));
console.log(arr.take(2));
console.log(arr.sum());
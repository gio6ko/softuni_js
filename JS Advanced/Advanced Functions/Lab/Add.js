function solution(n) {
    let num = n;
    return (number) => {
        return  num + number;
    }
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
console.log(add5(4));


let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));

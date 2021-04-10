function solution() {

    let str = '';


    return {
        append,
        removeStart,
        removeEnd,
        print
    }


    function append(strToAppend) {
        str += strToAppend;
    }


    function removeStart(start) {
        str = str.substring(start);
    }

    function removeEnd(end) {
        str = str.substring(0,str.length - end);
    }

    function print() {
        console.log(str);
    }
}


let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();


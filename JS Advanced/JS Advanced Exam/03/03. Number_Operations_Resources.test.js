const {expect,assert} = require('chai');
const numberOperations = require('./03. Number_Operations_Resources');



describe("Tests", function() {
    describe("powNumber", function() {
        it("", function() {
            expect(numberOperations.powNumber(3)).to.equal(9);
        });
    });

    describe("numberChecker", function() {
        it("isNaN", function() {
            expect(()=> numberOperations.numberChecker(NaN)).to.throw(Error,'The input is not a number!');
        });
        it("isNotANumber", function() {
            expect(()=> numberOperations.numberChecker('a')).to.throw(Error,'The input is not a number!');
        });
        it("isNotANumber", function() {
            expect(()=> numberOperations.numberChecker([5,4])).to.throw(Error,'The input is not a number!');
        });
        it("lessThan100", function() {
            expect( numberOperations.numberChecker(99)).to.equal('The number is lower than 100!');
        });

        it("greaterThan100", function() {
            expect( numberOperations.numberChecker(101)).to.equal('The number is greater or equal to 100!');
        });

        it("greaterThan100", function() {
            expect( numberOperations.numberChecker(100.5)).to.equal('The number is greater or equal to 100!');
        });

        it("equalTo100", function() {
            expect( numberOperations.numberChecker(100)).to.equal('The number is greater or equal to 100!');
        });
    });


    describe("sumArrays", function() {
        it("sumOfArrays", function() {
            let arr1 = [1,2,3,4,5];
            let arr2 = [1,2,3,4];
            let result = numberOperations.sumArrays(arr1,arr2);
            let expected = [2,4,6,8,5]
            for (let i = 0; i < expected.length; i++) {
                expect(expected[i]).to.equal(result[i]);
            }
        });
        
    });

});


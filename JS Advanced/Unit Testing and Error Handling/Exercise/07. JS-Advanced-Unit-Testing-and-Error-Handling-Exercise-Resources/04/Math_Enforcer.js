const {expect} = require('chai');
const mathEnforcer = require('./Math_Enforcer.test');


describe('Math_Enforcer', () => {
    it('should return undefined if param is not a number ', function () {
        expect(mathEnforcer.addFive('a')).to.be.undefined;
    });


    it('should return undefined if param is not a number ', function () {
        expect(mathEnforcer.subtractTen('a')).to.be.undefined;
    });


    it('should return undefined if params are not a number ', function () {
        expect(mathEnforcer.sum('a','b')).to.be.undefined;
    });


    it('should return undefined if params are not a number ', function () {
        expect(mathEnforcer.sum(1,'b')).to.be.undefined;
    });


    it('should return undefined if params are not a number ', function () {
        expect(mathEnforcer.sum('a',1)).to.be.undefined;
    });

    it('should add 5 to  param', function () {
        expect(mathEnforcer.addFive(5)).to.equal(10);
    });

    it('should add 5 to  param', function () {
        expect(mathEnforcer.addFive(-1)).to.equal(4);
    });

    it('should add 5 to  param', function () {
        expect(mathEnforcer.addFive(1.5)).to.equal(6.5);
    });

    it('should subtract 10 from param', function () {
        expect(mathEnforcer.subtractTen(15)).to.equal(5);
    });


    it('should subtract 10 from param', function () {
        expect(mathEnforcer.subtractTen(-1)).to.equal(-11);
    });

    it('should subtract 10 from param', function () {
        expect(mathEnforcer.subtractTen(10.1)).to.equal(0.09999999999999964);
    });


    it('should return sum of params', function () {
        expect(mathEnforcer.sum(5,10)).to.equal(15);
    });


    it('should return sum of params', function () {
        expect(mathEnforcer.sum(1,0)).to.equal(1);
    });


    it('should return sum of params', function () {
        expect(mathEnforcer.sum(1,-1)).to.equal(0);
    });

    it('should return sum of params', function () {
        expect(mathEnforcer.sum(1.5,1.5)).to.equal(3);
    });
})
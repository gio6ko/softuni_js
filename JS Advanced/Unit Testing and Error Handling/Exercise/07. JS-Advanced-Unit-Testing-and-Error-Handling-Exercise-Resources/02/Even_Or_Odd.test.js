const {expect} = require('chai');
const isOddOrEven = require('./Even_Or_Odd');


describe('even or odd', () => {
    it('should return undefined ', function () {
        expect(isOddOrEven(8)).to.be.undefined;
    });

    it('should return odd ', function () {
        expect(isOddOrEven('a')).to.equal('odd');
    });

    it('should return even ', function () {
        expect(isOddOrEven('aa')).to.equal('even');
    });
})
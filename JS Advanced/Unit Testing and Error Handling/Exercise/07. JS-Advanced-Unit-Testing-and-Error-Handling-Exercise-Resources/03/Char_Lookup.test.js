const {expect} = require('chai');
const lookupChar = require('./Char_Lookup');


describe('Char_Lookup', () => {
    it('should be undefined when first param is not a string  ', function () {
        expect(lookupChar(4, 2)).to.be.undefined;
    });

    it('should be undefined when second param is double', function () {
        expect(lookupChar('abc', 2.2)).to.be.undefined;
    });

    it('should be undefined when second param is not a number ', function () {
        expect(lookupChar('joro', 'man')).to.be.undefined;
    });


    it('should return warning when second param is  a negative number ', function () {
        expect(lookupChar('joro', -1)).to.equal("Incorrect index");
    });


    it('should return warning when first param is bigger than length ', function () {
        expect(lookupChar('joro', 5)).to.equal("Incorrect index");
    });


    it('should return warning when first param equals length ', function () {
        expect(lookupChar('joro', 4)).to.equal("Incorrect index");
    });


    it('should return specific character ', function () {
        expect(lookupChar('joro', 1)).to.equal('o');
    });


})

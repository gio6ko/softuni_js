const {expect} = require('chai');
const sum = require('./Sum_of_Numbers');

describe('Sum Numbers', () => {
    it('sum single num ', function () {
        expect(sum([1])).to.equal(1);
    });



    it('sum multiple numbers ', function () {
        expect(sum([1,1])).to.equal(2);
    });


    it('sum different numbers ', function () {
        expect(sum([2,3,4])).to.equal(9);
    });
});

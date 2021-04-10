const {expect} = require('chai');
const isSymmetric = require('./Check_for_Symmetry');


describe('is symmetric', () => {
    it('returns true for valid symmetric input ', function () {
        expect(isSymmetric([1, 1])).to.true;
    });

    it('returns false for  valid non-symmetric input ', function () {
        expect(isSymmetric([1, 2])).to.be.false;
    });

    it('returns false for invalid  input ', function () {
        expect(isSymmetric(1)).to.be.false;
    });

    it('returns false for invalid  input ', function () {
        expect(isSymmetric('a')).to.be.false;
    });

    it('returns true for valid symmetric input ', function () {
        expect(isSymmetric(['a', 'a'])).to.true;
    });

    it('returns false for  valid non-symmetric input ', function () {
        expect(isSymmetric(['a', 'b'])).to.be.false;
    });

    it('returns false for  input ', function () {
        expect(isSymmetric(['1', 1])).to.be.false;
    });

});

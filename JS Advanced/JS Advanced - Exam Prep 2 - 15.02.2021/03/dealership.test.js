const {expect,assert} = require('chai');
const dealership = require('./dealership');

describe('test', ()=>{
    describe('newCarCost', ()=>{
        it('return original price ', function () {
            expect(dealership.newCarCost('a',200)).to.equal(200);
        });

        it('return discounted price ', function () {
            expect(dealership.newCarCost('Audi A4 B8',30000)).to.equal(15000);
        });
    });



    describe('carEquipment', ()=>{

        it('single element,single pick ', function () {
            expect(dealership.carEquipment(['a'],[0])).to.deep.equal(['a']);
        });
    });



    describe('euroCategory', ()=>{

        it('category bellow ', function () {
            expect(dealership.euroCategory(3)).to.equal('Your euro category is low, so there is no discount from the final price!');
        });

        it('category above ', function () {
            expect(dealership.euroCategory(5)).to.equal('We have added 5% discount to the final price: 14250.');
        });

        it('category equals minimum ', function () {
            expect(dealership.euroCategory(4)).to.equal('We have added 5% discount to the final price: 14250.');
        });


    });


});


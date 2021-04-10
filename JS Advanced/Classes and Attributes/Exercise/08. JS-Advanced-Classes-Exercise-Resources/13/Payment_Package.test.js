const {expect, assert} = require('chai');
const PaymentPackage = require('./Payment_Package');


describe('Payment_Package', () => {

    let instance = undefined;
    beforeEach(function () {
        instance = new PaymentPackage('Gosho', 22);

    })


    it('constructor ', function () {
        expect(instance._name === 'Gosho')
    });

    it('constructor ', function () {
        expect(instance._value === 22)
    });
    it('constructor ', function () {
        expect(instance._VAT === 20)
    });
    it('constructor ', function () {
        expect(instance._active === true);
    });

    it('getName', function () {
        expect(instance.name === 'Gosho')
    });

    it('getValue', function () {
        expect(instance.value === 22)
    });


    it('getVAT', function () {
        expect(instance.VAT === 20)
    });


    it('getActive', function () {
        expect(instance.active === true)
    });


    it('setName', function () {
        instance.name = 'Joro';
        expect(instance.name === 'Joro')
    });


    it('setNameErrorForEmptyString', function () {
        assert.throw(() => {
            instance.name = ''
        }, 'Name must be a non-empty string');

        assert.throw(() => {
            instance.name = 22
        }, 'Name must be a non-empty string');

    });


    it('setValueErrorForOtherTypeAndNegativeValue', function () {
        assert.throw(() => {
            instance.value = 'a'
        }, 'Value must be a non-negative number');

        assert.throw(() => {
            instance.value = -22
        }, 'Value must be a non-negative number');

    });


    it('setVaTErrorForOtherTypeAndNegativeValue', function () {
        assert.throw(() => {
            instance.VAT = 'a'
        }, 'VAT must be a non-negative number');

        assert.throw(() => {
            instance.VAT = -22
        }, 'VAT must be a non-negative number');

    });


    it('setActiveErrorForNonBoolValue', function () {
        assert.throw(() => {
            instance.active = null
        }, 'Active status must be a boolean');

        assert.throw(() => {
            instance.active = 'a'
        }, 'Active status must be a boolean');

        assert.throw(() => {
            instance.active = 22
        }, 'Active status must be a boolean');

        instance.active = false;

        assert.isFalse(instance.active);


    });


    it('toString ', function () {
        let output = [
            `Package: Gosho` + (instance.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): 22`,
            `- Value (VAT 20%): ${22 * (1 + 20 / 100)}`
        ].join('\n');
        expect(instance.toString() === output);
    });

    it('toString ', function () {
        instance.active = false;


        let output = [
            `Package: ${instance.name}` + (instance.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): ${instance.value}`,
            `- Value (VAT ${instance.VAT}%): ${instance.value * (1 + instance.VAT / 100)}`
        ].join('\n');
        expect(instance.toString() === output);

        instance.value = 25;
        output = [
            `Package: ${instance.name}` + (instance.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): ${instance.value}`,
            `- Value (VAT ${instance.VAT}%): ${instance.value * (1 + instance.VAT / 100)}`
        ].join('\n');
        assert.equal(instance.toString(), output);
        instance.VAT = 30;
        output = [
            `Package: ${instance.name}` + (instance.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): ${instance.value}`,
            `- Value (VAT ${instance.VAT}%): ${instance.value * (1 + instance.VAT / 100)}`
        ].join('\n');
        assert.equal(instance.toString(), output)
        instance.name = "Pesho";
        output = [
            `Package: ${instance.name}` + (instance.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): ${instance.value}`,
            `- Value (VAT ${instance.VAT}%): ${instance.value * (1 + instance.VAT / 100)}`
        ].join('\n');
        assert.equal(instance.toString(), output);
    });
})                          
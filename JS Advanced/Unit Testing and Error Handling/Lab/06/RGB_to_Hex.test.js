const {expect} = require('chai');
const rgbToHexColor = require('./RGB_to_Hex');


describe('RGB to HEX', ()=>{
    it('converts black to hex ', function () {
        expect(rgbToHexColor(0,0,0)).to.equal('#000000');
    });

    it('converts white to hex ', function () {
        expect(rgbToHexColor(255,255,255)).to.equal('#FFFFFF');
    });


    it('converts red to hex ', function () {
        expect(rgbToHexColor(255,0,0)).to.equal('#FF0000');
    });

    it('converts green to hex ', function () {
        expect(rgbToHexColor(0,255,0)).to.equal('#00FF00');
    });

    it('converts blue to hex ', function () {
        expect(rgbToHexColor(0,0,255)).to.equal('#0000FF');
    });


    it('returns undefined for string params', function (){
        expect(rgbToHexColor('a','a','a')).to.be.undefined;
    })


    it('returns undefined for negative params', function (){
        expect(rgbToHexColor(-1,-5,-2)).to.be.undefined;
    })



    it('returns undefined for bigger params', function (){
        expect(rgbToHexColor(1000,500,2000)).to.be.undefined;
    })


    it('returns some color for params', function (){
        expect(rgbToHexColor(255,158,170)).to.equal('#FF9EAA');
    })
})
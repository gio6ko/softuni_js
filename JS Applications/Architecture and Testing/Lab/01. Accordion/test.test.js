const {firefox} = require('playwright-firefox');
const {expect} = require('chai');
let browser, page; // Declare reusable variables
describe('E2E tests', function () {
    before(async () => {
        browser = await firefox.launch({headless:false,slowMo:200});
    });
    after(async () => {
        await browser.close();
    });
    beforeEach(async () => {
        page = await browser.newPage();
    });
    afterEach(async () => {
        await page.close();
    });

    it('load static page ', async function () {
        await page.goto('http://localhost:3000');


        const content = await page.textContent('.accordion .head span');
        expect(content).to.contains('Scalable Vector Graphics');
        // expect(content).to.contains('Open standard');
        // expect(content).to.contains('Unix');
        // expect(content).to.contains('ALGOL');

    });

    it('toggles content ',  async function () {
        await page.goto('http://localhost:3000');

        await page.click('#main>.accordion:first-child >> text=More');

        await page.waitForSelector('#main>.accordion:first-child >> .extra p');

        const visible = await page.isVisible('#main>.accordion:first-child >> .extra p');
        expect(visible).to.be.true;
    });

    it.only('toggles content ',  async function () {
        await page.goto('http://localhost:3000');

        await page.click('#main>.accordion:first-child >> text=More');
        await page.waitForSelector('#main>.accordion:first-child >> .extra p');
        await page.click('#main>.accordion:first-child >> text=Less');

        const visible = await page.isVisible('#main>.accordion:first-child >> .extra p');
        expect(visible).to.be.false;
    });
});

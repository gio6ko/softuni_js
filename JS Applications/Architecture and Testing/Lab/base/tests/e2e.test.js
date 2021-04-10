//@ts-check
const {firefox} = require('playwright-firefox');
const {expect} = require('chai');


function json(data) {
    return {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
}


let browser;
let context;
let page;

const mockData = require('./mock-data.json');

describe('E2E tests', function () {
    this.timeout(6000);

    before(async () => {
        // browser = await firefox.launch({ headless: false, slowMo: 500 });
        browser = await firefox.launch();
    });

    after(async () => {
        await browser.close();
    });

    beforeEach(async () => {
        context = await browser.newContext();

        // block intensive resources and external calls (page routes take precedence)
        await context.route('**/*.{png,jpg,jpeg}', route => route.abort());
        await context.route(url => {
            return url.hostname != 'localhost';
        }, route => route.abort());

        page = await context.newPage();
    });

    afterEach(async () => {
        await page.close();
        await context.close();
    });


    describe('Catalog', function () {

        it('loads and displays recipes', async function () {

            await page.route('**/data/recipes*',(request)=>request.fulfill(json(mockData.list)));
            await page.goto('http://localhost:3000/');

            await page.waitForSelector('article');

            const titles = await page.$$eval('h2', (titles) => titles.map(t => t.textContent));
            expect(titles[0]).to.contains('Easy Lasagna');
            expect(titles[1]).to.contains('Grilled Duck Fillet');
            expect(titles[2]).to.contains('Roast Trout');

        });
    });

    describe('Authentication',function (){
        it.only('register sends correct request ', async function () {
         //   await page.route('**/users/register',route => route.fulfill(json({_id: '0001',email,accessToken:'AAAA'})));


            const email = 'joro@abv.bg';
            const password = '123';

            await page.goto('http://localhost:3000/');
            await page.click('text=Register');


            await page.waitForSelector('form');

            await page.fill('[name="email"]',email);
            await page.fill('[name="password"]',password);
            await page.fill('[name="rePass"]',password);

            const [request] =  await Promise.all([
                page.waitForRequest(request => request.url().includes('/users/register') && request.method() === 'POST'),
                page.click('[type="submit"]')
            ]);

            const postData = JSON.parse(request.postData());
            console.log(postData);
            expect(postData.email).to.equal(email);
            expect(postData.password).to.equal(password);
        });
    });
});

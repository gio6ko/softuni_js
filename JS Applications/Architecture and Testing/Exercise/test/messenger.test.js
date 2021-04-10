const {expect} = require('chai');
const {firefox} = require('playwright-firefox');

let browser, page;

function json(data) {
    return {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    };
}

describe('Messenger tests...', () => {
    before(async () => {
        browser = await firefox.launch();
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

    it("should load all the messages", async () => {
        await page.goto('localhost:3000');
        await page.click('text=Refresh');
        const messages = await page.$eval('#messages', m => m.value);
        expect(messages).to.not.equal('');
    });

    it('should send to the server', async () => {
        await page.goto('localhost:3000');

        const author = await page.fill('#author', 'Example Author');
        const content = await page.fill('#content', 'Example Content');
        const postContent = { author: 'Example Author', content: 'Example Content' };

        await page.route('**/jsonstore/messenger', request => request.fulfill(json(postContent)));

        const [request] = await Promise.all([
            page.waitForRequest(request => request.url().includes('/jsonstore/messenger') && request.method() === 'POST'),
            page.click('#submit')
        ]);

        expect(request.postData()).to.equal(JSON.stringify(postContent));
    });
})
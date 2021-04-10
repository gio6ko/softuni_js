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

describe('Book tests...', () => {
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

    it('load all books ', async function () {
        await page.goto('http://localhost:3000/');
        await page.click('#loadBooks');
        await page.waitForSelector('tbody tr');

        const rows = await page.$$eval('tbody tr', (books)=>books.map(tr=>tr.getAttribute('data-id')));
        console.log(rows);
        expect(rows.length).to.equal(2);
    });

    it.only('add book ', async function () {

        const title = 'Star Wars';
        const author = 'George Lucas';

        //const postContent = {title,author};
        await page.goto('http://localhost:3000/');
        await page.fill('[name=title]','Star Wars');
       // await page.fill('[name=author]','George Lucas');

        //await page.route('**/jsonstore/collections/books', request => request.fulfill(json(postContent)));

        const [request] = await Promise.all([
            page.waitForRequest(request => request.url().includes('/jsonstore/collections/books') && request.method() === 'POST'),
            page.click('text=submit')
        ]);


        const postData = JSON.parse(request.postData());
        console.log(postData);
        expect(postData.title).to.equal(title);
        expect(postData.author).to.equal(author);
    });


    it('edit book', async () => {
        await page.goto('http://localhost:3000/');
        //LOAD ALL BOOKS AND CLICK ON THE FIRST EDIT BUTTON
        await page.click('text=load all books');
        await page.click('text=edit');
        //CHANGE TITLE AND AUTHOR
        await page.fill('#editForm >> css=[name="title"]', "TestTitle");
        await page.fill('#editForm >> css=[name="author"]', "TestAuthor");
        //SAVE AND LOAD ALL BOOKS AGAIN
        await page.click('text=save');
        await page.click('text=load all books');
        //GET TABLE CONTENT
        let tableContent =  await page.$$eval('td',  t => t.map(s => s.textContent));
        //CHECK IF THE FIRST ROW IS CHANGED
        expect(tableContent[0]).to.equal("TestTitle");
        expect(tableContent[1]).to.equal("TestAuthor");
    });


    it('delete book', async () => {
        await page.goto('http://localhost:3000/');
        //LOAD ALL BOOKS AND CLICK ON THE FIRST DELETE BUTTON
        const [loadResponse] = await Promise.all([
            page.waitForResponse('http://localhost:3030/jsonstore/collections/books'),
            page.click('text=load all books'),
        ]);
        //GET THE FIRST BOOK ID
        let books = await loadResponse.json();
        let ids = [];
        Object.entries(books).map(getId);
        function getId([id, book]){
            ids.push(id);
        }
        // ACCEPT ANY FUTURE DIALOG MESSAGES
        page.on('dialog', async dialog => {
            dialog.accept();
        });
        // DELETE THE FIRST BOOK
        const [deleteResponse] = await Promise.all([
            page.waitForResponse('http://localhost:3030/jsonstore/collections/books/'+ ids[0]),
            page.click('text=delete')
        ]);
        // GET THE STATUS OF THE DELETE REQUEST
        let status = deleteResponse.status();
        // EXPECT THE STATUS TO BE 200
        expect(status).to.equal(200);
    });

});
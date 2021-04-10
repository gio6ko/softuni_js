async function request(url, options) {
    const response = await fetch(url, options);
    if (response.ok !== true) {
        const error = await response.json();
        alert(error.message);
        throw new Error(error.message);
    }
    const data = await response.json();
    return data;
}


async function getAllBooks() {
    const books = await request('http://localhost:3030/jsonstore/collections/books');
    document.querySelector('tbody').innerHTML = '';
    Object.entries(books).forEach(createRow);
}

function createRow([id, book]) {
    const result = e('tr', {id: id},
        e('td', {}, book.title),
        e('td', {}, book.author),
        e('td', {},
            e('button', {className: 'editBtn'}, 'Edit'),
            e('button', {className: 'deleteBtn'}, 'Delete')
        ));


    document.querySelector('tbody').appendChild(result);
}

async function createBook(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const book = {
        author: formData.get('author'),
        title: formData.get('title')
    };
    await request('http://localhost:3030/jsonstore/collections/books', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(book)
    });

    await getAllBooks();

    event.target.reset();
}


async function updateBook(event,id) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const updatedBook = {
        title: formData.get('title'),
        author: formData.get('author')
    }
    await request('http://localhost:3030/jsonstore/collections/books/' + id,
        {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updatedBook)
        });
    await getAllBooks();

    event.target.reset();
}

async function deleteBook(id) {
    const result = await request('http://localhost:3030/jsonstore/collections/books/' + id,
        {
            method: 'delete'
        });

    return result;
}


function start() {
    document.getElementById('loadBooks').addEventListener('click', getAllBooks);
    document.getElementById('createForm').addEventListener('submit', createBook);
    document.querySelector('table').addEventListener('click', handleTableClick);

}

async function handleTableClick(event) {
    if (event.target.className === 'editBtn') {
        document.getElementById('createForm').style.display = 'none';
        document.getElementById('editForm').style.display = 'block';

        const bookId = event.target.parentNode.parentNode.id;
        await loadBookForEditing(bookId);
        document.getElementById('editForm').addEventListener('submit',(event)=>{
            updateBook(event,bookId);
        });

    } else if (event.target.className === 'deleteBtn') {
        const bookId = event.target.parentNode.parentNode.id;
        await deleteBook(bookId);
        event.target.parentNode.parentNode.remove();



    }
}

async function loadBookForEditing(bookId) {
    const book = await request('http://localhost:3030/jsonstore/collections/books/' + bookId);
    document.querySelector('#editForm [name="title"]').value = book.title;

    document.querySelector('#editForm [name="author"]').value = book.author;

}

function e(type, attributes, ...content) {
    const result = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
        if (attr.substring(0, 2) == 'on') {
            result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
        } else {
            result[attr] = value;
        }
    }

    content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

    content.forEach(e => {
        if (typeof e == 'string' || typeof e == 'number') {
            const node = document.createTextNode(e);
            result.appendChild(node);
        } else {
            result.appendChild(e);
        }
    });

    return result;
}

start();
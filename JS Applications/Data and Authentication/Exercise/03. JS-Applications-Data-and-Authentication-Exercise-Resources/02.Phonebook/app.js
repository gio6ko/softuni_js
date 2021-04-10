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


async function getAllEntries() {
    const phoneEntries = await request('http://localhost:3030/jsonstore/phonebook');
    document.getElementById('phonebook').innerHTML = '';
    Object.entries(phoneEntries).forEach(createRow)

}

function createRow([id,phoneEntry]) {
    const liEl = e('li', {},
        `${phoneEntry.person}:${phoneEntry.phone}`);

    const button = e('button', {}, 'Delete');
    button.addEventListener('click', async (event) => {
        await request('http://localhost:3030/jsonstore/phonebook/' + id,{
            method: 'delete'
        });

        event.target.parentNode.remove();
    })

    liEl.appendChild(button);

    document.getElementById('phonebook').appendChild(liEl);
}


async function createEntry() {
    const person = document.getElementById('person').value;
    const phoneNumber = document.getElementById('phone').value;

    document.getElementById('person').value = '';
    document.getElementById('phone').value = '';

    const phoneEntry = {
        person,
        phone: phoneNumber
    };

    await request('http://localhost:3030/jsonstore/phonebook', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(phoneEntry)
    });

    await getAllEntries();
}

function attachEvents() {

    document.getElementById('btnLoad').addEventListener('click', getAllEntries);
    document.getElementById('btnCreate').addEventListener('click', createEntry);
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

attachEvents();
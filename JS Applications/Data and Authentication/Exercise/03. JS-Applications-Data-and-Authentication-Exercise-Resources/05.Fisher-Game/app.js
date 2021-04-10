const catches = document.getElementById('catches');

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

async function getAllData() {
    catches.innerHTML = '';
    const data = await request('http://localhost:3030/data/catches');
    data.forEach(c => {
        const element = e('div', {className: 'catch'},
            e('label', {}, 'Angler'),
            e('input', {type: 'text', className: 'angler', value: `${c.angler}`}),
            e('hr', {}),
            e('label', {}, 'Weight'),
            e('input', {type: 'number', className: 'weight', value: `${c.weight}`}),
            e('hr', {}),
            e('label', {}, 'Species'),
            e('input', {type: 'text', className: 'species', value: `${c.species}`}),
            e('hr', {}),
            e('label', {}, 'Location'),
            e('input', {type: 'text', className: 'location', value: `${c.location}`}),
            e('hr', {}),
            e('label', {}, 'Bait'),
            e('input', {type: 'text', className: 'bait', value: `${c.bait}`}),
            e('hr', {}),
            e('label', {}, 'Capture Time'),
            e('input', {type: 'text', className: 'captureTime', value: `${c.captureTime}`}),
            e('hr', {}),
            e('button', {disabled: true, className: 'update'}, 'Update'),
            e('button', {disabled: true, className: 'delete'}, 'Delete')
        );

        catches.appendChild(element);
    })

}


function attachEvents() {

    document.querySelector('.load').addEventListener('click',getAllData);
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


async function lockedProfile() {
    document.getElementById('main').innerHTML = '';
    const data = await getProfiles();
    loadProfiles(data);
    let main = document.querySelector('main');
    main.addEventListener('click', onClick);
}


function onClick(event) {
    if (event.target.tagName === 'BUTTON') {
        const profile = event.target.parentNode;
        const isLocked = profile.querySelector('input[type=radio]:checked').value === 'lock';

        if (isLocked) {
            return;
        } else {


            let div = event.target.parentNode.querySelector('div');
            let isVisible = div.style.display === 'block';
            div.style.display = isVisible ? 'none' : 'block';
            console.log(isVisible);
            event.target.textContent = isVisible ? 'Show more' : 'Hide it';
        }
    }
}

function loadProfiles(data) {
    const main = document.querySelector('main');

    let i = 1;

    Object.values(data).forEach(el => {
        const profile = e('div', {className: 'profile'},

            e('img', {className: 'userIcon', src: 'iconProfile2.png'}),
            e('label', {}, 'Lock'),
            e('input', {type: 'radio', name: `user${i}Locked`, value: 'lock', checked: true}),
            e('label', {}, 'Unlock'),
            e('input', {type: 'radio', name: `user${i}Locked`, value: 'unlock'}),
            e('br', {}),
            e('hr', {}),
            e('label', {}, 'Username'),
            e('input', {type: 'text', name: `user${i}Username`, value: el.username, readOnly: true, disabled: true}),
            e('div', {id: `user${i}HiddenFields`},
                e('hr', {}),
                e('label', {}, 'Email:'),
                e('input', {type: 'email', name: `user${i}Email`, value: el.email, readOnly: true, disabled: true}),
                e('label', {}, 'Age:'),
                e('input', {type: 'email', name: `user${i++}Age`, value: el.age, readOnly: true, disabled: true})
            ),
            e('button', {}, 'Show more')
        )

        main.appendChild(profile);
    })
}

async function getProfiles() {
    const url = 'http://localhost:3030/jsonstore/advanced/profiles';

    const response = await fetch(url);
    const data = await response.json();

    return data;
}


function e(type, attributes, ...content) {
    const result = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
        if (attr.substring(0, 2) === 'on') {
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
import {render} from './node_modules/lit-html/lit-html.js';
import {contacts} from './contacts.js';
import cardTemplates from './card.js'


const container = document.getElementById('contacts');
container.addEventListener('click',onClick);
const result = contacts.map(cardTemplates);


function onClick(even) {
    if (even.target.classList.contains('detailsBtn')) {
        const element = even.target.parentNode;
        const details = element.querySelector('.details');
        details.style.display = details.style.display === 'block' ? 'none' : 'block';
    }
}

render(result, container);

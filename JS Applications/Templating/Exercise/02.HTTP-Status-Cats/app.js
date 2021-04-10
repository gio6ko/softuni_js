import {cats} from './catSeeder.js';
import {html, render} from '../node_modules/lit-html/lit-html.js';
import {styleMap} from '../node_modules/lit-html/directives/style-map.js';

const catCard = (cat) =>
    html`
        <li>
            <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
            <div class="info">
                <button class="showBtn">${cat.info ? 'Hide' : 'Show'} status code</button>
                <div class="status" style=${styleMap(cat.info ? {} : {display: 'none'})} id=${cat.id}>
                    <h4>Status Code: ${cat.statusCode}</h4>
                    <p>${cat.statusMessage}</p>
                </div>
            </div>
        </li>
    `;

const allCats = document.getElementById('allCats');
cats.forEach(c => c.info = false);
update();


function onClick(event) {
    if (event.target.classList.contains('showBtn')) {
        const elementId = event.target.parentNode.querySelector('.status').id;

        const cat = cats.find(c => c.id === elementId);
        cat.info = !cat.info;
        update();

        // const div = event.target.parentNode.querySelector('.status');
        // div.style.display = div.style.display === 'none' ? 'block' : 'none';


        // if(div.style.display === 'none'){
        //     div.removeAttribute('style');
        // }else {
        //     div.style.display = 'none';
        // }
    }
}

function update() {
    const catsList = html`
        <ul @click=${onClick}>${cats.map(catCard)}</ul>`;
    render(catsList, allCats);
}

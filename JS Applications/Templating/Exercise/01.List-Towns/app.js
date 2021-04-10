import {html, render} from '../node_modules/lit-html/lit-html.js';

const listTemplate = (data) => html`
    <ul>
        ${data.map(t => html`
            <li> ${t}</li>`)}
    </ul>`;


document.getElementById('btnLoadTowns').addEventListener('click', onClick);


function onClick(event) {
    event.preventDefault();
    const root = document.getElementById('root');
    const towns = document.getElementById('towns').value.split(',').map(t => t.trim());


    render(listTemplate(towns), root);

}

import {html, render} from '../node_modules/lit-html/lit-html.js';

async function initialize() {
    const data =  Object.values(await (await fetch('http://localhost:3030/jsonstore/advanced/dropdown')).json());
    update(data);
}

initialize();
const selectTemplate = (list) => html`
    <select id="menu">
        ${list.map(x => html`<option value="${x._id}">${x.text}</option>`)}
    </select>
`;

function update(list) {
    render(selectTemplate(list), document.querySelector('div'));
}


function addItem() {
    console.log('TODO:...');
}
import {html} from '../../node_modules/lit-html/lit-html.js';
import {getFurniture} from '../api/data.js';
import {furnitureTemplate} from "./common/furnitureTemplate.js";

const dashboardTemplate = (data, search, onSearch) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Welcome to Furniture System</h1>
            <p>Select furniture from the catalog to view details.</p>
            <input id="searchInput" name="search" type="text" .value=${search}>
            <button @click=${onSearch}>Search</button>
        </div>
    </div>
    <div class="row space-top">
        ${data.map(furnitureTemplate)}
    </div>`;


export async function dashboardPage(context) {
    const searchParam = context.querystring.split('=')[1];

    const data = await getFurniture(searchParam);
    context.render(dashboardTemplate(data, searchParam, onSearch));


    function onSearch(event) {
        const search = encodeURIComponent(document.getElementById('searchInput').value);

        context.page.redirect(`/?search=${search}`);
    }
}
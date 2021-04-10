import {html} from '../../node_modules/lit-html/lit-html.js';
import {getArticles} from "../api/data.js";


const topicTemplate = (topic) => html`
    <a class="article-preview" href="/details/${topic._id}">
        <article>
            <h3>Topic: <span>${topic.title}</span></h3>
            <p>Category: <span>${topic.category}</span></p>
        </article>
    </a>`;

const catalogTemplate = (topics) => html`
    <section id="catalog-page" class="content catalogue">
        <h1>All Articles</h1>
        ${topics.length !== 0 ? topics.map(topicTemplate) : html`<h3 class="no-articles">No articles yet</h3>`}
    </section>`;


export async function catalogPage(context) {
    const topics = await getArticles();

    context.render(catalogTemplate(topics));
}
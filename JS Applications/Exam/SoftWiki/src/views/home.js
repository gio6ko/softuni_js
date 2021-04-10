import {html} from '../../node_modules/lit-html/lit-html.js';


import {getRecentArticles} from "../api/data.js";

const articleTemplate = (article) => html`
    ${article ? html`
            <article>
                <h3>${article.title}</h3>
                <p>${article.content}</p>
                <a href="/details/${article._id}" class="btn details-btn">Details</a>
            </article>` : html`<h3 class="no-articles">No articles yet</h3>`}
`;

const homeTemplate = (articles) => html`
    <section id="home-page" class="content">
        <h1>Recent Articles</h1>
        <section class="recent js">
            <h2>JavaScript</h2>
            ${articleTemplate(articles.filter(obj => obj.category === 'JavaScript')[0])}
        </section>
        <section class="recent csharp">
            <h2>C#</h2>
            ${articleTemplate(articles.filter(obj => obj.category === 'C#')[0])}
        </section>
        <section class="recent java">
            <h2>Java</h2>
            ${articleTemplate(articles.filter(obj => obj.category === 'Java')[0])}
        </section>
        <section class="recent python">
            <h2>Python</h2>
            ${articleTemplate(articles.filter(obj => obj.category === 'Python')[0])}
        </section>
    </section>`;


export async function homePage(context) {
    let articles = await getRecentArticles();
    context.render(homeTemplate(articles));
}
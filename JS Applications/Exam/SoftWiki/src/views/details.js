import {html} from '../../node_modules/lit-html/lit-html.js';

import {getArticleById, deleteArticle} from "../api/data.js";


const detailsTemplate = (article, isOwner, onDelete) => html`
    <section id="details-page" class="content details">
        <h1>${article.title}</h1>

        <div class="details-content">
            <strong>Published in category ${article.category}</strong>
            <p>${article.content}</p>
            ${isOwner ? html`
                <div class="buttons">
                    <a @click=${onDelete} href="javascript:void(0)" class="btn delete">Delete</a>
                    <a href="/edit/${article._id}" class="btn edit">Edit</a>
                    <a href="/" class="btn edit">Back</a>
                </div>` : html`<a href="/" class="btn edit">Back</a>`}
        </div>
    </section>`;

export async function detailsPage(context) {
    const userId = sessionStorage.getItem('userId');
    const id = context.params.id;
    const article = await getArticleById(id);
    const isOwner = userId === article._ownerId;

    context.render(detailsTemplate(article, isOwner, onDelete));

    async function onDelete(){
        const confirmed = confirm('Are you sure you want to delete this car?');

        if(confirmed){
            await deleteArticle(id);

            context.page.redirect('/');
        }

    }

}
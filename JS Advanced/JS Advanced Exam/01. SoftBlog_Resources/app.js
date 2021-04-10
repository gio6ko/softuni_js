function solve() {

    let createButton = document.querySelector('.btn');
    let creator = document.getElementById('creator');
    let title = document.getElementById('title');
    let category = document.getElementById('category');
    let content = document.getElementById('content');
    createButton.addEventListener('click', createPost);


    function createPost(ev) {

        ev.preventDefault();

        let section = document.querySelector('.site-content>main>section');

        let article = document.createElement('article');
        let h1 = e('h1', title.value);
        title.value = '';
        article.appendChild(h1);
        let pCategory = e('p', 'Category: ');
        let strongCategory = e('strong', category.value);
        category.value = '';
        pCategory.appendChild(strongCategory);
        let pCreator = e('p', 'Creator: ');
        let strongCreator = e('strong', creator.value);
        creator.value = '';
        pCreator.appendChild(strongCreator);
        let pContent = e('p', content.value);
        content.value = '';

        article.appendChild(pCategory);
        article.appendChild(pCreator);
        article.appendChild(pContent);

        let div = e('div', undefined, 'buttons');
        let deleteButton = e('button', 'Delete', 'btn delete');

        deleteButton.addEventListener('click', deleteArticle);
        let archiveButton = e('button', 'Archive', 'btn archive');
        archiveButton.addEventListener('click', archiveArticle);


        div.appendChild(deleteButton);
        div.appendChild(archiveButton);

        article.appendChild(div);

        section.appendChild(article);
    }


    function deleteArticle(ev) {
        let article = ev.target.parentElement.parentElement;

        article.remove();
    }

    function archiveArticle(ev) {

        let archiveTable = document.querySelector('.archive-section>ol');
        let li = e('li', ev.target.parentElement.parentElement.querySelector('h1').textContent);
        console.log(archiveTable, li);

        archiveTable.appendChild(li);

        Array.from(archiveTable.children)
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(ar => archiveTable.appendChild(ar));
        ev.target.parentElement.parentElement.remove();
    }

    function e(type, content, className) {
        const result = document.createElement(type);

        result.textContent = content;

        if (className) {
            result.className = className;
        }

        return result;
    }
}

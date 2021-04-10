async function solution() {
    const [articles, content]  = await Promise.all([
        loadArticles(),
        loadContent()
    ]);

    createArticles(articles,content);

    let main = document.getElementById('main');
    main.addEventListener('click', toggle);



}

function createArticles(articles,content){


    const main = document.getElementById('main');
    let divExtra = document.querySelector('.extra');

    divExtra.firstChild.textContent = content[articles[0]._id].content;
    articles.splice(0,1);
    articles.forEach(el=>{
        const accordion = e('div',{className: 'accordion'},
            e('div',{className: 'head'},

                e('span',{},el.title),
                e('button',{id:el._id,className:'button'},'More')
                ),
            e('div',{className: 'extra'},
                e('p',{},content[el._id].content)
                )
            );

        main.appendChild(accordion);
    })

}


function toggle(event) {

    if (event.target.tagName === 'BUTTON') {

        let divExtra = event.target.parentNode.parentNode.querySelector('.extra');
        divExtra.style.display = divExtra.style.display !== 'block' ? 'block' : 'none';
        event.target.textContent = event.target.textContent === 'Less' ? 'More' : 'Less'
    }

}


async function loadArticles(){

    const url = 'http://localhost:3030/jsonstore/advanced/articles/list';
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

async function loadContent(){
    const url = 'http://localhost:3030/jsonstore/advanced/articles/details/';
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
solution();
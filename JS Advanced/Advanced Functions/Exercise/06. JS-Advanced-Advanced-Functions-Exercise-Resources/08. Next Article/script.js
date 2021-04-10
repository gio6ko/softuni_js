function getArticleGenerator(articles) {
    let content = document.querySelector('body #content');
    return e;
    function e() {
        if(!articles.length){
            return;
        }
        let article = document.createElement('article');
        article.textContent = articles.shift();
        content.appendChild(article);
       
    }

}

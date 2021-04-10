function attachEvents() {
    document.getElementById('btnLoadPosts').addEventListener('click', getPosts);
    document.getElementById('btnViewPost').addEventListener('click', displayPost);
}

attachEvents();

async function getPosts() {
    const url = 'http://localhost:3030/jsonstore/blog/posts';

    const response = await fetch(url);
    const data = await response.json();

    const select = document.getElementById('posts');
    select.innerHTML = '';
    Object.values(data).map(createOption).forEach(o => select.appendChild(o));
}


function createOption(post) {

    const option = document.createElement('option');
    option.value = post.id;
    option.textContent = post.title;

    return option;
}

function displayPost() {
    const post = document.getElementById('posts');
    const id = post.value;
    getComments(id);

}

async function getComments(postId) {

    const postResponse = await fetch('http://localhost:3030/jsonstore/blog/posts/' + postId);
    const postData = await postResponse.json();

    const h1 = document.getElementById('post-title');
    const ul = document.getElementById('post-body');
    h1.textContent = postData.title;
    ul.textContent = postData.body;

    const url = 'http://localhost:3030/jsonstore/blog/comments';
    const commentsResponse = await fetch(url);
    const commentsData = await commentsResponse.json();

    const comments = Object.values(commentsData).filter(c => c.postId == postId);


    const commentUl = document.getElementById('post-comments');
    commentUl.innerHTML = '';
    comments.forEach(c=>{
        const li = document.createElement('li');
        li.textContent = c.text;
        commentUl.appendChild(li);
    })





}
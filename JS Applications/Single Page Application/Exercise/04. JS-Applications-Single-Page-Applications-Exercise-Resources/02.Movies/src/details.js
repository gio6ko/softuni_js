import {e} from "./dom.js";
import {showHome} from "./home.js";

async function getLikesByMovieId(id) {
    const response = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count `)
    const data = await response.json();

    return data;
}


async function getOwnLikesByMovieId(id) {
    const userId = sessionStorage.getItem('userId');
    const response = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22%20and%20_ownerId%3D%22${userId}%22`)
    const data = await response.json();

    return data;

}

async function getMovieById(id) {
    const response = await fetch('http://localhost:3030/data/movies/' + id);
    const data = await response.json();


    return data;
}

function createMovieCard(movie, likes, ownLike) {
    const controls = e('div', {className: 'col-md-4 text-center'},
        e('h3', {className: 'my-3'}, 'Movie Description'),
        e('p', {}, movie.description)
    );
    const userId = sessionStorage.getItem('userId');
    if (userId != null) {
        if (userId === movie._ownerId) {
            controls.appendChild(e('a', {
                className: 'btn btn-danger',
                href: '#',
                onclick: (event) => onDelete(event, movie._id)
            }, 'Delete'));
            controls.appendChild(e('a', {className: 'btn btn-warning', href: '#'}, 'Edit'));
        } else if (ownLike.length === 0) {
            controls.appendChild(e('a', {className: 'btn btn-primary', href: '#', onclick: likeMovie}, 'Like'));
        }
    }

    const likeSpan = e('a', {className: 'enrolled-span'}, likes + ' like' + (likes === 1 ? '' : 's'));
    controls.appendChild(likeSpan);


    const element = document.createElement('div');
    element.className = 'container';
    element.appendChild(e('div', {className: 'row bg-light text-dark'},
        e('h1', {}, movie.title),
        e('div', {className: 'col-md-8'},
            e('img', {className: 'img-thumbnail', src: movie.img, alt: 'Movie'})),
        controls
        )
    )

    return element;


    async function likeMovie(event) {

        const response = await fetch('http://localhost:3030/data/likes', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': sessionStorage.getItem('authToken')
            },
            body: JSON.stringify({movieId: movie._id})
        });

        if (response.ok) {
            event.target.remove();
            likes++;

            likeSpan.textContent = likes + ' like' + (likes === 1 ? '' : 's');
        }

    }
}

async function onDelete(event, id) {
    event.preventDefault();

    const confirmed = confirm('Are you sure you want to delete this film?');
    if (confirmed) {
        const response = await fetch('http://localhost:3030/data/movies/' + id, {
            method: 'delete',
            headers: {'X-Authorization': sessionStorage.getItem('authToken')}
        });

        if (response.ok) {
            alert("Movie is deleted");
            await showHome();
        }

    }
}

let main;
let section;


export function setupDetails(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;
}

export async function showDetails(id) {

    section.innerHTML = '';
    main.innerHTML = '';
    main.appendChild(section);

    const [movie, likes, ownLike] = await Promise.all([
        getMovieById(id),
        getLikesByMovieId(id),
        getOwnLikesByMovieId(id)
    ]);
    const card = createMovieCard(movie, likes, ownLike);

    section.appendChild(card);
}
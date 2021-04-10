import {showDetails} from "./details.js";

async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const title = formData.get('title');
    const description = formData.get('description');
    const imgUrl = formData.get('imageUrl');

    if (title === '' || description === '' || imgUrl === '') {
        return alert('All fields are required!');
    }

    const movie = {
        title,
        description,
        img: imgUrl
    };

    const response = await fetch('http://localhost:3030/data/movies', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': sessionStorage.getItem('authToken')
        },
        body: JSON.stringify(movie)
    });

    if (response.ok) {
        const movie = await response.json();
        await showDetails(movie._id);
    } else {
        const error = await response.json();
        alert(error.message);
    }
}

let main;
let section;

export function setupCreate(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;

    const form = section.querySelector('form');
    form.addEventListener('submit', onSubmit);
}

export async function showCreate() {

    main.innerHTML = '';
    main.appendChild(section);
}
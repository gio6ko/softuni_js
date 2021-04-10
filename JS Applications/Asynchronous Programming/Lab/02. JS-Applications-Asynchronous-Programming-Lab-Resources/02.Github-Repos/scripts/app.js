function loadRepos() {
    const username = document.getElementById('username');
    const url = `https://api.github.com/users/${username.value}/repos`;


    fetch(url).then(handleResponse);


    function handleResponse(response) {
        const dataPromise = response.json();
        dataPromise.then(handleData);

    }

    function handleData(data) {
        const ulElement = document.getElementById('repos');
        ulElement.innerHTML = '';
        data.forEach(e => {
            const liElement = document.createElement('li');
            liElement.textContent = e.full_name;
            ulElement.appendChild(liElement);
        })
    }
}
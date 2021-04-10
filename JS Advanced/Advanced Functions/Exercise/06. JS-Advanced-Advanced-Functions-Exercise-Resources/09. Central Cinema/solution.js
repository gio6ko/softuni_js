function solve() {
    const inputs = Array.from(document.querySelectorAll('#container input'));
    const onScreenButton = document.querySelector('#container button');
    const movieTable = document.querySelector('#movies ul');
    const archiveTable = document.querySelector('#archive ul');
    const clearButton = document.querySelector('#archive button');
    onScreenButton.addEventListener('click', createMovie);
    clearButton.addEventListener('click', deleteArchive);


    function deleteArchive(e){
        e.target.parentNode.children[1].innerHTML = "";
    }

    function createMovie(e) {
        e.preventDefault();
        const name = inputs[0].value;
        const hall = inputs[1].value;
        const price = Number(inputs[2].value);

        if (!name || !hall || !price) {
            return;
        }

        inputs[0].value = '';
        inputs[1].value = '';
        inputs[2].value = '';

        let newMovie = createElement('li');

        let spanEl = createElement('span');
        spanEl.textContent = name;
        let strong = createElement('strong');
        strong.textContent = `Hall: ${hall}`;
        let divEl = createElement('div');
        let divStrong = createElement('strong');
        divStrong.textContent = price.toFixed(2);
        let divInput = createElement('input');
        divInput.setAttribute('placeholder', 'Tickets Sold');
        let divButton = createElement('button');
        divButton.textContent = 'Archive';
        divEl.appendChild(divStrong);

        divEl.appendChild(divInput);
        divEl.appendChild(divButton);
        divButton.addEventListener('click', archive);

        newMovie.appendChild(spanEl);
        newMovie.appendChild(strong);
        newMovie.appendChild(divEl);
        movieTable.appendChild(newMovie);
    }


    function createElement(type) {
        return document.createElement(type);
    }


    function archive(e) {
        let ticketsSold = e.target.parentElement.children[1].value;
        if (!Number(ticketsSold)) {
            return;
        }
        ticketsSold = Number(ticketsSold);
        let price = Number(e.target.parentElement.children[0].textContent);
        let movieName = e.target.parentNode.parentNode.firstChild.textContent;
        const totalPrice = price * Number(e.target.parentNode.children[1].value);
        e.target.parentNode.parentNode.remove();

        let archLi = createElement('li');
        let liSpan = createElement('span');
        liSpan.textContent = movieName;
        let liStrong = createElement('strong');
        liStrong.textContent = `Total amount: ${totalPrice.toFixed(2)}`;
        let liButton = createElement('button');
        liButton.textContent = 'Delete';
        liButton.addEventListener('click',deleteMovie)


        archLi.appendChild(liSpan);
        archLi.appendChild(liStrong);
        archLi.appendChild(liButton);

        archiveTable.appendChild(archLi);

    }


    function deleteMovie(e){
        e.target.parentNode.remove();
    }
}
function solution() {
    const [gifts, sent, discard] = document.querySelectorAll('section ul');
    let addButton = document.querySelector('button');

    addButton.addEventListener('click', onClick);


    function onClick(ev) {

        let input = ev.target.parentNode.querySelector('input');
        let inputValue = input.value;
        input.value = '';
        let liElement = e('li', inputValue, 'gift');
        let sendButton = e('button', 'Send', 'sendButton');
        let discardButton = e('button', 'Discard', 'discardButton');
        liElement.appendChild(sendButton);
        liElement.appendChild(discardButton);
        gifts.appendChild(liElement);
        sendButton.addEventListener('click', () => sendGifts(inputValue, liElement));
        discardButton.addEventListener('click', () => discardedGifts(inputValue, liElement));


        sortGifts();
    }


    function sortGifts() {
        Array.from(gifts.children)
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(g => gifts.appendChild(g));
    }

    function sendGifts(inputValue, liElement) {
        liElement.remove();
        let liEl = e('li', inputValue, 'gift')
        sent.appendChild(liEl);
    }

    function discardedGifts(inputValue, liElement) {
        liElement.remove();
        let liEl = e('li', inputValue, 'gift')
        discard.appendChild(liEl);
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



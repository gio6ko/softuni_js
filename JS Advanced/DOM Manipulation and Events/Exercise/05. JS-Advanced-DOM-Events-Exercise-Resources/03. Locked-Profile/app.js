function lockedProfile() {
    document.getElementById('main').addEventListener('click', onClick);


    function onClick(event) {

        if (event.target.tagName === 'BUTTON') {
            const isLocked = event.target.parentNode.querySelector('input[type=radio]:checked').value === 'lock';
            if (isLocked) {
                return;
            } else {
                let div = event.target.parentNode.querySelector('div');
                let isVisible = div.style.display === 'block';
                div.style.display = isVisible ? 'none' : 'block';
                console.log(isVisible);
                event.target.textContent = isVisible ? 'Show more' : 'Hide it';
            }
        }
    }
}
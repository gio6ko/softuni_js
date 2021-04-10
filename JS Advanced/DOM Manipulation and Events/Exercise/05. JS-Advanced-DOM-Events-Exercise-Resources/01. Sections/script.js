function create(words) {
    const content = document.getElementById('content');
    words.forEach(w => {
        const divElement = document.createElement('div');
        const pElement = document.createElement('p');
        pElement.textContent = w;
        pElement.style.display = 'none';
        divElement.appendChild(pElement);
        content.appendChild(divElement);
        divElement.addEventListener("click", onClick);
    })


    function onClick(event) {
        let targetObj = event.target;
        console.log(targetObj);
        if (targetObj.tagName === 'DIV' || targetObj.tagName === 'P') {
            const p = targetObj.children[0] || targetObj;
            console.log(p);
            p.style.display = p.style.display === 'none' ? '' : 'none';
        }
    }
}
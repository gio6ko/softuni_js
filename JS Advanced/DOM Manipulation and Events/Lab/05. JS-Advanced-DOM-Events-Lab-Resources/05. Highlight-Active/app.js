function focus() {
    Array.from(document.querySelectorAll('input')).forEach(i =>{
        i.addEventListener('focus',onFocus);
        i.addEventListener('blur',onBlur);
    })




    function onFocus(event){
        event.target.parentNode.className = 'focus';
    }


    function onBlur(event){
        event.target.parentNode.className = '';
    }
}
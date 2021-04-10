function addItem() {
    let input = document.getElementById('newItemText');
    const liElement = createElement('li',input.value)


    const deleteButton = createElement('a','[Delete]');
    deleteButton.href = '#';
    deleteButton.addEventListener('click',(ev)=>{
        ev.target.parentNode.remove();
    })

    liElement.appendChild(deleteButton);

    let table = document.getElementById('items');
    table.appendChild(liElement);

    input.value = '';




    function createElement(type,content){
        const element = document.createElement(type);
        element.textContent = content;
        return element;
    }
}
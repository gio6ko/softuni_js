function addItem() {
    let input = document.getElementById('newItemText');
    const liElement = document.createElement('li');
    liElement.textContent = input.value;

    let table = document.getElementById('items');

    table.appendChild(liElement);
    input.value = '';

}
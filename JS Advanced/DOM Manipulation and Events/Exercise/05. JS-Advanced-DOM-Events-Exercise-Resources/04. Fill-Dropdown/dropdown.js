function addItem() {

    let newItemText = document.querySelector('#newItemText');
    let newItemValue = document.querySelector('#newItemValue');

    console.log(newItemText,newItemValue);

    let option = document.createElement('option');
    option.value = newItemValue.value;
    option.textContent = newItemText.value;

    document.getElementById('menu').appendChild(option);

    newItemText.value = '';
    newItemValue.value = '';

}
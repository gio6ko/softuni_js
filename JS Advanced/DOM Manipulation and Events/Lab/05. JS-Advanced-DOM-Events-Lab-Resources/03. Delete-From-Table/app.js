function deleteByEmail() {
    const email = document.querySelector('input[name = "email"]');
    let table = document.querySelectorAll('tbody>tr');
    for (let tableElement of table) {
        if(tableElement.children[1].textContent === email.value){
            tableElement.parentNode.removeChild(tableElement);
            document.getElementById('result').textContent = 'Deleted.';
            email.value = '';
        }
    }

    if(email.value !== ''){
        document.getElementById('result').textContent = 'Not found.';
        email.value = '';
    }
}
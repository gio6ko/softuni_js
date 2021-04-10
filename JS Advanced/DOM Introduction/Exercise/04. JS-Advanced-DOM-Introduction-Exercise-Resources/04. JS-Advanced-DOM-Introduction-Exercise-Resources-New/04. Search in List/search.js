function search() {
    let listItems = document.querySelectorAll('#towns li');


    let matches = 0;

    let input = document.querySelector('input').value;

    let result = document.getElementById('result');
    for (const li of listItems) {
        if (li.textContent.toLowerCase().includes(input.toLowerCase()) && input !== '') {
            li.style.fontWeight = 'bold';
            li.style.textDecoration = 'underline';
            matches++;
        } else {
            li.style.fontWeight = '';
            li.style.textDecoration = '';
        }
    }

    result.textContent = `${matches} matches found`;
}

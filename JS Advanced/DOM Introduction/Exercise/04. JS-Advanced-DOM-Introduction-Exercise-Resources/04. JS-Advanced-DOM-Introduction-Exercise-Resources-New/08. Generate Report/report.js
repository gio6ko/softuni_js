function generateReport() {

    let tableContent = document.querySelectorAll('tbody>tr');
    let headers = Array.from(document.querySelectorAll('thead>tr>th'));

    let checkedHeadersIndex = [];

    for (let header of headers) {
        if (header.querySelector('input').checked) {
            checkedHeadersIndex.push(headers.indexOf(header));
        }
    }

    let output = [];


    for (let i = 0; i < tableContent.length; i++) {
        let obj = {};
        let tableRows = Array.from(tableContent[i].children);
        for (let j = 0; j < checkedHeadersIndex.length; j++) {
            obj[headers[checkedHeadersIndex[j]].textContent.toLowerCase().trim()] = tableRows[checkedHeadersIndex[j]].textContent;
        }

        output.push(obj);
    }

   document.getElementById('output').textContent = JSON.stringify(output);
}
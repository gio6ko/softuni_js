async function getInfo() {
    let input = document.getElementById('stopId');
    const id = input.value;
    const url = 'http://localhost:3030/jsonstore/bus/businfo/' + id;


    try {
        document.getElementById('buses').innerHTML = '';
        const response = await fetch(url);
        const data = await response.json();

        document.getElementById('stopName').textContent = data.name;


        Object.entries(data['buses']).forEach(entry => {
            const li = document.createElement('li');
            li.textContent = `Bus ${entry[0]} arrives in ${entry[1]} minutes`;

            document.getElementById('buses').appendChild(li);
        })

        input.value = '';
    } catch (error) {
        document.getElementById('stopName').textContent = 'Error';
    }

}
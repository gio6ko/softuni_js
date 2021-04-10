function solve() {

    const departButton = document.getElementById('depart');
    const arriveButton = document.getElementById('arrive');
    const info = document.querySelector('.info');
    let id = 'depot';
    let stop = '';


    async function depart() {
        const url = 'http://localhost:3030/jsonstore/bus/schedule/' + id;

        const response = await fetch(url);
        const data = await response.json();
        stop = data.name;
        info.textContent =`Next stop ${stop}`;
        departButton.disabled = true;
        arriveButton.disabled = false;
        id = data.next;
    }

    function arrive() {


        info.textContent = `Arriving at ${stop}`;
        departButton.disabled = false;
        arriveButton.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();
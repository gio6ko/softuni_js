function attachEvents() {

    document.getElementById('submit').addEventListener('click', getWeather);

}

attachEvents();

async function getWeather() {
    const symbols = {
        Sunny: '&#x2600',
        'Partly sunny': '&#x26C5',
        Overcast: '&#x2601',
        Rain: '&#x2614',
        Degrees: '&#176'
    }

    const main = document.getElementById('forecast');
    try {
        const location = document.getElementById('location');

        const cityName = location.value;
        location.value = '';

        const code = await getCode(cityName);

        const [current, upcoming] = await Promise.all([
            getCurrent(code),
            getUpcoming(code)
        ]);


        const currentDiv = document.getElementById('current');
        const upcomingDiv = document.getElementById('upcoming');

        currentDiv.removeChild(currentDiv.lastChild);
        upcomingDiv.removeChild(upcomingDiv.lastChild);


        let spanSymbol = e('span', {className: 'condition symbol'});
        spanSymbol.innerHTML = symbols[current.forecast.condition];


        const spanDegrees =e('span', {className: 'forecast-data'});
        spanDegrees.innerHTML = `${current.forecast.low}${symbols.Degrees}/${current.forecast.high}${symbols.Degrees}`;
        currentDiv.appendChild(e('div', 'forecasts',
            spanSymbol,
            e('span', {className: 'condition'},
                e('span', {className: 'forecast-data'}, current.name),
                spanDegrees,
                e('span', {className: 'forecast-data'}, current.forecast.condition)
            )));

        spanSymbol = e('span', {className: 'condition symbol'})

        upcomingDiv.appendChild(e('div', {className: 'forecast-info'}));
        upcoming.forecast.map(renderUpcoming).forEach(el => upcomingDiv.querySelector('.forecast-info').appendChild(el));

        main.style.display = 'block';
    } catch (er) {
        alert('WRONG NAME OF CITY');
    }


    function renderUpcoming(forecast) {

        const symbolSpan = e('span', {className: 'symbol'});
        symbolSpan.innerHTML = symbols[forecast.condition];

        const tempSpan = e('span', {className: 'forecast-data'});
        tempSpan.innerHTML = `${forecast.low}${symbols.Degrees}/${forecast.high}${symbols.Degrees}`;
        const result = e('span', {className: 'upcoming'}, symbolSpan,
            tempSpan,
            e('span', {className: 'forecast-data'}, forecast.condition)
        );

        return result;
    }
}


async function getCode(cityName) {
    const url = 'http://localhost:3030/jsonstore/forecaster/locations/';
    const response = await fetch(url);
    const data = await response.json();

    return data.find(x => x.name.toLowerCase() == cityName.toLowerCase()).code;
}


async function getCurrent(code) {
    const url = 'http://localhost:3030/jsonstore/forecaster/today/' + code;
    const response = await fetch(url);
    const data = await response.json();

    return data;

}

async function getUpcoming(code) {
    const url = ' http://localhost:3030/jsonstore/forecaster/upcoming/' + code;
    const response = await fetch(url);
    const data = await response.json();

    return data;

}


function e(type, attributes, ...content) {
    const result = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
        if (attr.substring(0, 2) == 'on') {
            result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
        } else {
            result[attr] = value;
        }
    }

    content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

    content.forEach(e => {
        if (typeof e == 'string' || typeof e == 'number') {
            const node = document.createTextNode(e);
            result.appendChild(node);
        } else {
            result.appendChild(e);
        }
    });

    return result;
}
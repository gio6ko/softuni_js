const monthsValues = {
    'Jan': 1,
    'Feb': 2,
    'Mar': 3,
    'Apr': 4,
    'May': 5,
    'Jun': 6,
    'Jul': 7,
    'Aug': 8,
    'Sep': 9,
    'Oct': 10,
    'Nov': 11,
    'Dec': 12
}


const yearSelect = document.getElementById('years');

const years = [...document.querySelectorAll('.monthCalendar')].reduce((acc, c) => {
    acc[c.id] = c;
    return acc;
}, {});


const months = [...document.querySelectorAll('.daysCalendar')].reduce((acc, c) => {
    acc[c.id] = c;
    return acc;
}, {});

console.log(yearSelect);
console.log(years);
console.log(months);

function displaySection(section) {
    document.body.innerHTML = '';
    document.body.appendChild(section);

}

displaySection(yearSelect);
yearSelect.addEventListener('click', (event) => {
    if (event.target.classList.contains('date') || event.target.classList.contains('day')) {
        event.stopImmediatePropagation();
        const value = event.target.textContent.trim();
        const selectedYear = `year-${value}`;
        displaySection(years[selectedYear]);
    }
});

for (let yearsKey in years) {
    years[yearsKey].addEventListener('click', (event) => {
        if (event.target.classList.contains('date') || event.target.classList.contains('day')) {
            event.stopImmediatePropagation();
            const monthName = event.target.textContent.trim();

            let parent = event.target.parentNode;
            while (parent.tagName !== 'TABLE') {
                parent = parent.parentNode;
            }

            const year = parent.querySelector('caption').textContent.trim();
            const selectedMonth = `month-${year}-${monthsValues[monthName]}`;
            displaySection(months[selectedMonth]);
        }
    });
}


document.body.addEventListener('click', (event) => {

    if (event.target.tagName === 'CAPTION') {
        const sectionId = event.target.parentNode.parentNode.id;
        if (sectionId.includes('year-')) {
            displaySection(yearSelect);
        } else if (sectionId.includes('month')) {
            let newId = `year-${sectionId.substring(6, 10)}`
            displaySection(years[newId]);
        }
    }
});



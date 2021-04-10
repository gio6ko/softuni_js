function solve() {
    const [lecture, date] = document.querySelectorAll('input');
    const module = document.querySelector('select');
    const addButton = document.querySelector('button');
    const modules = document.querySelector('.modules');

    addButton.addEventListener('click', addModules)


    function addModules(ev) {
        ev.preventDefault();
        if (lecture.value !== undefined && lecture.value !== '' &&
            date.value !== undefined && date.value !== '' &&
            module.value !== 'Select module') {
            let trainingName = module.value.toUpperCase() + '-MODULE';
            let lectureValue = lecture.value;
            module.value = module.children[0].value;
            lecture.value = '';
            let dateString = date.value;
            let ul;
            if (!(Array.from(modules.children).some(e => e.textContent == trainingName) == true)) {
                const h3 = e('h3', trainingName);
                modules.appendChild(h3);
                ul = document.createElement('ul');
            } else {
                ul = modules.querySelector('ul');
            }
            const li = document.createElement('li');
            li.className = 'flex';
            const h4 = e('h4', lectureValue + ' - ' + dateString.replaceAll('-', '/').replace('T', ' - '));
            const delButton = e('button', 'Del', 'red');
            li.appendChild(h4);
            li.appendChild(delButton);
            ul.appendChild(li);
            modules.appendChild(ul);

            delButton.addEventListener('click', deleteElement)

        }
    }

    function deleteElement(ev) {
        let ul = ev.target.parentElement.parentElement;
        ev.target.parentElement.remove();

        if (ul.children.length === 0) {
            ul.parentElement.remove();
        }

    }

    function e(type, content, className) {
        const result = document.createElement(type);

        result.textContent = content;

        if (className) {
            result.className = className;
        }

        return result;
    }

}
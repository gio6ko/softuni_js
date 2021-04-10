function attachEventsListeners() {

    let buttons = Array.from(document.querySelectorAll('input')).filter(e => e.type === 'button');
    buttons.forEach(button => button.addEventListener('click', onClick))


    function onClick(event) {
        convert(event);
        console.log(event.target);
    }


    function convert(event) {
        let type = event.target.parentElement.children[1].id;
        let value = +event.target.parentElement.children[1].value;

        let seconds = 0;

        switch (type) {
            case"days":
                seconds = value * 24 * 60 * 60;
                break;
            case"hours":
                seconds = value * 60 * 60;
                break;
            case"minutes":
                seconds = value * 60;
                break;
            case"seconds":
                seconds = value;
                break;
        }

        let minutes = seconds / 60;
        let hours = minutes / 60;
        let days = hours / 24;

        document.getElementById("days").value = days;
        document.getElementById("hours").value = hours;
        document.getElementById("minutes").value = minutes;
        document.getElementById("seconds").value = seconds;
    }
}
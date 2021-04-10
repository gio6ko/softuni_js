function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', onHover);
    const output = document.getElementById('result');


    function onHover(event) {
        const offsetX = event.offsetX;
        const percent = Math.floor((offsetX / event.target.clientWidth) * 100);
        output.textContent = percent + '%';

    }
}
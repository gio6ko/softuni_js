function notify(message) {


    let notification = document.getElementById('notification');

    notification.textContent = message;
    console.log(notification);
    notification.style.display = 'block';


    notification.addEventListener('click', hideOnClick);


    function hideOnClick(e) {
        e.target.style.display = 'none';
    }

}
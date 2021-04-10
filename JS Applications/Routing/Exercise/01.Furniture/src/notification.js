import {html, render} from "../node_modules/lit-html/lit-html.js";

const notificationTemplate = (message) => html`
    <section id="notification" @click=${clear}>
        ${message}
        <span style="margin-left: 32px">\u2716</span>
    </section>`;
let container = document.getElementById('notification-holder');

export function notify(message) {
    render(notificationTemplate(message),container);
    setTimeout(clear,3000);
}

export function clear(){
    render('',container);
}
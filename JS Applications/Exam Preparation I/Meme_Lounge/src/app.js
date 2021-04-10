import {render} from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';

import {logout as apiLogout} from "./api/data.js";
import {homePage} from "./views/home.js";
import {loginPage} from "./views/login.js";
import {registrationPage} from "./views/registration.js";
import {catalogPage} from "./views/catalog.js";
import {createPage} from "./views/create.js";
import {detailsPage} from "./views/details.js";
import {editPage} from "./views/edit.js";
import {profilePage} from "./views/profile.js";



const main = document.querySelector('main');
document.getElementById('logoutBtn').addEventListener('click', logout);
setUserNav();
page('/', decorateContext, guestUsersOnly, homePage);
page('/login', decorateContext, loginPage);
page('/register', decorateContext, registrationPage);
page('/catalog', decorateContext, catalogPage);
page('/create', decorateContext, createPage);
 page('/details/:id', decorateContext, detailsPage);
 page('/edit/:id', decorateContext, editPage);
 page('/profile', decorateContext, profilePage);

page.start();


function guestUsersOnly(context, next) {
    const token = sessionStorage.getItem('authToken');

    if (token !== null) {
        return context.page.redirect('/catalog');
    }
    next();
}

function decorateContext(context, next) {
    context.render = (content) => render(content, main);
    context.setUserNav = setUserNav;

    next();
}

function setUserNav() {
    const email = sessionStorage.getItem('email');

    if (email !== null) {
        document.querySelector('div.profile > span').textContent = `Welcome, ${email}`;
        document.querySelector('.user').style.display = '';
        document.querySelector('.guest').style.display = 'none';
    } else {

        document.querySelector('.guest').style.display = '';
        document.querySelector('.user').style.display = 'none';
    }
}

async function logout() {
    await apiLogout();
    setUserNav();
    page.redirect('/');
}
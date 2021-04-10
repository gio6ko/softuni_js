import {render} from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';

import {logout as apiLogout} from "./api/data.js";
import {homePage} from "./views/home.js";
import {loginPage} from "./views/login.js";
import {registerPage} from "./views/register.js";
import {catalogPage} from "./views/catalog.js";
import {createPage} from "./views/create.js";
import {detailsPage} from "./views/details.js";
import {editPage} from "./views/edit.js";
import {myPage} from "./views/myList.js";
import {searchPage} from "./views/search.js";


const main = document.querySelector('main');
document.getElementById('logoutBtn').addEventListener('click', logout);
setUserNav();

page('/', decorateContext, guestUserOnly, homePage);
page('/login', decorateContext, loginPage);
page('/register', decorateContext, registerPage);
page('/catalog', decorateContext, catalogPage);
page('/create', decorateContext, createPage);
page('/details/:id', decorateContext, detailsPage);
page('/edit/:id', decorateContext, editPage);
page('/myList', decorateContext, myPage);
page('/search', decorateContext, searchPage);


page.start();


function guestUserOnly(context, next) {
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
    const username = sessionStorage.getItem('username');

    if (username !== null) {
        document.querySelector('div#profile > a').textContent =`Welcome ${username}`;
        document.getElementById('profile').style.display = '';
        document.getElementById('guest').style.display = 'none';
    } else {
        document.getElementById('guest').style.display = '';
        document.getElementById('profile').style.display = 'none';
    }
}


async function logout() {
    await apiLogout();
    setUserNav();
    page.redirect('/');
}
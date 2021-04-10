import page from "../node_modules/page/page.mjs";
import {render} from '../node_modules/lit-html/lit-html.js';
import {logout} from './api/api.js';

import {detailsPage} from './views/details.js';
import {createPage} from './views/create.js';
import {catalogPage} from './views/catalog.js';
import {editPage} from './views/edit.js';
import {loginPage} from './views/login.js';
import {registerPage} from './views/register.js';
import {myFurniturePage} from './views/my-furniture.js';
import {dashboardPage} from './views/dashboard.js';

const main = document.querySelector('.container');

page('/', decorateContext, dashboardPage);
page('/', decorateContext, dashboardPage);
//page('/catalog', decorateContext, catalogPage);
page('/create', decorateContext, createPage);
page('/register', decorateContext, registerPage);
page('/details/:id', decorateContext, detailsPage);
page('/edit/:id', decorateContext, editPage);
page('/login', decorateContext, loginPage);
page('/my-furniture', decorateContext, myFurniturePage);

document.getElementById('logoutBtn').addEventListener('click', async () => {

    await logout();
    setUserNav();
    page.redirect('/');

});

setUserNav();
page.start();

function decorateContext(context, next) {
    context.render = (content) => render(content, main);
    context.setUserNav = setUserNav;
    next();
}


function setUserNav() {
    const userId = sessionStorage.getItem('userId');
    if (userId !== null) {
        document.getElementById('user').style.display = 'inline-block';
        document.getElementById('guest').style.display = 'none';
    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'inline-block';
    }
}
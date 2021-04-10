import {setupCatalog, showCatalog} from './catalog.js';
import {setupLogin, showLogin} from './login.js';
import {setupRegister, showRegister} from './register.js'
import {setupCreate, showCreate} from './create.js'
import {setupDetails} from "./details.js";

main();


function main() {
    setUserNav();

    const nav = document.querySelector('nav');
    const mainNode = document.querySelector('main');
    const catalogSection = document.getElementById('catalogSection');
    const loginSection = document.getElementById('loginSection');
    const registerSection = document.getElementById('registerSection');
    const createSection = document.getElementById('createSection');
    const detailsSection = document.getElementById('detailsSection');

    const links = {
        'catalogLink': showCatalog,
        'loginLink': showLogin,
        'registerLink': showRegister,
        'createLink': showCreate
    };

    setupCatalog(mainNode, catalogSection, setActiveNav);
    setupRegister(mainNode, registerSection, setActiveNav);
    setupCreate(mainNode, createSection, setActiveNav);
    setupLogin(mainNode, loginSection, setActiveNav);
    setupDetails(mainNode,detailsSection,setActiveNav);
    setupNavigation();
    showCatalog();


    function setActiveNav(targetId) {
        [...nav.querySelectorAll('a')].forEach(l => {
            if (l.id === targetId) {
                l.classList.add('active');
            } else {
                l.classList.remove('active');
            }
        })
    }

    function setupNavigation() {
        document.getElementById('logoutBtn').addEventListener('click', logout);

        nav.addEventListener('click', (event) => {
            if (event.target.tagName === 'A') {
                const view = links[event.target.id];
                if (typeof view == 'function') {
                    event.preventDefault();
                    view();
                }
            }
        })
    }


    function setUserNav() {
        if (sessionStorage.getItem('authToken') != null) {
            document.getElementById('user').style.display = 'inline-block';
            document.getElementById('guest').style.display = 'none';
        } else {
            document.getElementById('user').style.display = 'none';
            document.getElementById('guest').style.display = 'inline-block';
        }
    }



    async function logout() {
        const response = await fetch('http://localhost:3030/users/logout', {
            method: 'get',
            headers: {
                'X-Authorization': sessionStorage.getItem('authToken')
            },
        });
        if (response.status === 200) {
            sessionStorage.removeItem('authToken');
            setUserNav();
            await showCatalog();
        } else {
            console.error(await response.json());
        }
    }

}





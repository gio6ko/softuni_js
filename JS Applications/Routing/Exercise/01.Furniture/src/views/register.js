import {html} from "../../node_modules/lit-html/lit-html.js";
import {register} from '../api/api.js';

const registerTemplate = (onSubmit, invalidEmail, invalidPass, invalidRe) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Register New User</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form @submit=${onSubmit}>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="email">Email</label>
                    <input class=${'form-control ' + (invalidEmail ? 'is-invalid' : 'is-valid')} id="email" type="text"
                           name="email">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="password">Password</label>
                    <input class=${'form-control ' + (invalidPass ? 'is-invalid' : 'is-valid')} id="password"
                           type="password"
                           name="password">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="rePass">Repeat</label>
                    <input class=${'form-control ' + (invalidRe ? 'is-invalid' : 'is-valid')} id="rePass"
                           type="password"
                           name="rePass">
                </div>
                <input type="submit" class="btn btn-primary" value="Register"/>
            </div>
        </div>
    </form>`;


export async function registerPage(context) {

    context.render(registerTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email');
        const password = formData.get('password').trim();
        const rePass = formData.get('rePass').trim();

        if (email === '' || password === '' || rePass === '') {
            context.render(registerTemplate(onSubmit, email === '', password === '', rePass === ''))
            return alert('All fields are required!');
        }

        if (password !== rePass) {
            context.render(registerTemplate(onSubmit, false, true, true))
            return alert('Passwords don\'t match!');
        }

        const result = await register(email, password);

        context.setUserNav();
        context.page.redirect('/');
    }
}
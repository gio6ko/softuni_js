function attachRegisterEvent() {

    document.getElementById('registerForm').addEventListener('submit', createUser);
}


async function createUser(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const rePass = formData.get('rePass');

    if (!email || !password) {
        alert("Invalid email or password");
        return;
    }

    if (password !== rePass) {
        alert("Passwords don\'t match");
        return;
    }

    const response = await fetch('http://localhost:3030/users/register', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: {email, password}
    });

    const data = response.json();

    console.log(data);


}
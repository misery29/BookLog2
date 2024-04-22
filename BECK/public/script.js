document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', async function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const response = await fetch('api/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        console.log(response);
        if (response.ok) {
            // Login bem-sucedido
            console.log(data.message);
            window.location.href = 'http://127.0.0.1:5000';
        } else {
            // Login falhou
            console.error(data.message);
        }
    });
});

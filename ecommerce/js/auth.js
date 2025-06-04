function sendRequest(url, data) {
    return fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(r => r.json());
}

document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', async e => {
            e.preventDefault();
            const email = document.getElementById('signup-email').value;
            const password = document.getElementById('signup-password').value;
            const result = await sendRequest('https://localhost:5001/api/signup', { email, password });
            alert(result.message || 'Signed up');
            window.location.href = 'login.html';
        });
    }

    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', async e => {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            const result = await sendRequest('https://localhost:5001/api/login', { email, password });
            if (result.success) {
                localStorage.setItem('token', result.token);
                alert('Login successful');
                window.location.href = 'index.html';
            } else {
                alert(result.message || 'Login failed');
            }
        });
    }
});

async function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    });

    const data = await response.json();

    if (response.ok) {
        window.location.href = 'dashboard.html';
    } else {
        alert(data.error_description || data.message);
    }
}

const loginForm = document.querySelector('form');
loginForm.addEventListener('submit', handleLogin);
 window.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[data-hx-get], a[data-hx-post]');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('data-hx-target');
            const url = this.getAttribute('data-hx-get') || this.getAttribute('data-hx-post');
            const method = this.getAttribute('data-hx-get') ? 'GET' : 'POST';

            fetch(url, { method })
                .then(response => response.text())
                .then(html => {
                    document.getElementById(targetId).innerHTML = html;
                });
        });
    });
});

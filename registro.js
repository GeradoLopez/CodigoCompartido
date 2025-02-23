// registro.js

const formularioRegistro = document.getElementById('registroForm');

if (formularioRegistro) {
    formularioRegistro.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el envío del formulario por defecto

        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmarPassword = document.getElementById('confirmarPassword').value;

        if (password !== confirmarPassword) {
            alert('Las contraseñas no coinciden.');
            return;
        }

        // Envía los datos al servidor (fetch, axios, etc.)
        fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nombre, email, password }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Registro exitoso.');
                // Redirige al usuario a la página de inicio de sesión
            } else {
                alert('Error en el registro.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
}
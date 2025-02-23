// perfil.js

const formularioPerfil = document.getElementById('formularioPerfil');

if (formularioPerfil) {
    formularioPerfil.addEventListener('submit', (event) => {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;

        fetch('/perfil', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nombre, email }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Perfil actualizado correctamente.');
            } else {
                alert('Error al actualizar el perfil.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
}
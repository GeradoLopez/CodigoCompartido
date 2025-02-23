// proyectos.js

const formularioSubir = document.getElementById('subirProyecto');
const listaProyectos = document.getElementById('listaProyectos');

if (formularioSubir) {
    formularioSubir.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(formularioSubir);

        fetch('/upload', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Proyecto subido correctamente.');
                // Actualiza la lista de proyectos
            } else {
                alert('Error al subir el proyecto.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
}

// Función para cargar y mostrar la lista de proyectos
function cargarProyectos() {
    fetch('/projects')
    .then(response => response.json())
    .then(proyectos => {
        listaProyectos.innerHTML = '';
        proyectos.forEach(proyecto => {
            const proyectoElemento = document.createElement('div');
            proyectoElemento.innerHTML = `<h3>${proyecto.nombre}</h3><p>${proyecto.descripcion}</p>`;
            listaProyectos.appendChild(proyectoElemento);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

if (listaProyectos) {
    cargarProyectos();
}
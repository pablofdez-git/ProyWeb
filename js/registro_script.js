let boxDisable = document.getElementsByClassName('norequeridos');
let toggleLink = document.getElementById('aviso');
let textoAviso = document.getElementById('texto-aviso');
let titulo     = document.getElementById('titulo');
let btnSubmit  = document.getElementById('boton-submit');

function toggleBox() {

    let estaOculto = boxDisable[0].style.display === 'none';

    for (let campo of boxDisable) {
        if (estaOculto) {
            campo.style.display = 'flex';
        } else {
            campo.style.display = 'none';
        }
    }

    if (estaOculto) {
        titulo.textContent        = '¡Preregistro abierto!';
        btnSubmit.textContent     = '¡Regístrate!';
        textoAviso.textContent    = '¿Ya tienes cuenta?';
        toggleLink.textContent    = 'Inicia sesión';
    } else {
        titulo.textContent        = 'Inicia sesión';
        btnSubmit.textContent     = '¡Inicie sesión!';
        textoAviso.textContent    = '¿No tienes cuenta?';
        toggleLink.textContent    = 'Regístrate';
    }
}

toggleLink.addEventListener('click', toggleBox);
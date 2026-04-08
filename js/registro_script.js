let boxDisable = document.getElementsByClassName('norequeridos');
let toggleLink = document.getElementById('aviso');
let textoAviso = document.getElementById('texto-aviso');
let titulo = document.getElementById('titulo');
let btnSubmit = document.getElementById('boton-submit');
let bloquePrincipal = document.querySelector('.bloque');

function toggleBox() {

    let estaOculto = boxDisable[0].style.display === 'none';

    for (let campo of boxDisable) {
        let input = campo.querySelector('input');
        if (estaOculto) {
            campo.style.display = 'flex';
            if (input) input.required = true;
        } else {
            campo.style.display = 'none';
            if (input) input.required = false;
        }
    }

    if (estaOculto) {
        bloquePrincipal.classList.remove('bloque-login');
        titulo.textContent = '¡Preregistro abierto!';
        btnSubmit.textContent = '¡Regístrate!';
        textoAviso.textContent = '¿Ya tienes cuenta?';
        toggleLink.textContent = 'Inicia sesión';
    } else {
        bloquePrincipal.classList.add('bloque-login');
        titulo.textContent = 'Inicia sesión';
        btnSubmit.textContent = '¡Inicie sesión!';
        textoAviso.textContent = '¿No tienes cuenta?';
        toggleLink.textContent = 'Regístrate';
    }
}

toggleLink.addEventListener('click', toggleBox);
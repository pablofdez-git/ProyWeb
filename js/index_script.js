function mostrarNotificacion(mensaje, tipo) {
    const existente = document.querySelector('.notificacion');
    if (existente) existente.remove();

    const notificacion = document.createElement('div');
    notificacion.textContent = mensaje;
    notificacion.classList.add('notificacion', tipo);
    
    document.body.appendChild(notificacion);

    setTimeout(() => {
        notificacion.remove();
    }, 4000);
}

document.addEventListener('DOMContentLoaded', () => {
    const mensajeGuardado = localStorage.getItem('mensajeExito');
    if (mensajeGuardado) {
        mostrarNotificacion(mensajeGuardado, 'exito');
        localStorage.removeItem('mensajeExito');
    }
});
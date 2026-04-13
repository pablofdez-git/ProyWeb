let cantidadMonedas = document.getElementById('cantMonedas');
let cantidadGemas = document.getElementById('cantGemas');
const botones = document.querySelectorAll('.boton-compra');


for(let i = 0; i<botones.length;i++){
    botones[i].addEventListener('click', cuentas);
}

function cuentas(){
    if(this.classList.contains('btn-monedas')){
        let precioMon = parseInt(this.textContent);
        let totalMonedas = parseInt(cantidadMonedas.textContent);

        if(precioMon <= totalMonedas){
            totalMonedas -= precioMon;
            cantidadMonedas.textContent = totalMonedas;
            mostrarNotificacion("Compra Realizada", "exito");

        }else{
            mostrarNotificacion("Saldo insuficiente", "error");
        }
    }else if(this.classList.contains('btn-gemas')){
        let precioGem = parseInt(this.textContent);
        let totalGemas = parseInt(cantidadGemas.textContent);

        if(precioGem <= totalGemas){
            totalGemas -= precioGem;
            cantidadGemas.textContent = totalGemas;
            mostrarNotificacion("Compra Realizada", "exito");
        }else{
            mostrarNotificacion("Saldo insuficiente", "error");
        }
    }
}

function mostrarNotificacion(mensaje, tipo){
    const existente = document.querySelector('.notificacion');
    if(existente){
        existente.remove();
    }

    const notificacion = document.createElement('div');
    notificacion.textContent = mensaje;

    notificacion.classList.add('notificacion', tipo);
    document.body.appendChild(notificacion);

    setTimeout(() => {
        notificacion.remove();
    }, 2500);
}

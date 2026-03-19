let cantidadMonedas = document.getElementById('cantMonedas');
let cantidadGemas = document.getElementById('cantGemas');
const botones = document.querySelectorAll('.boton-compra');


for(let i = 0; i<botones.length;i++){
    botones[i].addEventListener('click', cuentas);
}

function cuentas(){
    if(this.classList.contains('btn-monedas')){

    }else if(this.classList.contains('btn-gemas')){

    }
}

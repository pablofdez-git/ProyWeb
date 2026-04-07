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
            alert("Compra Realizada");
        }else{
            alert("Saldo insuficiente");
        }
    }else if(this.classList.contains('btn-gemas')){
        let precioGem = parseInt(this.textContent);
        let totalGemas = parseInt(cantidadGemas.textContent);

        if(precioGem <= totalGemas){
            totalGemas -= precioGem;
            cantidadGemas.textContent = totalGemas;
            alert("Compra Realizada");
        }else{
            alert("Saldo insuficiente");
        }
    }
}  

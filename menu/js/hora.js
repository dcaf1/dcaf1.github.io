
function mostrarHora(){
    momentoActual = new Date();
    hora = momentoActual.getHours();
    minuto = momentoActual.getMinutes();
    segundo = momentoActual.getSeconds();

    horaImprimible = hora + " : " + minuto + " : " + segundo;

    document.getElementById('mostrarHora').innerHTML = horaImprimible;

}

function mostrarFecha(){
    fechaActual = new Date();
    mes = fechaActual.getUTCMonth() + 1;
    dia = fechaActual.getUTCDate();
    año = fechaActual.getUTCFullYear();

    fechaImprime = dia + "/" + mes + "/" + año; 

    document.getElementById('mostrarFecha').innerHTML = fechaImprime;
}
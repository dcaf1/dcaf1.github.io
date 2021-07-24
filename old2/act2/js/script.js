

function fecha(){
    fecha = new Date();
    mes = fecha.getUTCMonth() + 1;
    dia = fecha.getUTCDate();
    año = fecha.getUTCFullYear();

    fechax = dia + "/" + mes + "/" + año; 

    document.getElementById('fecha').innerHTML = fechax;
}


function hora(){
    time = new Date();
    hora = time.getHours();
    minuto = time.getMinutes();
    segundo = time.getSeconds();

    timex = hora + ":" + minuto + ":" + segundo;

    document.getElementById('hora').innerHTML = timex;

}





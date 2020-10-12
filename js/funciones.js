alert("¡Bienvenidas Mujeres emprendedoras!");

var confirm = confirm("¿Deseas  saber  acerca  de  autonomía  económica  de  las  mujeres?");

if (confirm){
	var name =prompt("¿Cuál es tu nombre emprendedora?");

	alert("¡Hola "+ name +" te invitamos a ser emprendedora y a desarrollar tu autonomía económica!");
} else {
	window.location.href= "https://www.google.com";
}

function reloj(){
	fechaActual = new Date();
	hora = addZero(fechaActual.getHours());
	minuto = addZero(fechaActual.getMinutes());
	segundo = addZero(fechaActual.getSeconds());
	dd = addZero(fechaActual.getDate());
	mm = addZero(fechaActual.getMonth());
	yyyy = fechaActual.getFullYear();


	hrs = (hora < 12) ? " AM" : " PM"

	hora = (hora > 12)? addZero(hora - 12) : hora

	time = hora + " : " + minuto + " : " + segundo + hrs
	
	fecha = dd+'/'+mm+'/'+yyyy

	document.getElementById("fecha").innerHTML = fecha
	document.getElementById("reloj").innerHTML = time

	setTimeout("reloj()",1000)
}

function addZero(i) {
    if (i < 10) {
        i = '0' + i;
    }
    return i;
}
	


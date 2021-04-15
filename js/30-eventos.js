'use strict'

//Eventos del ratón

var boton = document.querySelector("#boton");

function cambiarColor(){
    
    var bg = boton.style.background;
    if( bg == 'green'){
        boton.style.background = "red";
    } else{
        boton.style.background = "green";
    }
}
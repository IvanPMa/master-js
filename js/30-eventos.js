'use strict'

//Eventos del ratón
function cambiarColor(){    
    var bg = boton.style.background;
    if( bg == 'green'){
        boton.style.background = "red";
    } else{ 
        boton.style.background = "green";
    }
    boton.style.padding = '10px';
    boton.style.border = "2px solid #ccc";
}
var boton = document.querySelector("#boton");
boton.addEventListener('click', ()=>{
    cambiarColor();
});
'use strict'
// DOM - Document Object model
function cambiaColor (color){
    caja.style.background = color;
} 

// var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja");
caja.innerHTML = "¡Texto desde JS¡";

//Cambiar estilos desde js
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
//Añadir una clase
caja.className = "caja";
// cambiaColor("blue");
console.log(caja);
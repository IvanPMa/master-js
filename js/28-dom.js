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

//Conseguir elementos por su etiqueta

var todosLosDivs = document.getElementsByTagName('div');
var seccion = document.querySelector('#miseccion');
var hr = document.createElement("hr")

for (let valor in todosLosDivs){
    if(typeof todosLosDivs[valor].textContent == 'string'){
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo); 
    } 
}

//Conseguir elementos por su clase css

var divRojos = document.getElementsByClassName("rojo");
var divAmarillos = document.getElementsByClassName("amarillo");
divAmarillos[0].style.background = 'yellow';
console.log(divAmarillos);
for(let div in divRojos){
    if(divRojos[div].className == 'rojo'){
        divRojos[div].style.background = "red";
    }
}
console.log(divRojos);

// Query selector 

var id = document.querySelector("#encabezado");
console.log(id);

var claseRojo = document.querySelector("div.rojo");
console.log(claseRojo);

var etiqueta = document.querySelector("div");
console.log(etiqueta)
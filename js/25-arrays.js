'use strict'

//Arrays , Arreglos, Matrices

var nombre= "Ivan Pacheco";
var nombres = ["Ivan Pacheco","Victor Robles","Juan Lopez","Manolo Garcia",52,true]

var lenguajes = new Array('HTMl', 'JS', 'TS', 'Java','C#','Python');

/*
var elemento = parseInt(prompt("¿Que elemento del array quieres? ",0));
if(elemento >= nombres.length){
    alert("Introduce el numero correcto menor que " + nombres.length)
}else{
    alert("El usuario seleccionado es " +nombres[elemento]);
}
*/

document.write("<h1>Lenguajes del 2021</h1>");
document.write("<ul>");
for (let i = 0 ; i < lenguajes.length; i++){
    document.write("<li>"+ lenguajes[i]+"</li>");
}
document.write("</ul>");
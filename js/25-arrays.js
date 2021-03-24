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

/* 
for (let i = 0 ; i < lenguajes.length; i++){
    document.write("<li>"+ lenguajes[i]+"</li>");
}*/

document.write("<h1>Lenguajes del 2021</h1>");
document.write("<ul>");

/* lenguajes.forEach((elemento,indice,arr)=>{
    console.log(arr);
    document.write("<li>"+indice+" "+elemento+"</li>");
}); */

for(let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje]+"</li>");
}

document.write("</ul>"); 
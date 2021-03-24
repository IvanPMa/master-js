'use strict'

//Arrays , Arreglos, Matrices

var nombre= "Ivan Pacheco";
var nombres = ["Ivan Pacheco","Victor Robles","Juan Lopez","Manolo Garcia",52,true]

var lenguajes = new Array('HTML', 'JS', 'TS', 'Java','C#','Python');

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

//Busquedas
// Indices que cumplan una condicion concreta
var precios =[10, 20, 50 ,80,12]
var busqueda = precios.some(precio => precio >= 10);
console.log(busqueda);
//Busca en un arreglo y nos devuelve el texto
busqueda = lenguajes.find(lenguaje => lenguaje == 'HTML');
console.log(busqueda);
    busqueda = lenguajes.findIndex(lenguaje => lenguaje == 'HTML');
    console.log(busqueda);
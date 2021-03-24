'use strict'
/*
1. Pida 6 numeros por pantalla y los meta en un array
2. Mostrar el array entero (todos sus elementos) en el cuerpo de la pagina
    y en la consola
3. Ordenarlo y  mostrarlo 
4. Invertir su nombre y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Busqueda de un valor introducido por el usuario que nos diga si lo 
    encuentra y su indice(se valorara el uso de funciones)
 */
var contador = 0;
var numeros = [];
do{
    numeros.push (parseInt(prompt("Ingresa un valor:",0)));
    contador++;
} while(contador <6);

for (let i in numeros){
    document.write(numeros[i]+"<br>");
    console.log(numeros[i]);
}

numeros.sort();
console.log(numeros);

numeros.reverse();
console.log(numeros);

console.log("Cantidad de elementos: "+numeros.length);

var valor = parseInt(prompt("Valor a 1"));

let busqueda = numeros.findIndex(indice => indice == valor );

busqueda != -1 ? console.log("Valor encontrado y su indice es "+ busqueda): console.log("Valor no encontrado");

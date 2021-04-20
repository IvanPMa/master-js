'use strict'

/* 
    Utilizando un blucle, mostrar la suma y la media de los numeros introducidos hasta introducir un numero negativo y ahi 
    mostrar el resultado
*/
var suma = 0;
do{
    var numero = parseInt(prompt("Ingresa un numero: ",0));
    numero>= 0? suma+= numero : console.log ("Numero negativo, fin del bucle");
}while (numero >= 0);

console.log("Suma: ",suma);
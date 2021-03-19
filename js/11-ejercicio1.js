'use strict'

/*
    Programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales
*/

var numero_uno = parseInt (prompt("Ingresa el primer numero",1));
var numero_dos = parseInt (prompt("Ingresa el segundo numero",2));

if (numero_uno > numero_dos){
    console.log("El numero uno es mayor");
}else if ( numero_uno < numero_dos){
    console.log("El numero dos ese mayor");
}else{
    console.log("Los numeros son iguales");
}
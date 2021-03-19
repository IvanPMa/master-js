'use strict'
/* 
Programa que nos muestra los numeros entre dos numeros introducidos por el usuario
*/

do {
    var numero1 = parseInt (prompt("Numero 1: ",1));
    var numero2 = parseInt (prompt("Numero 2: ",2));
    if (isNaN(numero1) || isNaN(numero2)){
        alert("Ingresa valores númericos");
    }
} while (isNaN(numero1) || isNaN(numero2));

imprimeValoresMedios(numero1,numero2);

function imprimeValoresMedios(numero1,numero2){ 
    for(let i = minimo(numero1,numero2)+1; i< maximo(numero1,numero2);i++){
        console.log(i);
    }
}


function minimo(numero1,numero2){
    if ( numero1 < numero2 )
        return numero1
    return numero2
}
function maximo(numero1,numero2){
    if ( numero1 > numero2 )
        return numero1
    return numero2
}
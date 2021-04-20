'use strict'

//  Mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario


var numero1 = parseInt(prompt("Inicio: ",0));
var numero2 = parseInt(prompt("Fin",10));

for (let i = numero1+1; i < numero2; i++){
    if(numero1 % 2 ==0)
        console.log(i);   
}

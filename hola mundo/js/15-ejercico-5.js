'use strict'
// Muestre todos los numeros divisores de un numero introduce en prompt

var numero = parseInt( prompt("Intorduce el numero", 10));


for(let i = 1; i<=numero; i++){
    if (numero % i == 0){
        console.log(i);
    }
}
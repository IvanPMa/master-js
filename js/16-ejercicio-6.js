'use strict'
/*
     Que nos diga si el numero es par o inpar
     1.Ventana de prompt
     2. Si no es valido que nos pida de nuevo el numero
*/
do {
    var numero = parseInt(prompt("Numero ",5));
} while (isNaN(numero) || numero<= 0);

numero % 2 == 0 ? alert("El numero es par") :alert("El numero es inpar");
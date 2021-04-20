'use strict'

function holaMundo(texto){
    //Variable local dentro de la funcion
    var hola_mundo = "Texto dentro de funcion";
    console.log(texto);
    console.log(numero.toString());
    console.log(hola_mundo);
}

//Variable global dentro del fichero
var numero = 12;
var texto = "Hola Mundo soy una variable global";

holaMundo(texto);

// console.log(hola_mundo);
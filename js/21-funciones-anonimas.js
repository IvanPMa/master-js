'use strict'
//Funciones anonimas
// Una funcion de callback es una funcion annima que se le pasa como parametro 
// a otra  Funcion
//Es una funcion que no tiene 
function sumame(numero1, numero2,sumaYmuestra, sumaPorDos){
    var sumar = numero1 + numero2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);
}

sumame(5,7, function(dato){
    console.log("La suma es: ",dato)
},
function (dato){
    console.log("La suma por dos es: ", (dato*2));
});

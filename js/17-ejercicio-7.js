'use strict'
//Tabla de multiplicar de un numero introducido por el usuario

var numero = parseInt(prompt ("Introduce un numero",5));


for (let i = 0 ; i <= 10; i++){
    console.log(numero + " * " + i +" = "+(numero*i));
}

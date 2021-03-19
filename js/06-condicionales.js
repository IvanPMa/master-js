'use strict'

//Condicional IF
/*
Operadores relacionales
    Mayor: >
    Menor: <
    Mayor o igual: >=
    Menor o igual: <=
    Distinto: !=
    */
var edad = 17;
var nombre = 'David Suarez';
if(edad >= 18){
    console.log(nombre + " tiene " +edad+ " años, es mayor de edad")

    if ( edad <=33 ){
        console,log("Todavia eres milenial");
    }else if(edad >= 70){
        console.log("Eres anciano");
    }
    else{
        console.log("Ya no eres milenial");
    }
}else{
    console.log(nombre + " tiene " +edad+ " años, es menor de edad");
}
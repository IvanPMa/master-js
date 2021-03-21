'use strict'

//Funciones
//una agrupacion reutilizable de un conjunto de isntrucciones

function calculadora(numero1,numero2) {
    console.log("Suma: "+(numero1+numero2));
    console.log("Resta: "+(numero1-numero2));
    console.log("Multiplicacion: "+(numero1*numero2));
    console.log("Division: "+(numero1+numero2));
    console.log (" ");

    //return ("Hola doy la calculadora")
}


for (let i = 0; i<= 10; i++ ){
    console.log(i)
    calculadora (i,5);
}
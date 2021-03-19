'use strict'
// Bucle while

var year = 2018;

while (year <= 2051){
    console.log("Estamos en el año ",year);
    year++;
    if (year == 2021){
        console.log("Año actual ",year);
        break;
    }
}

//Do while
var years = 20;

do {
    alert("Solo cuando sea diferente a 20"); 
}while (years != 20);
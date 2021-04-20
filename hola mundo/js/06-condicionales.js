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

/*
    OPERADORES LOGICOS 
    AND:: &&
    OR: ||
    NOT: !
*/

var year = 2028;
//NOT
if (year != 2016){
    console.log("El año no es 2016, es: "+year);
}

//AND
if(year >= 2000 && year<= 2020){
    console.log("Estamos en la era actual");
}else{
    console.log("Era postmoderna");
}

//OR 
if (year== 2008 || (year >= 2018 && year == 2028)){
    console.log("El año termina en 8");
} else{
    console.log ("Año no registrado")
}
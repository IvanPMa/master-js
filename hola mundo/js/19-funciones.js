'use strict'

//Funciones
//una agrupacion reutilizable de un conjunto de isntrucciones

function calculadora(numero1,numero2, mostrar = false) {
    if(mostrar == false){
        console.log("Suma: "+(numero1+numero2));
        console.log("Resta: "+(numero1-numero2));
        console.log("Multiplicacion: "+(numero1*numero2));
        console.log("Division: "+(numero1+numero2));
        console.log(" ");
    }else{
        document.write("Suma: "+(numero1+numero2)+"<br>");
        document.write("Resta: "+(numero1-numero2)+"<br>");
        document.write("Multiplicacion: "+(numero1*numero2)+"<br>");
        document.write("Division: "+(numero1+numero2)+"<br>");
        document.write(" "+"<br>");
    }
    //return ("Hola doy la calculadora")
}

calculadora(1,3);
calculadora(2,5,true);

// for (let i = 0; i<= 10; i++ ){
//     console.log(i)
//     calculadora (i,5);
// }
'use strict'

/*
    Calculadora:
    - Pida dos numeros por pantalla
    - Si metemos uno mal que nos lo vuelva a pedir
    - En el cuerpo de la pagina, en una alerta y por la consola el resultado de sumar, restar , multiplicar y
    dividir esas dos cifras
*/

do{
    var numero1 = parseFloat(prompt("Ingresa el primer numero: "));
    var numero2 = parseFloat(prompt("Ingresa el segundo numero: "));
}while(isNaN(numero1) || isNaN(numero2));

var opcion = prompt("¿Que quieres hacer? \nsuma \nresta \nproducto \ndivision");

switch(opcion){
    case "suma":
        alert(numero1 +" + "+numero2+" = "+(numero1+numero2));
        console.log(numero1 +" + "+numero2+" = "+(numero1+numero2));
        document.write(numero1 +" + "+numero2+" = "+(numero1+numero2));
    break;
    case "resta":
        alert(numero1 +" - "+numero2+" = "+(numero1-numero2));
        console.log(numero1 +" - "+numero2+" = "+(numero1-numero2));
        document.write(numero1 +" - "+numero2+" = "+(numero1-numero2));
    break;
    case "producto":
        alert(numero1 +" * "+numero2+" = "+(numero1*numero2));
        console.log(numero1 +" * "+numero2+" = "+(numero1*numero2));
        document.write(numero1 +" * "+numero2+" = "+(numero1*numero2));
    break;
    case "division":
        alert(numero1 +" / "+numero2+" = "+(numero1/numero2));
        console.log(numero1 +" / "+numero2+" = "+(numero1/numero2));
        document.write(numero1 +" / "+numero2+" = "+(numero1/numero2));
    break;
}
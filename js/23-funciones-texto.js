'use strict'

// Transformacion de textos

var numero = 444;
var texto1 = " Curso de JS";
var texto2 ="Es muy buen curso";

var dato = numero.toString();
    dato = texto1.toUpperCase();
    dato = texto2.toLowerCase();
// console.log (dato);

//Calcular longitud de textos
var nombre = "Ivan Pacheco";
    nombre = ["hola", "hola"]

// console.log(nombre.length);

//Concatenar - unir textos

//var textoTotal = texto1 +" "+  texto2;

var textoTotal = texto1.concat(" "+texto2);
console.log (textoTotal);
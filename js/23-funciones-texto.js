'use strict'

// Transformacion de textos

var numero = 444;
var texto1 = "Este es un curso de Javascript curso";
var texto2 ="Es muy buen curso";
// Index Of indica en que caracter inicia esa palabra
let busqueda1 = texto1.lastIndexOf("curso");
console.log(busqueda1);

// search al igual que inexOf nos dice en que posicon comienza la palaabra
let busqueda2 = texto1.search("curso");
console.log (busqueda2);

//match devuelve un array con las palabras 
//Con solo la palabra entre comillas devuelve un array solo con el primer resultado
// Si queremos qeu encuentre todas las coincidencias con la palabra debemos hacer
//uso de las expresiones regulares
let busqueda3 = texto1.match(/curso/g);
console.log(busqueda3);

//Con sbstr extraemos una cadena de caracteres donde indicamos donde inicia y cuantos caracteres
// extraemos
let busqueda4 = texto1.substr(11,5);
console.log(busqueda4);

//Obtenemos una letra concreta de un string, indicando el indice
let busqueda5 = texto1.charAt(5);
console.log(busqueda5);

//Busca al inicio del string que empiece con esa cadena
let busqueda6 = texto1.startsWith("Este es un curso");
console.log (busqueda6);
console.log(texto1.endsWith("Javascript curso"))

//Encontrar la palabra dentro del string con includes
console.log(texto1.includes("Javascript"));
'use strict'

//*********  METODOS DE BUSQUEDA ***********

var numero = 444;
var texto1 = "Este es un curso de Javascript curso";
var texto2 ="   Es muy buen curso   ";
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
console.log(texto1.endsWith("Javascript curso"));

//Encontrar la palabra dentro del string con includes
console.log(texto1.includes("Javascript"));


//*********  METODOS DE REEMPLAZO ***********

//Reemplazar una palabra por otra
let busqueda = texto1.replace("Javascript","Typescript");
console.log(busqueda);

//Separar y obtener un string desde un indice estableciendo un limite o no
busqueda = texto1.slice(11,22);
console.log(busqueda);

//Convertir un string en un array, obtiene las palabras y las mete en un array
busqueda = texto1.split(" ");
console.log(busqueda)

//Quitar los espacios de una cadena por delante y por atras
busqueda = texto2.trim();
console.log(busqueda)

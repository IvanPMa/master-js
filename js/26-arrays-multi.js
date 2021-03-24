'use strict'

var categorias = ['Accion','Terror','Comedia'];
var peliculas = ['El infierno','Amarte duele','Amores perros','Gran torino']

var cine = [categorias,peliculas]

// console.log (cine[0][1]);
// console.log(cine[1][2])

/* do{
    var elemento = prompt("Introduce tu pelicula");
    if(elemento != 'acabar'){
        //Añadir un elemento al array
        peliculas.push(elemento);
    }
}while(elemento != 'acabar')
 */
//Eliminar el ultimo elemento del array
// peliculas.pop();

var indice = peliculas.indexOf('Amores perros');
if(indice >-1){
    //Con splice borra los elemntos a partir de un indice
    peliculas.splice(indice,1);
}

//Convertir un arreglo a un string
var peliculas_string = peliculas.join();
console.log(peliculas_string);
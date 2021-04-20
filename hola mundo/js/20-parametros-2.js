'use strict'

//Parametros REST y SPREAD

function listadoFrutas (fruta1,fruta2,...resto_de_frutas){
    //Me guarda los parametros dentro de un array
    console.log("Fruta 1: ",fruta1);
    console.log("Fruta 2: ",fruta2);
    console.log(resto_de_frutas)
}

var frutas =['Naranja','Piña'];
//Pasamos el array como parametro a la funcion 
//Con spread hacemos que se pasa cada indice individualmente a la funcion en ese
// orden
listadoFrutas(...frutas,"Mazana","Sandia", "Pera", "Melon","Coco");

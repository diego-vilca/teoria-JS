"use strict"; //linea opcional, es recomendable para utilizar buenas practicas. 

//arreglos 

const a = [];
const b = [1, true, "hola", ["A", "B", "C"]];
//imprime "hola"
console.log(b[2]);
//Imprime "C"
console.log(b[3][2]);

//Array.of crea una nueva unstancia de un arreglo con los valores pasados como argumentos
const c = Array.of("X", "Y", "Z", 9, 8, 7);

console.log(c);
//con alt gr + } hago la comilla invertida para el template
console.log(`La longitud del array es de: ${ c.length }`)

//array de 10 posiciones rellenadas solo con el booleano false
const d = Array(10).fill(false);
console.log(d);

//Practicas para definir arreglos que ya no se usan (new Array)
const e = new Array();
const f = new Array(1,2,3,true,false);

const colores = ["Rojo", "Verde", "Azul"];
console.log(colores);

//push agrega un elemento
colores.push("Negro");
console.log(colores)
//pop quita el ultimo elemento
colores.pop();
console.log(colores)

//el parametro e de la funcion anonima es el elemento que se itera e index es la posicion donde se encuentra
colores.forEach(function(e, index){
    console.log(`color: ${e} indice: ${index}`)
})







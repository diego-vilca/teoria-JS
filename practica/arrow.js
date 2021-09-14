//Arrow functions: son una nueva manera de definir funciones anonimas

// const saludar = () => {
//     console.log("Hola")
// }
// saludar();
//=======================================================================
//si la funcion tiene UNA sola linea de codigo pueden sacarse las LLAVES

// const saludar = () => console.log("Hola");

// saludar();
//=======================================================================
//si la funcion recibe solo UN parametro puedo sacar los PARENTESIS

// const saludar = nombre => console.log(`Hola ${nombre}`)
// saludar("Diego")

//=======================================================================
// //tambien puedo evitar poneer la palabra return
// const sumar = function (a, b) {
//     return a + b
// }

const sumar = (a, b) => a + b;
console.log(sumar(9, 9));


//=======================================================================

const funcionDeVariasLineas = () => {
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
}

funcionDeVariasLineas();
//=======================================================================

const numeros = [1,2,3,4,5];

// numeros.forEach(function (e, index) {
//     console.log(`El elemento ${e} esta en la posicion ${index}`);
// })

//transformo la funcion en arrow function

numeros.forEach( (e, index) => console.log(`El elemento ${e} esta en la posicion ${index}`));
 
//=======================================================================



console.log(`===============================================================================\n`)

//Las arrow function capturan el contexto del objeto en donde se encuentran



//el contexto de la funcion declarada es el objeto windows (si la corriera en el navegador). Ver carpeta ejemplo_1
function Perro() {
    console.log(this)
}

Perro();

//el scope de la funcion anonima es el mismo objeto (perro)
const perro = {
    nombre: "marco",
    ladrar: function(){
        console.log(this)
    }
}

perro.ladrar()

//El scope de la arrow function es el objeto window nuevamente
//(no es recomendable crear metodos a partir de arrow functions en objetos literales)
const dog = {
    nombre: "marco",
    ladrar: () => console.log(this),
}

dog.ladrar()
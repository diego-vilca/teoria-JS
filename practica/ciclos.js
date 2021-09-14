/**
 * Recordatorio: foreach es un metodo de los arreglos
 */

//while
let contador = 0;

//la evaluacion de la condicion se da al principio
while(contador < 10){
    console.log("while " + contador);
    contador++;
}

//variante de while, siempre entra al menos una vez, y que la condicion se evalua al final
do{
    console.log("do while " + contador);
    contador++;
}while(contador < 10)


//for
for (let i = 0; i < 10; i++) {
    console.log("for " + i);
}

let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
    
}

//for in
//Me permite recorrer las propiedades  de un objeto

const harry = {
    nombre: "Diego",
    apellido: "Vilca",
    edad: 35
}

for (const propiedad in harry) {
    //for in no acepta el punto en harry.propiedad
    // console.log(`Key: ${propiedad}, Value: ${harry.propiedad}`)
    //forma correcta (clave-valor):
    console.log(`Key: ${propiedad}, Value: ${harry[propiedad]}`)
}

//for of 
//Me permite recorrer iterables

for (const elemento of numeros) {
    console.log(elemento)
}




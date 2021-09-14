//Parametro REST, permiten agregar parametros infinitos. Se agregan 3 puntos suspensivos antes del parametro.

function sumar(a,b,...c){
    let resultado = a + b;
    //trato a c y a todo lo que venga despues como un arreglo
    c.forEach(n => resultado += n); 
}
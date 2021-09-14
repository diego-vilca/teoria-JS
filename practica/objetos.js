//Forma en desuso de declarar un objeto
const a = new Object();
console.log(a)
//===========================================
/**Una buena practica es que los objetos sean const para no sobreescribir sus referencias */
const b = {};
console.log(b);

/**Este objeto contiene strings, numbers, array, bool, objeto, funcion */
const harry = {
    nombre: "Diego",
    apellido: "Vilca",
    edad: 35,
    pasatiempos: ["Videojuegos", "Guitarra", "Libros", "Peliculas"],
    soltero: true,
    contacto: {
        email: "diegovilca@gmail.com",
        twitter: "m0rdru",
        celular: "151112345678"
    },
    saludar:function () {
        console.log(`Hola!`)
    },
    decirMiNombre: function () {
        console.log(`Hola me llamo ${this.nombre} ${this,this.apellido} y tengo ${this.edad}`)
    }
}

//imprimo todo el objeto
console.log(harry);
//formas de accesar un elemento del objeto, se suele usar el punto
console.log(harry["nombre"])
console.log(harry.nombre)
//llamo a la funcion
harry.saludar();
harry.decirMiNombre();

//algunos metodos de Object
console.log(Object.keys(harry))
console.log(Object.values(harry))
//este metodo verifica si la propiedad existe en el objeto y devuelve un booleano
console.log(harry.hasOwnProperty("nombre"))
console.log(harry.hasOwnProperty("nacimiento"))


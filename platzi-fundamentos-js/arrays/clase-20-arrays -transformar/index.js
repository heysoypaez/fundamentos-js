/*

Mis principios de programacion:
1. Un programador divide problemas grandes en problemas chiquitos
2. Cada 4 lineas de codigo comento mi codigo

//array

colección de datos

crearemos una colección
e iteraremos por cada uno de los elementos en la coleccion

*/

//Imprimiendo algo en la consola
console.log("inicializando archivo");

/*Declaración de objetos
=========================================*/

//estoy creando personas
var daniel = {
	nombre: "Daniel",
	apellido: "Páez",
	estatura: 1.73,
	ubicacion: "chile"
}

var amanda = {
	nombre: "Amanda",
	apellido: "Páez",
	estatura: 1.60,
	ubicacion: "chile"
}

var jonathan = {
	nombre: "Jonathan",
	apellido: "Páez",
	estatura: 1.70,
	ubicacion: "venezuela"
}

var betsabet = {
	nombre: "Betsabet",
	apellido: "Soto",
	estatura: 1.64,
	ubicacion: "chile"
}

/*Declaración de variables y Arrays
=========================================*/
//pueden ser variables, textos, numeros, objetos, mezclas, funciones
var personas = [ daniel, amanda, jonathan, betsabet ]


/*Declaración de funciones
=========================================*/

const pasarEstaturaCms =  persona => ({
		...persona,
		estatura: persona.estatura * 100
		//persona.estatura = persona.estatura * 100
	}
	//estamos creando un nuevo objeto modificando un atributo del anterior
)

var personasCms = personas.map(pasarEstaturaCms)
//map modifica todos los elementos en un array, devuelve un nuevo array


/*Consola y consultas
=========================================*/
console.log(personasCms)

/* 
IDEAS CLAVES
-------------
=> Para filtrar siempre necesitamos un array y una condicion
=> para filtrar un array llamamos al metodo array.filter(condicion)
=> Cuando filtramos estamos retornando un nuevo array a menos que reescribamos
ejemplo: personas = personas.filter(viveEnChile)


Control de errores
-----------------
//No me funcionaba la funcion es baja porque no le habia agregado parametro a la funcion flecha esAlta


------------------------------*/


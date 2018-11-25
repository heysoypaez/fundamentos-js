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




/*Declaración de variables
=========================================*/
//pueden ser variables, textos, numeros, objetos, mezclas, funciones
var personas = [ daniel, amanda, jonathan, betsabet ]


/*Declaración de funciones
=========================================*/

/*CONDICIONES QUE FILTRARAN LOS ARRAYS*/

//retornar la condicion de si es alta
const esAlta = ( {estatura} ) => estatura > 1.7

/*RETO escribe el filtado de personas bajas*/
const esBaja = ( {estatura}) => !esAlta( {estatura} );

const viveEnChile = ( {ubicacion} ) => ubicacion == "chile";


/*ARRAYS FILTRADOS*/

var personasAltas = personas.filter(esAlta)
//tambien puedo escribir la funcion dentro de personas.filter

var personasBajas = personas.filter(esBaja)

var personasEnChile = personas.filter(viveEnChile);



/*Consola y consultas
=========================================*/
console.log(personasAltas)
console.log(personasBajas)
console.log(`Soy ${ personas[0]["nombre"] }`)	

/*Ejecución de funciones
=========================================*/




/*Render en pantalla
=========================================*/

var render = document.getElementById("output");
render.innerHTML =  ``;

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


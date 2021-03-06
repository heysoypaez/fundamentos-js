/*
Autor: Daniel Páez
URL Autor: Daniel Páez
Tema de la clase: Promesas En Paralelo
Descripción: huyendo de los callback hell, descubriendo el paraiso
URL Autor:  heysoypaez.com
URL código: github.com/heysoypaez
*/

/*PROTOCOLO DE VERIFICACIÓN DE FUNCIONAMIENTO
==================================*/
//Imprimiendo algo en la consola
console.log("inicializando archivo");



/*DECLARACIÓN DE VARIABLES
==================================*/
var personajesRender = document.getElementById("output");


/* VARIABLES CONSTANTES DE API REQUERIDA
==================================*/
const API_URL = "https://swapi.co/api/";
const PEOPLE_URL = "people/:id";
const LUKE_URL = `${API_URL}${PEOPLE_URL.replace(":id","1")}`
const options = {crossDomain: true};


/*Para realizar un request siempre es necesario saber la url a la cual queremos acceder*/


/*DECLARACIÓN DE FUNCIONES
========================================================*/


//Funcion para obtener Personajes de Star Wars por su Id
function obtenerPersonaje(id) {

	return new Promise( (resolve,reject) => {


		/*Declaración de Variables
		==============================*/
		const url = `${API_URL}${PEOPLE_URL.replace(":id",id)}`


		/*Declaración de Funciones
		=============================*/
		function successRequest(data) {
				resolve(data)
			}


		/*Peticiones a la API
		============================*/

		// $ === jquery, Usamos Jquery.get para requerir datos de la API
		$.get( url, options, successRequest )

		 //Usamos Jquery.fail para hacer algo especifico si el request falla
		 .fail( () => reject(id))
	})

}


//Funcion para  imprimir la info de los Personajes de Star Wars por su Id
function imprimirInfoPersonajes(character) {
		saludo = `Hola, soy ${character.name}`
		
		if (character.name === "Darth Vader") {
			saludo += ` y soy tu padre.`	
		} 
		
		console.log(saludo)
		//Estoy imprimiendo en el document body el mismo saludo que va a la consola
		personajesRender.innerHTML += `<h4>${saludo}</h4>`
}


function alertarError(id) {
	var mensajeError = `(Desarrollador backend) Malas noticias, hubo un error subiendo el personaje ${id}`;

	console.error(mensajeError);
	alert(mensajeError);
}



//Escribamos el mismo codigo con reduce

var valorInicial = 0;

const reducer = ( acum,{ cantidadDeLibros } ) =>
 acum + cantidadDeLibros;
//estoy desglosando el objeto sacando el atributo que me interesa


/*
Para reducir ** un array se necesitan 2 cosas: Una función y el valor original / valor inicial del acumulador**.

La función va pasando el valor acumulado por cada elemento del array.
*/

var totalDeLibros = personas.reduce(reducer, valorInicial)
//necesitamos una funcion y un valor inicia

console.log(`Che, hay ${totalDeLibros} en esta familia`)



/*EJECUCIÓN DE FUNCIONES Y PROMESAS
========================================0*/


var ids = [1,2,3,4,5,6,7];

//map tomaba un array y modificaba cada uno de sus elementos

/*
var promesas = ids.map(function (id){
	return obtenerPersonaje(id)
})
*/

//otra forma de escribir lo de arriba
var promesas = ids.map( (id) => obtenerPersonaje(id) )

//llamando un metodo del objeto Promesa

Promise
.all(promesas)
.then(personajes => console.log(personajes[0].name) )
.catch(alertarError)

/*
obtenerPersonaje(1)
	.then( (personaje) => {

		// la data de personaje la recibimos en resolve(data)
		imprimirInfoPersonajes(personaje)
		return obtenerPersonaje(2)
		//encadenado las promesas

	})
	//Este va a ser personaje 2, lo llamamos 4 lineas arriba en el return
	.then( (personaje) => {

		// la data de personaje la recibimos en resolve(data)
		imprimirInfoPersonajes(personaje)
		return obtenerPersonaje(3)
		//encadenado las promesas
		
	})

	.then( (personaje) => {

		imprimirInfoPersonajes(personaje)
		return obtenerPersonaje(4)
		
	})

	.then( (personaje) => {

		imprimirInfoPersonajes(personaje)
		return obtenerPersonaje(5)
	})

	.then( (personaje) => {

		imprimirInfoPersonajes(personaje)
		//Y aqui dejamos de pedir, retornar más personajes
	})

	.catch(alertarError)
	//El mismo catch funciona para todos

	/* Es importante colocar en el parámetro de la funcion donde buscamos que se ejecute de manera sincronica otra funcion que NO se este ejecutando directamente; puede ser la referencia a la función o su declaración*/




/*=======================================
RENDER--------------------- EN PANTALLA
Agregando al html datos de la clase
=======================================*/

//Variables
var temaClase = "Promesas en paralelo";
var titulo = document.getElementById("title")
var contenidoClase = document.getElementById("contenido-clase")

//Variables reasignadas
titulo.innerHTML=  temaClase;
contenidoClase.innerHTML= temaClase;

//contenido de la clase

var apuntes = document.getElementById("apuntes")
var textoContenido = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 

//apuntes.innerHTML = `${textoContenido}`;

/*
===================================================================================================================== 
===================================================================================================================== 

IDEAS CLAVES
-------------
=> Promesas lo que permite es recibir en orden las respuestas del server
=>
=>=>=>

Control de errores
-----------------
//
------------------------------
===================================================================================================================== 
===================================================================================================================== 
*/

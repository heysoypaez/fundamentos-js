/*
Autor: Daniel Páez
URL Autor: Daniel Páez
Tema de la clase: Async Await
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
function imprimirInfoPersonaje(character) {

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









/*EJECUCIÓN DE FUNCIONES Y PROMESAS
========================================0*/

//funcion asincrona
async function obtenerPersonajes() {

var ids = [1,2,3,4,5,6,7];
//map tomaba un array y modificaba cada uno de sus elementos




//Ciclo para imprimir el saludo de cada personaje en el array ids llamandolo por su id
function imprimirInfoPersonajes() {

	for (var i = 0; i < ids.length; i++) {

		/*Variables
		========= */
		character = personajes[i]
		saludo = `Hola padawan, soy ${character.name}`
		
		/*Logica
		========= */
		if (character.name === "Darth Vader") {
			saludo += ` y soy tu padre.`	
		} 
		
		/*Ouput
		========= */
		console.log(saludo)
		personajesRender.innerHTML += `<h4>${saludo}</h4>`
		//Estoy imprimiendo en el document body el mismo saludo que va a la consola

	}

}


var promesas = ids.map( (id) => obtenerPersonaje(id) )

try {
	var personajes = await Promise.all(promesas)
	//cuando todas las promesas se resuelvan guardamelo aca
	console.table(personajes[0]);
	imprimirInfoPersonajes();
	

} 
catch(id) {
	alertarError(id);
}
//para poder usar await la funcion debe estar marcada como asincrona	

}

obtenerPersonajes()

/*no todos los navegadores lo soportan
pollyfill*/

/*=======================================
RENDER EN PANTALLA
Agregando al html datos de la clase
=======================================*/

//Variables
var temaClase = "Async Await";
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
===============================================================================
IDEAS CLAVES
-------------
=> Async Await, forma sencilla de realizar tareas asincronas
=> Es importante pensar en arrays a la hora de usar async await
=>
=>
=>

DESAFIO PERSONAL
mostrar los personajes en pantalla, saludando con su nombre cada uno

Control de errores
-----------------
//
------------------------------
===================================================================================================================== 
*/

/*
//Promesas
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
	var mensajeError = `Malas noticias, hubo un error subiendo el personaje ${id}`;

	console.log(mensajeError);
	alert(mensajeError);
}


/*EJECUCIÓN DE FUNCIONES Y PROMESAS
========================================0*/

obtenerPersonaje(1)
	.then(function (personaje) {
		// la data de personaje la recibimos en resolve(data)
		imprimirInfoPersonajes(personaje)
	})
	.catch(alertarError)
	//no la estamos invocando, la estamos referenciando

	/* Es importante colocar en el parámetro de la funcion donde buscamos que se ejecute de manera sincronica otra funcion que NO se este ejecutando directamente; puede ser la referencia a la función o su declaración*/


/*=======================================
RENDER EN PANTALLA
Agregando al html datos de la clase
=======================================*/

//Variables
var temaClase = "Promesas";
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
=> Pensemos las promesas como valores que aun no conocemos

=> Cómo la promesa de que ahi va a haber un valor una vez una accion asincrona suceda y se resuelva

=> La promesa empieza en un estado pending, de alli puede pasar a un estado fulfilled si todo esta ok, y si no a un estado rejected

=> Podemos encadenar promesas

=> Las funciones pueden funcionar de manera asincrona y sincrona


promesas.estado {
	pending(pendiente)
	
	//si se resuelve pasa a :
	fulfilled => .then (valor esperado => ...)
		//el primer parametro de la funcion .then es el valor que esperabamos

	//si no:
	rejected => .catch(err => ...)
}


Control de errores
-----------------
//
------------------------------
===================================================================================================================== 
===================================================================================================================== 
*/

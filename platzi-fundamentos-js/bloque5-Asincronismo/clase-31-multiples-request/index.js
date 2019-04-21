/*
//Multiples Request
*/


//Imprimiendo algo en la consola
console.log("inicializando archivo");


/*
Para realizar un request siempre es necesario saber la url a la cual queremos acceder
*/

const API_URL = "https://swapi.co/api/";
const PEOPLE_URL = "people/:id";
const LUKE_URL = `${API_URL}${PEOPLE_URL.replace(":id","1")}`
const options = {crossDomain: true};

function obtenerPersonaje(id) {
	const url = `${API_URL}${PEOPLE_URL.replace(":id",id)}`
	$.get(url, options, onPeopleResponse)
	//parametros:  url, pagina a donde va , callback success function, dataType

}

var personajesRender = document.getElementById("output");


// $ es el objeto jquery

const onPeopleResponse = function(character) {

	saludo = `Hola, soy ${character.name}`
	console.log(saludo)
	//Estoy imprimiendo en el document body el mismo saludo que va a la consola
	personajesRender.innerHTML += `<h4>${saludo}</h4>`

}

//Haciendo un ciclo para llamar a los personajes por su Id
for (var i = 0; i < 20; i++) {
	obtenerPersonaje(i);
}

/*=======================================
Agregando al html datos de la clase
=======================================*/

var temaClase = "Múltiples Request";
var titulo = document.getElementById("title")
var contenidoClase = document.getElementById("contenido-clase")

titulo.innerHTML=  temaClase;
contenidoClase.innerHTML= temaClase;

//contenido

var apuntes = document.getElementById("apuntes")
var textoContenido = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 

apuntes.innerHTML = `${textoContenido}`;

/* 
IDEAS CLAVES
-------------
=> Javascript enviara los datos requeridos de manera asincronica
=> El orden y tiempo de respuesta dependerà del servidor


Control de errores
-----------------
//
------------------------------*/
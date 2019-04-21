/*
//Callbacks

//un cdn es un content delivery network
Es decir un servidor que nos provee un servicio de datos desde la locacion mas cercana en el planeta a nuestro ip

*/


/*
Para realizar un request siempre es necesario saber la url a la cual queremos acceder
*/

const API_URL = "https://swapi.co/api/";
const PEOPLE_URL = "people/:id";
const LUKE_URL = `${API_URL}${PEOPLE_URL.replace(":id","1")}`
const options = {crossDomain: true};

// $ es el objeto jquery

const onLukeResponse = function(luke) {
	console.log(`Hello, i am ${luke.name} the ${luke.gender} of my house.`)
	//esta funcion recibe un objeto, un string y un request
}


$.get( LUKE_URL,  options, onLukeResponse )
//parametros:  url, pagina a donde va , callback success function, dataType

//la funcion superior solo se ejecuta si el request es exitoso

//arguments es una variable que tienen todas las funciones con los parametros o argumentos que recibe la funcion

//Un callback es una funcion que se va a ejecutar en algun futuro (o no) y que no sabemos cuando pero la llama otra funcion, un request



//Imprimiendo algo en la consola
console.log("inicializando archivo");

/*Declaración de prototipos
=========================================*/



/* Prototipo Persona 
====================================================*/

//clase prototipal
class Persona {

	/*ATRIBUTOS
	============================*/
		constructor(nom, ape, alt) {
		//para guardarlo en la memoria usamos this

		//this.nombre declara el nombre clave del valor
		this.nombre = nom;
		//nom es un valor que va en funcion de los parametros del prototipo
		this.apellido = ape;
		
		this.altura = alt;

		this.alta = 1.70;
	     
		//return this; implicitamente es retornado

	}

	/*METODOS
	============================*/

	//acà no hace falta la palabra function
	saludar(responderSaludo) {

		//desestructurando el objeto para sacar los atributos que me interesa
		var {nombre, apellido} = this;

		// var nombre = this.nombre
		// var apellido = this.apellido

		console.log(`${nombre}: Hola, me llamo ${nombre} ${apellido}`)

		//si se envio algo como parametro este bloque de codigo sera verdadero y se ejecutara
		if (responderSaludo) {
			responderSaludo(nombre, apellido, false)
		}

		/*
		Hay valores que siempre se comportan como verdadero, otros como falso

		ejemplo: un array, un objeto, un string con texto
		ejemplo de no: nada, undefined, null, 0
		*/
	}

	esAlto() {
		return this.altura > this.alta;
	}

	esBajo() {
		return !this.esAlto(); 
	}
}


/*Clase Desarrollador
================================================= */

//para heredar diremos que extiende cosas de personas
class Desarrollador extends Persona {


	/*ATRIBUTOS
	============================*/
	constructor( nom, ape, alt ) {


		//antes de usar this debemos llamar al constructor de la clase padre
		super(nom,ape, alt)
		//estos parametros son los mismo de la clase padre

		//super permite llamar a la clase padre
	}

	/*METODOS
	============================*/
	saludar(responderSaludo) {

		//desestructurando el objeto para sacar los atributos que me interesa
		var {nombre, apellido} = this;

		console.log(`${nombre}: Hola Mundo, me llamo ${nombre} ${apellido} y soy dev.`)

	//si se envio algo como parametro este bloque de codigo sera verdadero y se ejecutara
		if (responderSaludo) {
			responderSaludo(nombre,apellido,true)
		}
	}
	//OUTPUT Ej: Hola Mundo, me llamo Jesùs Fernandez y soy dev.
}

/*Clase Estudiante
================================================= */

class Estudiante extends Persona {

	/*ATRIBUTOS
	============================*/
	constructor( nom,ape,alt ) {

		super( nom,ape,alt )
		//llamando parametros del padre
	}

	/*METODOS
	============================*/
	gritar() { 
		window.alert("MAÑANA TENGO EXAMEN") 
	}

	saludar(responderSaludo) {


		//desestructurando el objeto para sacar los atributos que me interesa
		var {nombre, apellido} = this;

		console.log(`${nombre}: Holii, soy ${nombre} ${apellido} y estudio en el cole jeje`);

		//si se envio algo como parametro este bloque de codigo sera verdadero y se ejecutara
		if (responderSaludo) {
			responderSaludo(nombre,apellido,false, true)
			//false a esDev, true a esEstudiante
		}
	}

	
}


/*Declaración de objetos
=========================================*/

//Un Array donde coleccionare las personas que cree
var personas = [] 

personas.push(  daniel = new Desarrollador("Daniel", "Páez", 1.73) )
personas.push(  mariaV = new Estudiante("Maria", "Victoria", 1.65) )
personas.push(  amanda = new Persona("Amanda", "Páez", 1.62) )
	

/*Declaración de variables y Arrays
=========================================*/
//Null


/*Declaración de funciones
=========================================*/

function responderSaludo(nombre,apellido, esDev, esEstudiante) {
	console.log(`Anfitrión: Buen dia ${nombre} ${apellido}`)

	if(esDev) {
		console.log(`Anfitrión: Ah mirá, no sabía que vos eras Dev.`)
	}
	if (esEstudiante) {
		console.log(`Anfitrión: Oye, ¿Y que tal el colegio?`)
		console.log(`${nombre}: Geniaaaaaaal`)
	}
}


/*Consola y consultas
=========================================*/
//Null


/*Ejecución de funciones y métodos
=========================================*/

for(var persona of personas)
{	

	//filtrando, todos menos una persona en concreto
	if (persona) {

	//estoy pasando una funcion como parametro
	//persona.saludar(responderSaludo);
	//this is like write this three times amanda.saludar();
	
	}
	
}


/* 
IDEAS CLAVES
-------------
=> Puedo pasar funciones como parametros de otra función
=> Mientras sea legible siempre es bueno limpiar codigo
=>
=>

Aprendi a ejecutar esas funciones que llegan como parametro

simplemente ponemos los parantesis de ejecucion

Control de errores
-----------------
//Me equivoque con la invoacion inicla de la funcion como parametro porque no coloque el this en  el cuerpo de su funcion y la funcion de las clases
//
------------------------------*/
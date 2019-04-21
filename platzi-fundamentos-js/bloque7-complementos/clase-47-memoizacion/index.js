/*
Autor: Daniel Páez
URL Autor:  heysoypaez.com
Tema de la clase: Uso de la fecha en javascript
Descripción: Aprovechando el objeto Date() para hacer calculos conzz
URL código: github.com/heysoypaez
*/

/*
factorial de 6 es:

6*5*4*3*2*1
10 * 9 * 8 * 7 * 6*5*4*3*2*1

si calculamos el factorial de 12 tambien estamos calculando en factorial de 6



nuestro caso base es 1
*/





/*PROTOCOLO DE VERIFICACIÓN DE FUNCIONAMIENTO
==================================*/
//Imprimiendo algo en la consola
console.log("inicializando archivo");


/*DECLARACIÓN DE OBJETOS
============================*/		

/*DECLARACIÓN DE VARIABLES
==================================*/
const valorUsuario = prompt("¿Cual es el nùmero del factorial?")

//Variables de la funcion factorial
let numero


/*DECLARACIÓN DE FUNCIONES
========================================================*/


function factorial(numero) {

	//cada funcion puede tener atributos internos tambien
	if (!this.cache) {
		//si no hay una cache de esta funcion, creala
		this.cache = {}
	}

	debugger
	
	if (this.cache[numero]) {
		//si ya hay en la cache un numero lo retornamos y listo papá
		return this.cache[numero]
	}

	// caso base
	if (numero === 1){
		return 1
	}

	// caso recursivo
	this.cache[numero] = numero * factorial(numero - 1)	
	//guardando en cache el numero

	debugger

	return this.cache[numero]
	
}



/*EJECUCIÓN DE FUNCIONES Y PROMESAS
========================================0*/
console.log( factorial(valorUsuario) )

/*=======================================
RENDER EN PANTALLA
Agregando al html datos de la clase
=======================================*/

//Variables
let temaClase = "Memoización";
let titulo = document.getElementById("title")
let contenidoClase = document.getElementById("contenido-clase")

//Variables reasignadas
titulo.innerHTML=  temaClase;
contenidoClase.innerHTML= temaClase;

//contenido de la clase

let apuntes = document.getElementById("apuntes")
let textoContenido = "=> Reduce al minimo el alcance de cada una de las variables a menos que tenga un objetivo concreto" 

apuntes.innerHTML = `${textoContenido}`;

/*
===============================================================================
IDEAS CLAVES
-------------
=> ¿Que es recursividad?
=> ¿Para que me sirve? ¿Como lo puedo utilizar?
=> 

Memoizacionn es ahorrar procesamiento
ahorrar computo


Control de errores
-----------------
//
------------------------------
===================================================================================================================== 
*/

/*
Autor: Daniel Páez
URL Autor:  heysoypaez.com
Tema de la clase: Contexto al llamar una funcion en javascript
Descripción: Contexto al llamar una funcion en javascript
URL código: github.com/heysoypaez
*/

/*PROTOCOLO DE VERIFICACIÓN DE FUNCIONAMIENTO
==================================*/
console.log("Inicializando archivo")


/*DECLARACIÓN DE OBJETOS
============================*/		


/*DECLARACIÓN DE VARIABLES
==================================*/






/*DECLARACIÓN DE FUNCIONES
========================================================*/
	
	let nombre = "Daniel";

	//Caso 1 vital del ;
	console.log("epa");
	[1,2,3]


	//Caso 2 vital del ;

	console.log(`eloaaa`);
	`${nombre} es un desarrollador`

	//

	function doble(numero) {
		// pilas con este enter
		return {
			original: numero, doble: numero * 2
		}
	}

/*EJECUCIÓN DE FUNCIONES Y PROMESAS
========================================0*/

/*=======================================
RENDER EN PANTALLA
Agregando al html datos de la clase
=======================================*/

//Variables
let temaClase = "Contexto en funciones en javascript";
let titulo = document.getElementById("title")
let contenidoClase = document.getElementById("contenido-clase")

//Variables reasignadas
titulo.innerHTML=  temaClase;
contenidoClase.innerHTML= temaClase;

//contenido de la clase

let apuntes = document.getElementById("apuntes")
let textoContenido = "Contexto en javascript es saber quien es el objeto this. Sobre cual objeto se está ejecutando una función." 

apuntes.innerHTML = `${textoContenido}`;

/*
===============================================================================


*/

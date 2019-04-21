/*
Autor: Daniel Páez
URL Autor:  heysoypaez.com
Tema de la clase: Uso de la fecha en javascript
Descripción: Aprovechando el objeto Date() para hacer calculos conzz
URL código: github.com/heysoypaez
*/

/*Pseudocodigo de mi programa

	15 |_4____

15 - 4 = 11 1
11 - 4 = 7 1
7 - 4 = 3 1
fin

mientras el dividendo sea mayor o igual que el divisor restamos


ubic
enviar certf
*/




/*PROTOCOLO DE VERIFICACIÓN DE FUNCIONAMIENTO
==================================*/
//Imprimiendo algo en la consola
console.log("inicializando archivo");


/*DECLARACIÓN DE OBJETOS
============================*/		

/*DECLARACIÓN DE VARIABLES
==================================*/


/*DECLARACIÓN DE FUNCIONES
========================================================*/

function divisionEntera(dividendo, divisor) {

	/* La recursividad implica dos cosas
	un ca,so base y un caso recursivo

	*/
	let i = 0;
	let casoBase = dividendo < divisor
	/*Caso base es cuando el diviendo es menor que el divisor*/

	if(casoBase) {
		return 0
	}
	
		return 1 + divisionEntera(dividendo - divisor, divisor)
	

}

/*EJECUCIÓN DE FUNCIONES Y PROMESAS
========================================0*/

console.log(divisionEntera(400, 12))


/*=======================================
RENDER EN PANTALLA
Agregando al html datos de la clase
=======================================*/

//Variables
let temaClase = "Funciones recusirvas";
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


Control de errores
-----------------
//
------------------------------
===================================================================================================================== 
*/

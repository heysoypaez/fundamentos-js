/*
Autor: Daniel Páez
URL Autor:  heysoypaez.com
Tema de la clase: Uso de la fecha en javascript
Descripción: Aprovechando el objeto Date() para hacer calculos conzz
URL código: github.com/heysoypaez
*/

/*PROTOCOLO DE VERIFICACIÓN DE FUNCIONAMIENTO
==================================*/
//Imprimiendo algo en la consola
console.log("inicializando archivo");


/*DECLARACIÓN DE OBJETOS
============================*/		

/*DECLARACIÓN DE VARIABLES
==================================*/

//Variables constantes
const saludoArgentino = crearSaludo("che");
const saludoVenezolano = crearSaludo("pana");
const saludoColombiano = crearSaludo("parce");
const saludoChileno = crearSaludo("weon");
const saludoMexicano = crearSaludo("güey");

/* La variable saludo argentino esta recordando el argumento de crearSaludo */


/*DECLARACIÓN DE FUNCIONES
========================================================*/

//funcion creadora
function crearSaludo(finalDeFrase) {

	

	//funcion anonima
	return function (nombre) {
		// body...
		console.log(`Epa ${nombre} ${finalDeFrase}`)
	}

	
}


function funcionPadre(nombre) {
  
/*Esta funcion hijo es el closure
la funcion que recuerda el "estado de las cosas" de la función padre*/

 return function funcionHijo(apellido) {
   alert(`Soy ${nombre} ${apellido}.`) 
   }

}
const gerardo = funcionPadre("Gerardo")

//El argumento López funcionará como argumento de la función hijo
gerardo("López")





/*EJECUCIÓN DE FUNCIONES Y PROMESAS
========================================0*/

//¿Cuando accedemos o como al argumento nombre?
saludoArgentino("Sacha")
saludoVenezolano("Daniel")



/*=======================================
RENDER EN PANTALLA
Agregando al html datos de la clase
=======================================*/

//Variables
let temaClase = "Entendiendo los closures de javascript";
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
=> Entender un closure me hara dominar el lenguaje de una manera diferente
=> ¿Que es un closure?

Es una funcion que recuerda el estado de las cosas cuando fue invocada

=> ¿Para que me sirve? ¿Como lo puedo utilizar?
=> 



Control de errores
-----------------
//
------------------------------
===================================================================================================================== 
*/

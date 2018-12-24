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

const daniel =  {

	nombre: "Daniel",
	apellido: "Páez"	

}

const mario = {

	nombre: "Mario",
	apellido: "Luna"
}

const elQueLlegaTarde = {
	nombre : "El que llega tarde"
}

/*DECLARACIÓN DE VARIABLES
==================================*/

//Ahora this es Daniel
const saludarADaniel = saludar.bind(daniel)

//Ahora this es Mario
const saludarAMario = saludar.bind(mario)

const saludarJoven = saludar.bind(elQueLlegaTarde)

const segundo = 1000




/*DECLARACIÓN DE FUNCIONES
========================================================*/



//Esta funcion es un metodo del objeto window

/*Todo objeto es subclase de otro objeto*/
function saludar(saludo = "Hola") {
	//debugger
	console.log(`${saludo}, soy ${this.nombre}`)
}


/*El primer parametro de bind es el contexto this
el resto son los argumentos normales*/
setTimeout(	 saludar.bind(elQueLlegaTarde, "Epa Mijo")  , 2 * segundo  )




/*EJECUCIÓN DE FUNCIONES Y PROMESAS
========================================0*/

saludarADaniel()
saludarAMario()

//call, cambia el contexto de la funcion y la ejecuta de inmediato
saludar.call(daniel, "Hola, de nuevo")

// apply funciona como call y entrega los argumentos como arrays
saludar.apply(mario, ["AH VAINA MIJO"])

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

Contexto en javascript es saber quien es el objeto this. Sobre cual objeto se está ejecutando una función.

No saber quien es this es un error común


Manejar quien es this en javascript es algo vital
Prestar atencion a ello es vital para evitar errores
sobretodo en javascript asincrono




¿Sabes quien es this pero necesitas cambiarlo?

Existen tres estrategias claves

.bind(new This, args)
.bind devuelve una referencia de la función con el nuevo this y recibe los argumentos de la funcion


.call(new This, args)
.call ejecuta inmediatamente la función con el nuevo this y recibe los argumentos de la funcion




.apply(new This, [args] )
.apply()  ejecuta inmediatamente la función con el nuevo this y recibe los argumentos de la funcion en un array

,

¿No sabes quien es this durante una ejecución?
Usa el debugger y tendrás más claridad


*/

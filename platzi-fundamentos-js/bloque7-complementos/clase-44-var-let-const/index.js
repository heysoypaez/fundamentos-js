/*
Autor: Daniel Páez
URL Autor: Daniel Páez
Tema de la clase: var, let, const
Descripción: var, let, const
URL Autor:  heysoypaez.com
URL código: github.com/heysoypaez
*/

/*PROTOCOLO DE VERIFICACIÓN DE FUNCIONAMIENTO
==================================*/
//Imprimiendo algo en la consola
console.log("inicializando archivo");


/*DECLARACIÓN DE OBJETOS
============================*/		
let daniel = {
		nombre: "Daniel",
		apellido: "Pàez",
		edad: 18

	}

/*DECLARACIÓN DE VARIABLES
==================================*/
//Null

/*DECLARACIÓN DE FUNCIONES
========================================================*/


/*FUNCION PARA VER SI ES MAYOR DE EDAD
incluyendo las buenas prácticas de let*/

function esMayorDeEdad(persona) {

	/*DECLARACIÓN DE VARIABLES CONSTANTES
	======================================*/
	const MAYORIA_DE_EDAD = 18;
	//En const no podemos volver a asignar el valor de la variable.

	/*DECLARACIÓN DE VARIABLES REASIGNABLES
	======================================*/
	let mensaje
	let mensaje2
	/* El alcance donde podemos acceder a esta varible se reduce al bloque de codigo donde fue creado. */

	/*EJECUCION DE LA LÓGICA
	========================*/

	//siempre que sea efectivo evita magic numbers
	if (persona.edad >= MAYORIA_DE_EDAD ) {

		mensaje = "Es mayor de edad"

	}

	else {

		mensaje = "Es menor de edad"
		mensaje2 = "Otro mensaje"

	}

	/*OUTPUT, MOSTRAR
	==================*/
	return console.log(mensaje, mensaje2)
}


/*EJECUCIÓN DE FUNCIONES Y PROMESAS
========================================0*/

//funcion 1
esMayorDeEdad(daniel)


//funcion 2
for (let i = 0; i <= 3 ; i++) {
	//js agrega a i despues del primer ciclo
	console.log(i)

}


//Fijate como el valor de esta variable i es independiente a la del ciclo for
let i;

console.log(`Terminó el for el valor de i es ${i}`)



/*=======================================
RENDER EN PANTALLA
Agregando al html datos de la clase
=======================================*/

//Variables
let temaClase = "Var, let y const";
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
=> Reduce al minimo el alcance de cada una de las variables a menos que tenga un objetivo concreto
=> ¿por que?
	=> porque evitaremos bugs como que una variable tenga un valor por defecto cuando no deberia tener
	=> Porque el bloque de codigo no afectara otros bloques de codigo directamente

=> utiliza let por defecto si tienes que reasignar la variable
=>  si nunca es necesario reasginar usa const
=> ¿ Evitamos var ?


/*
cuando declaramos variables con let es
facil reasignar el valor

let año = 5
año = 3

es lo mismo que
let año = 3
let año = 8

siempre conviene declarar las variables al 
inicio del bloque de codigo en cuestion


javascript eleva la declaracion de variables
pero no les asigna valor a menos que corresponda






Control de errores
-----------------
//
------------------------------
===================================================================================================================== 
*/

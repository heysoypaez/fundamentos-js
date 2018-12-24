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
let daniel = {
		nombre: "Daniel",
		apellido: "Pàez",
		edad: 18,
		nacimiento: new Date(2000,2,15),
		llegaChile: new Date(2017,8,5)

	}

let betsabet = {
		nombre: "Betsabet",
		apellido: "Soto",
		edad: 18,
		nacimiento: new Date(1979,4,10)

	}

/*DECLARACIÓN DE VARIABLES
==================================*/
const hoy  =  new Date();
let texto;


/*DECLARACIÓN DE FUNCIONES
========================================================*/

function diasEntreFechas(texto, fecha1, fecha2) {

	/*DECLARACION DE VARIABLES
	===========================*/
	const unDia = 1000 * 60 * 60 * 24;
	const unAño = unDia * 365;
	//return 86 400 000

	const diferencia = Math.abs(fecha1 - fecha2);
	//podemos restar o sumar las fechas
	//con Math.abs() recibo el valor absoluto

	const diferenciaEnDias = Math.round(diferencia / unDia);
	//esto convertira un tiempo expresado en Mseg a Dias

	const diferenciaEnAños = (diferencia / unAño).toFixed(1);

	let mensaje = `Respecto a ${texto} Hay ${diferenciaEnDias} días de diferencia y ${diferenciaEnAños} años.`;


	/*OUTPUT, MOSTRAR EN PANTALLA
	================================*/

	console.log(mensaje);


}	


/*EJECUCIÓN DE FUNCIONES Y PROMESAS
========================================0*/


diasEntreFechas("mi fecha de nacimiento", hoy, daniel.nacimiento)
diasEntreFechas("mi fecha de llegada a Chile", hoy, daniel.llegaChile)
diasEntreFechas("la fecha de nacimiento de Betsabet", hoy, betsabet.nacimiento)




/*=======================================
RENDER EN PANTALLA
Agregando al html datos de la clase
=======================================*/

//Variables
let temaClase = "¿Hace cuanto naciste?";
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
=> 


Control de errores
-----------------
//
------------------------------
===================================================================================================================== 
*/

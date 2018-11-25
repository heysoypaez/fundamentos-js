/*

Mis principios de programacion:
1. Un programador divide problemas grandes en problemas chiquitos
2. Cada 4 lineas de codigo comento mi codigo
*/

//Imprimiendo algo en la consola
console.log("inicializando archivo");

/*Declaración de objetos
=========================================*/

//Nulo

/*Declaración de variables
=========================================*/

var contador = 0;
var veces;

/*Declaración de funciones
=========================================*/

//crearemos una funcion que nos dire si esta lloviendo, sabiendoo que llueve el 25% de las veces

/*function llueve() {
	return Math.random() < 0.25;
}*/

//version Arrow Function
const llueve = () => Math.random() < 0.25;


//Cuenta mientras no deje de llover
do {

//debugger

	contador++

}
 while( !llueve() );
//Si no llueve esto se dejara de ejecutar

if ( contador === 1 ) {
	veces = "vez";
}
else {
	veces = "veces"
}


/*Consola y consultas
=========================================*/
console.log(`Fui a ver si llovia ${contador} ${veces}`)	

/*Ejecución de funciones
=========================================*/


/*Render en pantalla
=========================================*/

var render = document.getElementById("output");
render.innerHTML =  `Fui a ver si llovia ${contador} ${veces}`;

/* 
IDEAS CLAVES
-------------
=> Con Do While el codigo se ejecuta al menos una vez
------------------------------*/

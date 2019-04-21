/*
Mis principios de programacion:
1. Un programador divide problemas grandes en problemas chiquitos
2. Cada 4 lineas de codigo comento mi codigo


//Clases en Js

A partir del 2015 js se actualiza año tras año con ECMA script

Por debajo siguen siendo todos prototipos

*/

//Imprimiendo algo en la consola
console.log("inicializando archivo");

/*Declaración de prototipos
=========================================*/
/*Ideas claves

Los prototipos son un objeto más de javascript.

*/



/* Prototipo Persona 
====================================================*/

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
	saludar() {
		console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
	}

	esAlto() {
		return this.altura > this.alta;
	}

	esBajo() {
		return !this.esAlto(); 
	}
}



//=========================================================

/*
¿Como logramos que una clase por ejemplo desarrollador, herede cualidades de otra clase por ejemplo persona

ten en cuenta que en el fondo todo siguen siendo prototipos!
*/

//Crearemos un subtipo de persona, un objeto "desarrollador"


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
	saludar() {
	console.log(`Hola Mundo, me llamo ${this.nombre} ${this.apellido} y soy dev.`)
	}
	//OUTPUT Ej: Hola Mundo, me llamo Jesùs Fernandez y soy dev.
}

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

	saludar(){
		console.log(`Holii, soy ${this.nombre} ${this.apellido} y estudio en el cole jeje`);
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
//Null


/*Consola y consultas
=========================================*/
//Null


/*Ejecución de funciones y métodos
=========================================*/

for(var persona of personas)
{
	persona.saludar();
	//this is like write this three times amanda.saludar();
	
	persona.esAlto();

}


/* 
IDEAS CLAVES
-------------
=> Por Dentro js sigue funcionando con prototipos, esto en realidad son clases prototipales
=> Extends extiende , es decir hereda, atributos de una clase a otra
=> Super te permite llamar al constructor de la clase superio


Control de errores
-----------------
//no me funcionó la clase Prot Desarrollador porque no llame el constructor de la clase superiorr

//No me funcionaba porque coloque el nombre de la clase en vez de this
------------------------------*/
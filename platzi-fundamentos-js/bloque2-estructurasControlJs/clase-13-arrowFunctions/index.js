/*

Mis principios de programacion:
1. Un programador divide problemas grandes en problemas chiquitos
2. Cada 4 lineas de codigo comento mi codigo
*/

//Imprimiendo algo en la consola
console.log("inicializando archivo");

/*Declaración de objetos
=========================================*/

//Creando el objeto persona
var daniel = {
	nombre: "Daniel",
	apellido: "Páez",
	edad: 18,

//Creando el atributo profesion donde contenemos las profesiones que ejerce el objeto persona
	profesion: {

		ingeniero: true,
		abogado: false,
		diseñador: false,
		marketer: false,
		web: true
		//profesion: valor booleano

	}
	
}

//Otro objeto persona, similar al anterior
var javier = {
	nombre: "Javier",
	apellido: "Carrasquero",
	edad: 8,
	//profesión no aplica
}

//esta variable es mas bien una constante
const MAYORIA_DE_EDAD = 18;



/*Declaración de funciones
=========================================*/

 //Colocando dentro de una variable una funcion, version 1.0 mi funcion
var esMayorDeEdad = function (persona) {
//funcion anonima, no tiene un nombre, para invocarla se invoca a la variable
	
	return persona.edad >=  MAYORIA_DE_EDAD;
	//para retornarla tenemos que colocar return
}

/*ARROW FUNCTION version 2.0*/
var esMayorDeEdad = (persona) => {
//arrow function, no tiene un nombre, para invocarla se invoca a la variable donde va la funcion, parametro, cuerpo
	
	return persona.edad >=  MAYORIA_DE_EDAD;
	//para retornarla tenemos que colocar return
}

//EXTREME ARROW FUNCTION version 3.0 de mi funcion
var esMayorDeEdad = ({ edad }) =>  edad >=  MAYORIA_DE_EDAD;


//RETO Funcion esMenorDeEdad
const esMenorDeEdad = (persona)  => !esMayorDeEdad(persona);
/*
mi variable es igual a la funcion donde
contiene el parametro
en este caso el objeto persona
donde ejecutaremos la inversa del resultado
de la funcion es mayor de edad
*/

//funcion para imprimir en consola si el objeto persona es mayor de edad
function imprimirSiEsMayorDeEdad(persona) {

	//Daniel es mayor de edad
	if ( esMayorDeEdad(persona) ) {
		console.log(`${persona.nombre} es mayor de edad`)
	}

	//Daniel es menor dde edad
	else {
		console.log(`${persona.nombre} es menor de edad`)
	}
}

//Esta funcion permite acceso al usuario si es Mayor de edad
function permitirAcceso(persona) {
	if (!esMayorDeEdad(persona) ) {
		//imprimir en consola acceso denegado
		console.log("ACCESO DENEGADO :( ")
	}
	else {
		//imprimir en consola acceso aprobado
		console.log("ACCESO APROBADO");
	}
}


/*Ejecución de funciones
=========================================*/

permitirAcceso(daniel)
permitirAcceso(javier)
imprimirSiEsMayorDeEdad(daniel)


/* 
IDEAS CLAVES
-------------
=> Descomponer tu codigo en mini funciones te permite que:

	1 tu codigo sea mas legible
	2 tu codigo sea mas reutilizable
	3 tu codigo sea mas escalable


=> Podemos asignar a una variable una funcion
  no todos los programas permiten eso 

=> Cada numero suelto deberia ser una variable con 
un nombre que la describa


CONTROL DE ERRORES, FALLOS
=> Simplemente se me habia olvidado pedir el parametro en la linea 81

RETO
escribir la funcion es menor de edad como arrow function
donde retorne la negacion a la llamada es mayor de edad
------------------------------*/

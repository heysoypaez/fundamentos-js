/*

En el navegador el objeto global donde esta mi variable es en
window.miVariable

Existen parametros como valor y parametros como referencia

*/

//Imprimiendo algo en la consola
console.log("inicializando archivo");


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

var javier = {
	nombre: "Javier",
	apellido: "Carrasquero",
	edad: 8,
	//profesión no aplica
}

//esta variable es mas bien una constante
const MAYORIA_DE_EDAD = 18;

function esMayorDeEdad(persona) {
	//para retornarla tenemos que colocar return
	

	return persona.edad >=  MAYORIA_DE_EDAD;
	//magic number, ¿Que significa ese numero?
		
}

//funcion para imprimir en consola si el objeto persona es mayor de edad
function imprimirSiEsMayorDeEdad(persona) {

	//Daniel es mayor de edad
	if ( esMayorDeEdad(persona) ) {
		console.log(`${persona.nombre} es mayor de edad`)
	}

	//Daniel es menor de edad
	else {
		console.log(`${persona.nombre} es menor de edad`)
	}
}

/* 
Descomponer tu codigo en mini funciones te permite que
1 tu codigo sea mas legible
2 tu codigo sea mas reutilizable
3 tu codigo sea mas escalable


--
Cada numero de suelto deberia ser una variable con un nombre que la describa
*/
/*

En el navegador el objeto global donde esta mi variable es en
window.miVariable

Existen parametros como valor y parametros como referencia

*/

//Imprimiendo algo en la consola
console.log("inicializando archivo");



//
var daniel = {
	nombre: "Daniel",
	apellido: "Páez",
	edad: 18,

	profesion: {
		ingeniero: true,
		abogado: false,
		diseñador: false,
		marketer: false,
		web: true
	}
	
}

function imprimirProfesiones(persona) {

	console.log(`${persona.nombre} es:`);

	if (persona.profesion.ingeniero) {
		console.log("ingeniero");
	}

	else {
		console.log("No es ingeniero")
	}

	if (persona.profesion.abogado) {
		console.log("abogado");
	}

	if (persona.profesion.diseñador) {
		console.log("diseñador");
	}

	if (persona.profesion.marketer) {
		console.log("marketer");
	}

	if (persona.profesion.web) {
		console.log("web");
	}
	

	//template string	
}
imprimirProfesiones(daniel);


/*
Desafio

Imprimir si es mayor de edad
//Sacha es mayor de edad, Sacha es menor de edad

18
*/

var daniel = {

	nombre: "Daniel",
	apellido: "Páez",
	edad: 18,
	hombre: true,
	mujer: !this.hombre

}

var amanda = {

	nombre: "Amanda",
	apellido: "Páez",
	edad: 12,
	hombre: false,
	mujer: !this.hombre
	
}

var vladimiro = {

	nombre: "Vladimiro",
	apellido: "Guerrini",
	edad: 45,
	hombre: true,
	mujer: !this.hombre
	
}

var marcos = {

	nombre: "Marcos",
	apellido: "Gutierrez",
	edad: 17,
	hombre: true,
	mujer: !this.hombre
	
}




function inmprimirSiEsMayorDeEdad(persona) {
	
	if (persona.edad >= 18) {

		if (persona.hombre) {

			console.log(`Oh Señor, ${persona.nombre} ya es un hombrecito mayor de edad`)
		}
		else {
			console.log(`Oh Señor, ${persona.nombre} ya es una mujercita mayor de edad`)
		}
		
	} 
	else {
		if (persona.hombre) {
			console.log(`${persona.nombre} es un niño... No puede pasar`)
		}
		else {
			console.log(`${persona.nombre} es una niña... No puede pasar`)
		}
		
	}
}

inmprimirSiEsMayorDeEdad(amanda)
inmprimirSiEsMayorDeEdad(daniel)
inmprimirSiEsMayorDeEdad(vladimiro)
inmprimirSiEsMayorDeEdad(marcos)


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

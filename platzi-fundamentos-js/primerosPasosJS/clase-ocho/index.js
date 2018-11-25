/*

En el navegador el objeto global donde esta mi variable es en
window.miVariable

Existen parametros como valor y parametros como referencia

*/

//Imprimiendo algo en la consola
console.log("inicializando archivo");

var daniel = {

	nombre: "Daniel",
	apellido: "Páez",
	edad: 18

}

function cumpleanos (persona) {
 	
	return {
		//aqui estamos desglosando el objeto persona
		...persona,
		edad: persona.edad + 1
		//aqui hacemos que el objeto no se modifique
		//si lo quitamos los efectos de la funcion se mantendran
	}

 	persona.edad = persona.edad + 1;


 	console.log(`Cumplirás ${persona.edad} años el próximo año`)

}


//cumpleanos(daniel);

function cumpleanosBeta (edad) {
 
 	edad = edad + 1;


 	console.log(`Cumplirás ${edad} años el próximo año`)

}

cumpleanosBeta(daniel.edad);

/*
Su esperanza es que insistiendo yo cambie mi conducta
pero no, si estoy haciendo algo concreto no existo

algo concreto importante para mi

javascript se comporta distinto con los objetos
javascript acumula valores dentro y fuera del alcance de una funcion


*/
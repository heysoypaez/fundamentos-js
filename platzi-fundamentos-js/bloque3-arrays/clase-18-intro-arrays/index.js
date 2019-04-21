/*

Mis principios de programacion:
1. Un programador divide problemas grandes en problemas chiquitos
2. Cada 4 lineas de codigo comento mi codigo

//array

colección de datos

crearemos una colección
e iteraremos por cada uno de los elementos en la coleccion

*/

//Imprimiendo algo en la consola
console.log("inicializando archivo");



/*Declaración de objetos
=========================================*/

//estoy creando personas
var daniel = {
	nombre: "Daniel",
	apellido: "Páez",
	estatura: 1.73,
	ubicacion: "chile"
}

var amanda = {
	nombre: "Amanda",
	apellido: "Páez",
	estatura: 1.60,
	ubicacion: "chile"
}

var jonathan = {
	nombre: "Jonathan",
	apellido: "Páez",
	estatura: 1.70,
	ubicacion: "venezuela"
}

var betsabet = {
	nombre: "Betsabet",
	apellido: "Soto",
	estatura: 1.64,
	ubicacion: "chile"
}


/*Declaración de variables
=========================================*/
//pueden ser variables, textos, numeros, objetos, mezclas, funciones
var personas = [ daniel, amanda, jonathan, betsabet ]
var renderEstatura = document.getElementById("info-estatura");
renderEstatura.innerHTML = "";




/*Declaración de funciones
=========================================*/
function mostrarTexto(texto) {
	console.log(texto);
	renderEstatura.innerHTML =  renderEstatura.innerHTML + "<br />" + texto;
}


function mostrarEstaturaDePersonas() {

	for (var i = 0; i < personas.length; i ++) {

		var nombre = personas[i].nombre;
		var estatura = personas[i].estatura;

		texto = `${nombre} mide ${estatura.toFixed(2)} metros`;
		mostrarTexto(texto)
	}
}



/*Consola y consultas
=========================================*/
console.log(personas[0].nombre)
//ambas son equivalentes en la ejecucion
console.log(personas[0]["nombre"])	

/*Ejecución de funciones
=========================================*/
mostrarEstaturaDePersonas()


/* 
IDEAS CLAVES
-------------
=> Con Do While el codigo se ejecuta al menos una vez
=> propiedad length cuantos elementos tiene
=> creamos array
=> iteramos array
------------------------------*/

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
	peso: 55
}

/*Declaración de variables
=========================================*/
var diasDelAño = 365;
var incrementoPeso = 0.200 //0.200 gramos


/*Declaración de funciones
=========================================*/

/**/

//Funcion donde se aumenta el valor del peso del objeto persona
const aumentarDePeso = persona => persona.peso += incrementoPeso;

//Funcion donde se baja el valor del peso del objeto persona
const bajarDePeso = persona => persona.peso -= incrementoPeso;


function cambioPeso(persona) {

	//este codigo se ejecutara TODOS LOS DIAS DEL AÑO
	for(var i = 1; i <= diasDelAño ; i++) {

		var ramdom = Math.random();
		//una variable guarda un numero aleatorio entre 0 y 1

		//este codigo se ejecutara el 25% de las veces
		if( ramdom <= 0.25) {
			//aumenta de peso
			aumentarDePeso(persona)
		}

		else if (ramdom <= 0.50 ) {
			//baja de peso
			bajarDePeso(persona)
		}

	}

}



/*Consola y consultas
=========================================*/
console.log(`Al inicio del año ${daniel.nombre} pesa ${daniel.peso} kg`)	

/*Ejecución de funciones
=========================================*/
 cambioPeso(daniel)

console.log(`Al inicio del año ${daniel.nombre} pesa ${daniel.peso.toFixed(1)} kg`)

/* 
IDEAS CLAVES
-------------
=> 
------------------------------*/

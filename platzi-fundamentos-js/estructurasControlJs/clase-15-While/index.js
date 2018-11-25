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
var incrementoPeso = 0.300 //0.300 gramos

/* Nuestra persona Daniel fue al nutricionista y le dijeron vos tenes que
		bajar 3 kilos cuanto antes*/

	//Por lo tanto
	const META = daniel.peso - 3;
	var diasParaAdelgazar = 0;
	//var diasLimite = 1000;




/*Declaración de funciones
=========================================*/

	/*MODIFICADORES DE MI PESO
	=============================*/

//Funcion donde se aumenta el valor del peso del objeto persona
const aumentarDePeso = persona => persona.peso += incrementoPeso;

//Funcion donde se baja el valor del peso del objeto persona
const bajarDePeso = persona => persona.peso -= incrementoPeso;

//Arrow Funcion Come MMucho
const comeMucho = () => Math.random() < 0.30; //30% del tiempo come mucho

const realizaDeporte = () => Math.random() < 0.40; //40% del tiempo hace deporte

/*========================================*/


function cambioPeso(persona) {

			//Mientras el peso de daniel sea mayor que su peso meta, ejecuta
			while (persona.peso > META /*|| diasParaAdelgazar < diasLimite*/) {

				//debugger

				if ( comeMucho() ) {
					//aumentar de peso
					aumentarDePeso(persona)
				}

				 if ( realizaDeporte() ) {
					//adelgazar
					bajarDePeso(persona)
				}

				diasParaAdelgazar += 1;
				//agrega un dia cada vez que se repita el ciclo
			}
		}




/*Consola y consultas
=========================================*/
console.log(`Al inicio del año ${daniel.nombre} pesa ${daniel.peso} kg`)	

/*Ejecución de funciones
=========================================*/
 cambioPeso(daniel)

if (daniel.peso <= META) {

	console.log(`AL FIN, Despues de ${diasParaAdelgazar} días ${daniel.nombre} pesa ${daniel.peso.toFixed(1)} kg`)
}

else {
	console.log(`ME RINDO, Despues de ${diasParaAdelgazar} días ${daniel.nombre} pesa ${daniel.peso.toFixed(1)} kg`)
}

/* 
IDEAS CLAVES
-------------
=> DEBUGGER
un salva vidas
 el primer boton hace que se siga ejecutando 
 hasta que termine o encuentre otro debugger

 la siguiente lo pasa a la siguiente linea

step te permite seguir al siguiente paso que ejecutara el codigo

los breakpoints te permiten crear mini debuggers


pega, espuma de afeitar
------------------------------*/

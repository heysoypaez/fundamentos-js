/*


funciones son pedazos de codigo reutilizablke
*/

//Imprimiendo algo en la consola
console.log("inicializando archivo");

var  nombre = "Danielito" , edad = 18;

//Definiendo mi función
function imprimirEdad( n,e ) {
	//Dentro del parámetro coloco que variables va a recibir
 	 
 	 //Concatenando variables usando EcmaScript 6
 	console.log(`${n} tiene ${e} años`); 

}

//Con nombre y edad hago referencia a las variables globales fuera de la función
imprimirEdad(nombre,edad);
imprimirEdad("Amanda",12);
imprimirEdad("Betsabet",2018-1979);
imprimirEdad(35,"Tomás")


/*
Las funciones sirven para reutilizar còdigo
Javascript no espera que las cosas siempre esten definifas
*/

/*
Repaso
¿Que aprendi?
A crear una funcion que es un bloque de codigo reutilizable
A pasar parametros a la funcion
La manera tan debilmente tipada en que se trabaja la función en javascript
¿Que logre?
Crear una función que me devuelva una frase con mi edad y nombre
¿Que podre lograr?
Escribir menos codigo para lograr programar más de manera dinamica segun las variables proporcionadas
*/
/*
Entonces los metodos y atributos màs usados para los string son
1. this.toUpperCase()
2. this.toLowercase()
3. this.length
4. this.substr(posicion, movimiento )

//Concatenacion ECMAscript 6

var miVariable =  `${unValor} ${otroValor} ${otroOtroValor}`;


*/

//Imprimiendo algo en la consola
console.log("inicializando archivo");



//Declaracion de variables
var nombre = "Daniel" , apellido = "Páez";

//puedo declarar varias variables en la misma linea, separando con coma



var nombreEnMayusculas = nombre.toUpperCase();
//Con el metodo del string nombre estoy convirtiendo el texto en mayuscula

var apellidoEnMayusculas = apellido.toLowerCase();
//Con el metodo del string nombre estoy convirtiendo el texto en minuscula

var primeraLetraDelNombre = nombre.charAt(0);
//caracter en la posicion, la primera posiciòn siempre es 0

//¿Como se cuantas letras tiene? es decir la longitud del sstring
var cantidadDeLetrasDelNombre = nombre.length;
//Esto es un atributo

console.log(cantidadDeLetrasDelNombre);


//Por convención se usan las comillas simples

var saludo = "Hola " + nombre + " " + apellido;
console.log(saludo);

console.log(nombreEnMayusculas," ", apellidoEnMayusculas);
//El punto y coma es opcional, es una convención

var edad = 17;

//Concatenar string clásico
var nombreCompleto = nombre + " " + apellido;

//Concatenar string 2.0
var nombreCompleto =  `${nombreEnMayusculas} ${apellido} ${edad}`;
//esto interpolara variables


//Acceder a sub String
var subString = nombre.charAt(0) + nombre.charAt(1);
var subString = nombre.substr(0,4)
//Desde donde queremos que empiece y cuantos queremso que tome

//Mi profe es Sasha Lifsyc



//Desafio
/*Mostrarle al Usuario la última letra de su nombre independiente de su nombre
* 1. Declaro la variable nombre
* 2. La ultima letra es igual a la longitud menos 1 (validarlo)
  3. Retornar el valor con la ultima letra del nombre
*
*/

//1. Declaro la variable nombre
function mostrarUltimaLetra(nombre = "Daniel") 
{

	nombre = nombre;

	//2. La ultima letra es igual a la longitud menos 1 (validarlo)
	var ultimaLetra = nombre.length - 1;


	// 3. Retornar el valor con la ultima letra del nombre
	return console.log(`La última letra de tu nombre es ${nombre.charAt(ultimaLetra)}`);
}
mostrarUltimaLetra();


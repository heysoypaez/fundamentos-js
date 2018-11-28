/*

Mis principios de programacion:
1. Un programador divide problemas grandes en problemas chiquitos
2. Cada 4 lineas de codigo comento mi codigo

//Objetos

Objetos:
Hablamos de Prototipos, no de clases

Estas clases son diferente a la clase con herencia de otros lenguajes

clase == prototipo en javascript


*/

//Imprimiendo algo en la consola
console.log("inicializando archivo");

/*Declaración de objetos
=========================================*/


/* Para hacerlo
1. Definimos una funcion con nombre del prototipo
2. dentro colocamos los parametros
3. dentro colocamos metodos y atributos

*/

//Definiendo el prototipo persona
function Persona(nomb, ape, alt) {
	//para guardarlo en la memoria usamos this

	//this.nombre declara el nombre clave del valor
	//nomb es un valor que va en funcion de los paramatros del prototipo

	this.nombre = nom;
	this.apellido = ape;
	this.altura = alt;
	//return this; implicitamente retorn

	//console.log("Me ejecutaron");
}

//Dentro del prototipo de persona va a existir un atributo que va a ser una funcion
Persona.prototype.saludar = function () {
	console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

//Para llamar a la funcion se usa Persona.soyAlto()
Persona.prototype.soyAlto = function (this.altura) { return altura > 1.7}
//retornar la condicion de si es alta


//Un nuevo prototipo de Persona se creo en sacha
var daniel = new Persona("Daniel", "Páez", 1,73)
var mariaV = new Persona("Maria", "Victoria", 165)
var amanda = new Persona("Amanda", "Páez", 1,62)

daniel.saludar(); //metodo saludar
mariaV.saludar();
amanda.saludar();


//new palabra reservada del lenguaje para crear nuevos objetos dado un prototipo

//new + prototipo()  , hace que se cree un nuevo objeto con el prototipo




/*Declaración de variables y Arrays
=========================================*/

/*Declaración de funciones
=========================================*/


/*Consola y consultas
=========================================*/

/* 
IDEAS CLAVES
-------------
=> Para filtrar siempre necesitamos un array y una condicion
=> para filtrar un array llamamos al metodo array.filter(condicion)
=> Cuando filtramos estamos retornando un nuevo array a menos que reescribamos
ejemplo: personas = personas.filter(viveEnChile)


Control de errores
-----------------
//No me funcionaba la funcion es baja porque no le habia agregado parametro a la funcion flecha esAlta



RETO
agrega el atributo altura
agrega el mètodo soy alto

retornara si es alto o no de acuerdo a si mide mas de 1.8 mts
------------------------------*/


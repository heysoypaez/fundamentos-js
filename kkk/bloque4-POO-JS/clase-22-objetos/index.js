/*
Mis principios de programacion:
1. Un programador divide problemas grandes en problemas chiquitos
2. Cada 4 lineas de codigo comento mi codigo
//Objetos
¿Que diferencia a los prototipos en js que el sistema de herencia de otros lenguajes?

*/

//Imprimiendo algo en la consola
console.log("inicializando archivo");

/*Declaración de prototipos
=========================================*/
/*Ideas claves

Los prototipos son un objeto más de javascript.

*/




//Definiendo el prototipo persona
function Persona(nom, ape, alt) {
	//para guardarlo en la memoria usamos this

	//this.nombre declara el nombre clave del valor
	this.nombre = nom;
	//nom es un valor que va en funcion de los parametros del prototipo
	this.apellido = ape;
	
	this.altura = alt;
     
	//return this; implicitamente es retornado

}

//Variables de la Clase Persona, no del prototipo
var PersonaAlta = 1.70; //metros

//Dentro del prototipo de persona va a existir un atributo que va a ser una funcion
Persona.prototype.saludar = function () {
	console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}




/*Declaración de objetos
=========================================*/

//Un nuevo prototipo de Persona se creo en sacha
var personas = [] 

personas.push( daniel = new Persona("Daniel", "Páez", 1.73) )
personas.push( mariaV = new Persona("Maria", "Victoria", 1.65) )
personas.push( amanda = new Persona("Amanda", "Páez", 1.62) )
	
   




/* "new" es una palabra reservada del lenguaje para crear nuevos objetos dado un prototipo.
new + prototipo()  , hace que se cree un nuevo objeto con el prototipo */


/*Declaración de variables y Arrays
=========================================*/
//Null


/*Declaración de funciones
=========================================*/
//Null


/*Consola y consultas
=========================================*/
//Null


/*Ejecución de funciones y métodos
=========================================*/

daniel.saludar(); //metodo saludar
mariaV.saludar();
amanda.saludar();


for(var i of personas)

daniel.esAlto()



//Para llamar a la funcion se usa Persona.soyAlto()
//Aca estamos modificando el prototipo
Persona.prototype.esAlto = function () { 
	return this.altura > PersonaAlta
}
//retornar la condicion de si es alta

Persona.prototype.esBajo = function() { 
	return !this.esAlto() 
}




/* 
IDEAS CLAVES
-------------
=> con function Objeto() {this.x ; this.y;} creo un Prototipo
=>  prototype, permite prototipar atributos y metodos fuera del prototipo inicial
=> this es importante
Control de errores
-----------------
//No me funcionaba la funcion soyAlto porque estaba pidiendo parametro cuando el parametro esta implicito dentro del objeto
------------------------------*/
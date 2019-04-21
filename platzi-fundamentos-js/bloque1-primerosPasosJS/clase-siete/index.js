/*


funciones son pedazos de codigo reutilizablke
¿A que variables puede accender una funcion?
¿En que momentos tiene acceso?


En el navegador el objeto global donde esta mi variable es en
window.miVariable
*/

//Imprimiendo algo en la consola
console.log("inicializando archivo");




//Creando un objeto literal
var daniel = {

	//clave - valor | key - value
	nombre: "Daniel",
	apellido: "Páez",
	edad: 18,
	correo: "danielpaezsw66@gmail.com"

}

var paty = {

	//clave - valor | key - value
	nombre: "Patricia",
	apellido: "Romero",
	edad: 18,
	

}



/*
¿Y si tengo un objeto que encapsule este modelo que repito una y otra vez? D:
*/



function imprimirFrase( { nombre,apellido,edad }) {
	//Aqui estoy accediendo a los atributos de un objeto directamente
	//El objeto lo tenego que definir en el parametro

	//var { nombre } = persona;
	// es lo mismo que decir var nombre = persona.nombre

	//var apellido =  persona.apellido;
	//var edad = persona.edad

	//Observaras que puede usar la variable global perfectamente


	console.log(`Ayer conocí a ${nombre} ${apellido}, ${nombre} me pareció una persona fantástica, con tan solo sus ${edad} ya estaba buscando de tener una vida con sentido claro, a ${nombre} le costaba, pero a todos nos cuesta igual. `);
}
/*
Esta funcion va a tener el efecto colateral de 
modificar la variable nombre tanto dentro como fuera 
de la funcion

Esto es algo que queremos evitar en nuestro codigo
*/

imprimirFrase(daniel);
imprimirFrase(paty);
//imprimirFrase({persona: "Pablito"});
//Puedo definir un nuevo objeto en el mismo parametor

//De esta manera evito el efecto colateral y tengo un alcance local



/*

` ` ` 
``

Repaso
¿Que aprendi?

declarar objetos con la estructura var objeto = {color,tamaño,lugat}
usar objetos como parametros de una función de manera directa


¿Que logre?

¿Que podre lograr?

//reto
escribir una funcion que se llame escribir nombre y edad y escriba

hola me llamo sacha y tengo 28 años
*/

function imprimirNombreEdad({nombre, edad}) {

	console.log(`Hello, deja el show, soy ${nombre} y tengo ${edad} años`)

}

imprimirNombreEdad(daniel);


//ejemplo de desestructurar objeto

var pizza = {

	nombre: "pizza",
	sabor: "salado",
	tipo: "comida chatarra",
	nutricion: "baja nutricion"
}

var banana = {

	nombre: "banana",
	sabor: "dulce",
	tipo: "fruta",
	nutricion: "alta nutricion"
}

function imprimirInformacionComida (comida) {

	var { nombre, sabor, tipo, nutricion } = comida;
	console.log(`La ${nombre} es una ${tipo} de ${nutricion}`)


}

imprimirInformacionComida(pizza);
imprimirInformacionComida(banana);

/*
¿Para que sirve esto?
Para producir más programacion con menos codigo, para acceder facilmente  a parametros del objeto en cuestion
*/
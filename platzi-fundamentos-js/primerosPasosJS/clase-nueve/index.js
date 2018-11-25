/*

En el navegador el objeto global donde esta mi variable es en
window.miVariable

Existen parametros como valor y parametros como referencia

*/

//Imprimiendo algo en la consola
console.log("inicializando archivo");



//
var daniel = {
	nombre: "Daniel"
}

var impostor = {
	//nombre: "Daniel"
	...daniel
	// si cambio algo de este objeto cambia solo este
	// poeque apuntan a otro lugar de memoria ram
}

var otroImpostor = daniel;
//este es misma posicion en memoria ram

daniel == impostor;
//false
//Cuando comparamos objetos declara falso porque estan en diferentes lugares en memoria
//hacen referencia a variables distintas
// false en memoria ram

daniel.nombre === impostor.nombre;
//true, es igual incluso en objetos



//


var x = 10 , y = "10", z = 10 ;





//x en numero es igual a 4 en string
console.log(x == y)
//true, porque convierte ambos en el mismo tipo de dato



console.log(x === y)
//false
//aqui validamos si son el mismo tipo de valor Y el mismo tipo de variable

console.log( x === z)
//true
//ambas valen lo mismo y son el mismo tipo de variable



/*
Siempre que podamos usemos el triple igual porque facilitara que el programa siempre se comporte igual a lo esperado

en trabajo siempre lo hacen


*/
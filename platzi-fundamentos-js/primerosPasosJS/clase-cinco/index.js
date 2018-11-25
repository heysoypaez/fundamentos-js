/*


funciones son pedazos de codigo reutilizablke
¿A que variables puede accender una funcion?
¿En que momentos tiene acceso?


En el navegador el objeto global donde esta mi variable es en
window.miVariable
*/

//Imprimiendo algo en la consola
console.log("inicializando archivo");

var nombre = "Daniel";
//Una variable global

function imprimirNombreEnMayusculas(nombre) {
	// n tiene alcance local
	//Para declarar la variable local, simplemente la coloco en parametro


	nombre = nombre.toUpperCase()
	//Observaras que puede usar la variable global perfectamente


	console.log(nombre);
}
/*
Esta funcion va a tener el efecto colateral de 
modificar la variable nombre tanto dentro como fuera 
de la funcion

Esto es algo que queremos evitar en nuestro codigo
*/

imprimirNombreEnMayusculas(nombre);
//De esta manera evito el efecto colateral y tengo un alcance local



/*

` ` ` 

Repaso
¿Que aprendi?
toda variable que no esta definida en una funcion esta
 definida en el objeto global que en este caso
en el navegador es window

¿Que logre?
¿Que podre lograr?


Un programador evita efectos colaterales en su codigo

*/
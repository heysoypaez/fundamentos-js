/*

*/

//Imprimiendo algo en la consola
console.log("inicializando archivo");

var edad = 18;

var edadIncrementada = edad + 1;
//esto se llama incremento

// edad = edad + 1
edad += 1;

var peso = 55;

// peso = peso - 2;
//peso -= 2;


var pan = 2;
var subirEscaleras = 1;

peso = peso +  pan - subirEscaleras;

var cambures = 200.2;

var total = cambures * 3;
var total = cambures * 100 * 3 / 100;
var total = Math.round(cambures * 100 * 3 )/ 100;
var totalStr = total.toFixed(2);
//Para pedir la cantidad de decimales que quiero que tenga en cuenta;

var total2 = parseFloat(totalStr);
// parse transformar a flotante

var pizza = 8;
var personas = 2;
var cantidadPorcionesPersona = pizza/personas;
//javascrip no almacena decimales de forma precisa
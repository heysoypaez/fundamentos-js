/*
Autor: Daniel Páez
URL Autor: Daniel Páez
Tema de la clase: Juego html
Descripción: juego html que recopila los fundamentos de js
URL Autor:  heysoypaez.com
URL código: github.com/heysoypaez
*/

/*PROTOCOLO DE VERIFICACIÓN DE FUNCIONAMIENTO
==================================*/
//Imprimiendo algo en la consola
console.log("inicializando archivo");



/*DECLARACIÓN DE VARIABLES
==================================*/

	
			/*VARIABLE CONSTANTE CON ELEMENTOS OBTENIDOS POR ID
			=====================================================*/
			const btnEmpezar = document.getElementById('btnEmpezar')
			const celeste = document.getElementById("celeste")
			const violeta = document.getElementById("violeta")
			const verde = document.getElementById("verde")
			const naranja = document.getElementById("naranja")



/*DECLARACIÓN DE CLASES
==================================*/


			class Juego {
				constructor() {

					/*Declarando mis metodos*/
					this.inicializar()
					this.generarSecuencia()

				}


				//Creando el cuerpo de mis metodos
				inicializar() {
						btnEmpezar.classList.add("hide")
						this.nivel = 1;
						this.colores = {
							celeste,
							violeta,
							naranja,
							verde
						}
					}

				generarSecuencia() {
					this.secuencia = new Array(10).fill(0).map(n => Math.round(Math.random() * 4 ))
					//Creamos un nuevo objeto Array con 10 casillas
					//rellenamos cada casilla con 0
					// Math random * 4 entrega un valor entre 0 y 4

					//map() solo funciona si el elemento del array tiene un valor asi sea 0

				}
			}


/*DECLARACIÓN DE FUNCIONES
========================================================*/


      function empezarJuego() {
      //	alert("El juego va a comenzar pueblo de bolivar")
        window.primerJuego = new Juego()
      }



/*EJECUCIÓN DE FUNCIONES Y PROMESAS
========================================0*/



/*=======================================
RENDER EN PANTALLA
Agregando al html datos de la clase
=======================================*/

//Variables
var temaClase = "Simon Dice";
var titulo = document.getElementById("title")
//var contenidoClase = document.getElementById("contenido-clase")

//Variables reasignadas
titulo.innerHTML=  temaClase;
//contenidoClase.innerHTML= temaClase;

/*
===============================================================================
LOGICA DEL VIDEOJUEGO
---------------------
=>Va a ser un simon
=> 10 niveles



IDEAS CLAVES
-------------
=> Async Await, forma sencilla de realizar tareas asincronas
=> Es importante pensar en arrays a la hora de usar async await
=>
=>
=>


Control de errores
-----------------
//
------------------------------
===================================================================================================================== 
*/

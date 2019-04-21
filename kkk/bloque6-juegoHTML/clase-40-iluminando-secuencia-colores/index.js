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

					/*Ejecutando mis metodos*/
					this.inicializar()
					this.generarSecuencia()
					this.siguienteNivel()
				
				}

			
				//Creando el cuerpo de mis metodos
				inicializar() {
						btnEmpezar.classList.add("hide")
						this.nivel = 4;
						this.colores = {
							celeste,
							violeta,
							naranja,
							verde
						}
					}

				generarSecuencia() {
					this.secuencia = new Array(10).fill(0).map(n => Math.round(Math.random() * 3 ))
					//Creamos un nuevo objeto Array con 10 casillas
					//rellenamos cada casilla con 0
					// Math random * 4 entrega un valor entre 0 y 3

					//map() solo funciona si el elemento del array tiene un valor asi sea 0

				}

				siguienteNivel() {
					this.iluminarSecuencia()
				}

				transformarNumeroAColor(numero) {
					switch (numero) {
						case 0:
							return "celeste"
							//el case no hace falta porque el return hace que no se ejecute
						case 1:
							return "violeta"
						case 2: 
							return "naranja"
						case 3:
							return "verde"
						}
				}

				iluminarSecuencia() {		

						/*aplicamos i < this.nivel porque el numero del nivel 
						corresponde al numero de elementos que le usuario 
						modificara y tendra que seguir */

					for (let i =0; i < this.nivel ; i++) {

						const color = this.transformarNumeroAColor(this.secuencia[i])

						setTimeout( () => this.iluminarColor(color) , 1000 * i)
						//colocar x * i nos permite acumular tiempo
					}

				}

				iluminarColor(color) {
					this.colores[color].classList.add("light")
					setTimeout(() => this.apagarColor(color), 350)
				}

				apagarColor(color) {
					this.colores[color].classList.remove("light")

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
=> Tengo una secuencia aleatoria que tiene que seguir el usuario
=> "Y asi sucesivamente"



IDEAS CLAVES
-------------
=> La mayoria de errores con let y var sucederá dentro de un ciclo for
=> siempre que podamos usemos const antes de let, usemos let antes de var
=> un let matendra la variable para este bloqie para este ciclo
=> si el ciclo tiene el var color cada ciclo for va a estar pisando el valor de color con el resultado final


Control de errores
-----------------
// colocar /	this.iluminarSecuencia() en el constructor, ejecutaba el metodo dos veces

//Habia colocado el tiempo dle timeout dentro del cuerpo de la arrow function y por eso no se ejecutaba correctamente y todo salia al mismo tiempo
------------------------------
===================================================================================================================== 
*/

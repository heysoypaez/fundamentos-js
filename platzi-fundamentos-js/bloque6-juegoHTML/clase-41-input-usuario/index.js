/*
Autor: Daniel Páez
URL Autor: https://heysoypaez.com
Tema de la clase: Juego html
Descripción: juego html de un Simon Dice que recopila los fundamentos de js
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



/*DECLARACIÓN DE CLASES PROTOTIPALES
==================================*/


			class Juego {
				constructor() {

					/*Ejecutando mis metodos*/
					this.inicializar()
					this.generarSecuencia()
					this.siguienteNivel()
				
				}

			
				//Metodo que se ejecuta cuando empieza el juego
				inicializar() {

						this.elegirColor = this.elegirColor.bind(this)
						//ahora el this esta atado al this de la clase prototipo juego

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
					this.agregarEventosClick()
				}

				transformarNumeroAColor(numero) {
					//Pedimos como parametro un numero aleatorio entre 0 y 4 que viene de this.secuencia()

					switch (numero) {
						case 0:
							return "celeste";
							//el case no hace falta porque el return hace que no se ejecute
						case 1:
							return "violeta";
						case 2: 
							return "naranja";
						case 3:
							return "verde";
						}
				}

				iluminarSecuencia() {		

						/*aplicamos i < this.nivel porque el numero del nivel 
						corresponde al numero de elementos que le usuario 
						modificara y tendra que seguir */

					for (let i =0; i < this.nivel ; i++) {

						const color = this.transformarNumeroAColor(this.secuencia[i])
						// Ej: const color = "verde" 

						setTimeout( () => this.iluminarColor(color) , 1000 * i)
						//colocar x * i nos permite acumular tiempo en función del for
					}

				}

				iluminarColor(color) {
					//Colocando la clase que ilumina el color
					this.colores[color].classList.add("light")
					setTimeout(() => this.apagarColor(color), 350)
				}

				apagarColor(color) {
					//Quitando la clase que ilumina el color
					this.colores[color].classList.remove("light")

				}

				agregarEventosClick() {
					//agregando un manejador de eventos
					this.colores.celeste.addEventListener("click", this.elegirColor )
					
					this.colores.violeta.addEventListener("click", this.elegirColor )
					this.colores.naranja.addEventListener("click", this.elegirColor )
					this.colores.verde.addEventListener("click", this.elegirColor )
					}
					//los metodos que se llaman en el event listener suelen tener en la funcion un parametro uv

					elegirColor(ev) {

					console.log(this)

						//este console.log nos muestra todo el detalle del evento
						console.log(ev)
						alert("ME HICIERON CLICK")

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



/*RENDER EN PANTALLA
=======================================*/

//VARIABLES REASIGNABLES
let temaClase = "Simon Dice";
let titulo = document.getElementById("title")
//var contenidoClase = document.getElementById("contenido-clase")

//VARIABLES REASIGNADAS
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

SOBRE LOS EVENTOS

=> Los eventos toman input del usuario

=> los metodos que se llaman en el event listener suelen tener en la funcion un parametro uv

=> En el contexto de la funcion de un evento this, por defecto, es la etiqueta html sobre la cual se ejecuta el evento en cuestion					


=> this.elegirColor = this.elegirColor.bind(this)
						//ahora el this esta atado al this de la clase prototipo juego
						//.bind te permite decirle quien va a ser this

=> AddEventListener te permite agregar un manejador de eventos
=> Un evento funciona de manera asincrona, se ejecuta cuando no hay nada en la cola de tareas

Control de errores
-----------------
// colocar /	this.iluminarSecuencia() en el constructor, ejecutaba el metodo dos veces

//Habia colocado el tiempo dle timeout dentro del cuerpo de la arrow function y por eso no se ejecutaba correctamente y todo salia al mismo tiempo
------------------------------
===================================================================================================================== 
*/

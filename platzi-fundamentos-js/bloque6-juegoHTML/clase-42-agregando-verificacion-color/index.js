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
			const ULTIMO_NIVEL = 5;



/*DECLARACIÓN DE CLASES PROTOTIPALES
==================================*/


			class Juego {
				constructor() {

					/*Ejecutando mis metodos*/
					this.inicializar()
					this.generarSecuencia()

					/*Esperando 1.5 segundos antes de ejecutar this.siguienteNivel */
					setTimeout( () => this.siguienteNivel() , 1500 )

					
				
				}

		
				//Metodo que se ejecuta cuando empieza el juego
				inicializar() {



						this.siguienteNivel = this.siguienteNivel.bind(this);
						this.elegirColor = this.elegirColor.bind(this)
						//ahora el this esta atado al this de la clase prototipo juego

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
					this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.round(Math.random() * 3 ))
					//Creamos un nuevo objeto Array con 10 casillas
					//rellenamos cada casilla con 0
					// Math random * 4 entrega un valor entre 0 y 3

					//map() solo funciona si el elemento del array tiene un valor asi sea 

					/*
					Ejemplo de secuencia , secuencia = [0,0,2,1]
					*/

				}

				siguienteNivel() {
					this.subnivel = 0;
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


				transformarColorANumero(color) {
					//Pedimos como parametro un numero aleatorio entre 0 y 4 que viene de this.secuencia()

					switch (color) {
						case "celeste":
							return 0;
							//el case no hace falta porque el return hace que no se ejecute
						case "violeta":
							return 1;
						case "naranja": 
							return 2;
						case "verde":
							return 3;
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

				removerEventosClick() {
					//agregando un manejador de eventos
					this.colores.celeste.removeEventListener("click", this.elegirColor )
					
					this.colores.violeta.removeEventListener("click", this.elegirColor )
					this.colores.naranja.removeEventListener("click", this.elegirColor )
					this.colores.verde.removeEventListener("click", this.elegirColor )
					}
					//los metodos que se llaman en el event listener suelen tener en la funcion un parametro uv




					elegirColor(ev) {

						const nombreColor = ev.target.dataset.color

						const numeroColor = this.transformarColorANumero(nombreColor)

						this.iluminarColor(nombreColor);

						/*
						¿Que resultado quiero?
						Quiero que se verifique cuando el uusuario haga click en un boton,

						 y si es igual felicitarme 

						 y pasar al siguiente nivel si toque todos los de la secuencia de este nivel

						 //

						sino seguir el nivel hasta tocar el siguiente

						//
						sino toco bien que me diga que perdi y acabe el juego
						*/


						let turno = this.subnivel + 1

							if (numeroColor === this.secuencia[this.subnivel] ) {

								this.subnivel++;


								if (turno === this.nivel ) {		

									this.nivel++	
									this.removerEventosClick()

									if (this.nivel === (ULTIMO_NIVEL + 1) ) {
										alert("Ganaste el juego, crack, eres un genio")
									}

									else {

									//this.generarSecuencia()
									setTimeout( this.siguienteNivel , 2000 )

/*esta funcion es ejecutadaba por window porque es window del navegador quien se encarga de ejecutar ese tiempo
por tanto el this dentro de siguiente nivel termina apuntando al this setTimeout
quien es window
*/

									alert("GENIAL, ganaste en este nivel")
									

									}
								
								
								}

								console.log("sigue jugando")
								
							}

							else {
							
							alert("Te equivocaste mi amigo, presta màs atencion la proxima")

							}
						
						/*
						necesitare
	
						this.secuencia
						necesitare this.nivel
						*/


						//este console.log nos muestra todo el detalle del evento
					//	console.log(ev)
						//alert("ME HICIERON CLICK")

						//atributo target nos da el boton tocado
						//data-set="palabra" , genera un atributo en js con el valor a la derecha del igual como la asignacion

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
usa breakpoint



=> 
Control de errores
-----------------



el this apuntaba a Window cuando debia apuntar a Juego

------------------------------
===================================================================================================================== 
*/

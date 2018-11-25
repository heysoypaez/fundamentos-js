/*

Mis principios de programacion:
1. Un programador divide problemas grandes en problemas chiquitos
2. Cada 4 lineas de codigo comento mi codigo

//Estructura de control switch

que codigo ejecutaremos de acuerdo
a multiples condiciones

*/

//Imprimiendo algo en la consola
console.log("inicializando archivo");



/*Declaración de variables
=========================================*/

//Colocando dentro de un input en la variable signo el signo del usuario
var signo = prompt("¿Cúal es tu signo?");
var renderSignoZodiaco = document.getElementById("info-signo");


/*Declaración de funciones
=========================================*/


//función donde mostrare en pantalla y consola los datos deseados
function mostrar(texto) {
	console.log(texto) 
	renderSignoZodiaco.innerHTML = texto;
}


//solucion con switch

switch (signo) {

	//Si el valor de signo === "Aries" entonces haz esto hasta que veas un break
	case "Aries" :   
	case "aries" :
		var texto = "Aries simboliza la acción, el entusiasmo, el empuje, la fuerza. Simboliza las nuevas empresas, las conquistas. Suele ir asociado a las grandes aspiraciones. El característico empuje de Aries se representa a la perfección mediante la figura del ariete que en ocasiones se les asocia. "

		mostrar(texto);
	break 

	case "Leo" :  
		 var texto ="El león simbolizaba el fuego en la antigua Mesopotamia, mientras que para los antiguos griegos representaba al famoso león de Nemea, muerto por Hércules con sus propias manos.Leo es un signo de fuego que simboliza al monarca, a la gloria. También a la fortuna y la autoridad. Estas..." 

		 mostrar(texto);
	break 

	case "Sagitario" :  
	  var texto = "Mitad hombre, mitad caballo, sagitario es un arquero siempre listo para disparar sus flechas. En Grecia se asoció su figura con la del centauro Quirón, maestro de Aquiles.Sagitario, signo de fuego, representa la lucidez. Simboliza al maestro, al intelectual, al filósofo, o incluso al sabio.."

	  mostrar(texto);
	  break

	

	 case "Tauro" :
	  var texto = "Tauro simboliza también la lentitud, la resistencia, la estabilidad, la perseverancia. Tauro representa la inmutabilidad, llegando incluso a la obcecación."

	  mostrar(texto)

	   break 

	  case "Virgo" :
	    var texto = "simboliza la espiritualidad, el orden, frialdad, la inteligencia pura, así como el ánsia por conocer los secretos de a vida. Sus aspectos más negativos nos hablan de egoismo, materialismo, mezquindad, e incluso crítica desmedida"
	  	mostrar(texto)
	    break 

	   case "Capricornio" : 
	    var texto = "simboliza la generosidad, la sabiduría, la constancia, la cautela, y la firmeza de carácter. Es una inteligencia racional. Pero también puede caer en el pesimismo, la avaricia, la pedantería, la introversión, o incluso la inadaptación,"
	    mostrar(texto)

	      break

		
		case "Géminis" : 
		case "geminis":  
		var texto ="Este signo representa la amistad, la unión.Geminis simboliza la comunicación, la duplicidad, la imitación, incluso llegando a la hipocresía." 

		break 

		case "Libra" :
	   var texto ="es el signo del equilibrio por excelencia, de la armonía, el sentido artístico, de la justicia, y la paz. Pero también puede derivar en inestabilidad, inconstancia, e incluso perversidad"

	    break

	    case "Acuario" :   
	     var texto ="Representa el progreso, la filosofía, el avance de la ciencia y de la técnica, la comunicación entre personas. Su lado negativo lleva al egocentrismo, la anarquía, la excentricidad, o incluso a la falta de humanidad." 
	     break

 		case "Cáncer" :  
 		 var texto ="simboliza la concepción, la intuición, y la fantasía. Aunque también es cierto que los nativos de este signo pueden llegar a mostrar una cierta tendencia a encerrarse en sí mismos." 
 		 break 

 		case "Escorpio" :
 		case "escorpio" :   
 		 var texto = "representa la sexualidad, las energías creativas, el ataque, o la inventiva. Pero también puede derivar en pasiones desbordantes, violencia, o falta de escrúpulos." 

 		 mostrar(texto)

 		 break

 		 case "Piscis" : 
 		 case "piscis" :   
 		  var texto = "Destaca su fantasía e imaginación, la intuición, y la creación artística. La fraternidad. En sus aspectos negativos nos encontramos con el desorden, la falta de ideales, el histerismo, e incluso la mentira";

	      mostrar(texto)
 		   break

 		   //si no encuentras nada ejecuta esto
 		   default:
 		   texto = "Mi amigo, no encuentro lo que me pides"
 		   mostrar(texto)
 		   break

}



/* 
IDEAS CLAVES
-------------
=> Con Do While el codigo se ejecuta al menos una vez
------------------------------*/

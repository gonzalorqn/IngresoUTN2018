/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var alambre;

    largo = parseInt(document.getElementById("Largo").value);
    ancho = parseInt(document.getElementById("Ancho").value);

    alambre = (largo + ancho)*6;

    alert("Se deben comprar " + alambre + " metros de alambre");
}
function Circulo () 
{
	var radio;
    var alambre;

    radio = parseInt(document.getElementById("Radio").value);

    alambre = (radio * 2) * Math.PI * 3;

    alert("Se deben comprar " + alambre.toFixed(2) + " metros de alambre");

}
function Materiales () 
{
    var largo;
    var ancho;
    var cemento;
    var cal;

    largo = parseInt(document.getElementById("Largo").value);
    ancho = parseInt(document.getElementById("Ancho").value);

    cemento = (largo * ancho)*2;
    cal = (largo * ancho)*3;

    alert("Se deben comprar " + cemento + " bolsas de cemento y " + cal + " de cal");
	
}
function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta;
	var numero;

	do
	{
		numero = parseInt(prompt("Ingrese un número:"));
		acumulador += numero;
		contador ++;
		respuesta = prompt("Quiere seguir sumando?");
		respuesta = respuesta.toLowerCase();
	}while (respuesta != "no");


document.getElementById("suma").value=acumulador;
document.getElementById("promedio").value=acumulador/contador;

}//FIN DE LA FUNCIÓN
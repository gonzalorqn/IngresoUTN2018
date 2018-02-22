function Mostrar()
{

	var sumaPos = 0;
	var sumaNeg = 0;
	var cantPos = 0;
	var cantNeg = 0;
	var cantCeros = 0;
	var cantPares = 0;
	var promPos;
	var promNeg;
	var diferencia;
	var respuesta="si";
	var numero;

	do
	{
		numero = parseInt(prompt("Ingrese un número: "));
	
		if (numero > 0)
		{
			sumaPos += numero;
			cantPos++;
		}

		else if (numero == 0)
		{
			cantCeros++;
		}

		else
		{
			sumaNeg += numero;
			cantNeg++;
		}

		if (numero % 2 == 0)
		{
			cantPares++;
		}
	

		respuesta = prompt("Desea continuar?");
		respuesta = respuesta.toLowerCase();
	
	}while(respuesta!="no");

promPos = sumaPos / cantPos;
promNeg = sumaNeg / cantNeg;
diferencia = sumaPos - sumaNeg;

if (isNaN(promPos) )
{
	promPos = 0;
}

if (isNaN(promNeg) )
{
	promNeg = 0;
}
document.write("1-Suma de los negativos: " + sumaNeg + "<br/>");
document.write("2-Suma de los positivos: " + sumaPos + "<br/>");
document.write("3-Cantidad de positivos: " + cantPos + "<br/>");
document.write("4-Cantidad de negativos: " + cantNeg + "<br/>");
document.write("5-Cantidad de ceros: " + cantCeros + "<br/>");
document.write("6-Cantidad de números pares: " + cantPares + "<br/>");
document.write("7-Promedio de positivos: " + promPos + "<br/>");
document.write("8-Promedio de negativos: " + promNeg + "<br/>");
document.write("9-Diferencia entre positivos y negativos: " + diferencia + "<br/>");



}//FIN DE LA FUNCIÓN
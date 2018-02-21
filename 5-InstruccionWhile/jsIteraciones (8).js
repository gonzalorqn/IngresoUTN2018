function Mostrar()
{

	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta;
	var flag=0;
	
	do
	{
		numero = parseInt(prompt("Ingrese un número:"));

		if (numero >= 0)
		{
			positivo += numero;
		}

		else
		{
			negativo *= numero;
			flag = 1;
		}
		respuesta = prompt("Quiere seguir ingresando?");
		respuesta = respuesta.toLowerCase();
	}while (respuesta != "no");

document.getElementById('suma').value=positivo;

if (flag == 0)
{
	negativo = 0;
}
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
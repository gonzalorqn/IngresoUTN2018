function Mostrar()
{

	var num = parseInt(prompt("ingrese un número entre 0 y 9."));

	while(num > 9 || num < 0 || isNaN(num))
	{
		num = parseInt(prompt("Número inválido. Ingrese un número entre 0 y 9."));
	}

	document.getElementById("Numero").value = num;

}//FIN DE LA FUNCIÓN
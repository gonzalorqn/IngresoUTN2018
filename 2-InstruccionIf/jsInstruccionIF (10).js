function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var num;

	num = Math.floor(Math.random() * 10) + 1;

	if (num > 8)
	{
		alert("Nota: " + num + "." + " EXCELENTE");
	}

	else if (num > 3)
	{
		alert("Nota: " + num + "." + " APROBÓ");
	}

	else
	{
		alert("Nota: " + num + "." + " Vamos, la próxima se puede");
	}

}//FIN DE LA FUNCIÓN
/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var gradosF;
    var gradosC;

    gradosF = parseInt(document.getElementById("Temperatura").value);

    gradosC = gradosF - 32;

    alert("La temperatura es de " + gradosC + " grados centígrados");
}

function CentigradosFahrenheit () 
{
	var gradosF;
    var gradosC;

    gradosC = parseInt(document.getElementById("Temperatura").value);

    gradosF = gradosC + 32;

    alert("La temperatura es de " + gradosF + " grados Fahrenheit");
}

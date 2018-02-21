function Mostrar()
{

var sexo = prompt("ingrese f ó m.");
sexo = sexo.toLowerCase();

while(sexo != "f" && sexo != "m")
{
    sexo = prompt("Sexo inválido. Ingrese f ó m.");
    sexo = sexo.toLowerCase();
}

if(sexo == "f")
{
    sexo = "Femenino";
}

else
{
    sexo = "Masculino";
}

document.getElementById('Sexo').value = sexo;

}//FIN DE LA FUNCIÓN
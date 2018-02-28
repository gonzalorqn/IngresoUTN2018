function Mostrar()
{
var esPrimo=true;
var numero = parseInt(prompt("Ingrese un número."));

for(var i=2 ; i < numero ; i++)
{
    if(numero % i == 0)
    {
        esPrimo = false;
        break;
    }
    
}

if(esPrimo)
{
    alert(numero + " es primo");
}

else
{
    alert(numero + " no es primo");
}


}//FIN DE LA FUNCIÓN
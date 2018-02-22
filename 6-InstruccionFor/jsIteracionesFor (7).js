function Mostrar()
{
var cantDivisores=0;
var pedir = parseInt(prompt("Ingrese un número."))
for(i=0 ; pedir >= i ; i++)
{
    if(pedir % 2 == 0)
    {
        console.log(pedir);
        cantDivisores++;
    }
    else
    {
        pedir++;
    }
}

alert("La cantidad de pares es: " + cantDivisores);



}//FIN DE LA FUNCIÓN
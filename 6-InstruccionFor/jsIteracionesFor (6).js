function Mostrar()
{
var cantPares=0;

for(var pedir = parseInt(prompt("Ingrese un número.")); pedir > 1 ; pedir -= 2)
{
    if(pedir % 2 == 0)
    {
        console.log(pedir);
        cantPares++;
    }
    else
    {
        pedir++;
    }
}

alert("La cantidad de pares es: " + cantPares);



}//FIN DE LA FUNCIÓN
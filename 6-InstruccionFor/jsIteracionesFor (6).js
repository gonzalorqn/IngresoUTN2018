function Mostrar()
{
var cantPares=0;
var pedir = parseInt(prompt("Ingrese un número."));

for(var i=1; i <= pedir ; i++)
{
    if(i % 2 == 0)
    {
        console.log(i);
        cantPares++;
    }

}

console.log("La cantidad de pares es " + cantPares);



}//FIN DE LA FUNCIÓN
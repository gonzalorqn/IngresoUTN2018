function Mostrar()
{
var cantDivisores=0;
var numero = parseInt(prompt("Ingrese un número."));

for(var i=1 ; i <= numero ; i++)
{
    if(numero % i == 0)
    {
        console.log(i);
        cantDivisores++;
    }
    
}

console.log("La cantidad de divisores es " + cantDivisores);



}//FIN DE LA FUNCIÓN
function Mostrar()
{
//tomo el mes 

var mes = document.getElementById("mes").value;

switch (mes)
{
    case "Febrero":
        alert("Este mes tiene 28 dias.");
        break;
    
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
        alert("Este mes tiene 30 dias.");
        break;
   
    default:
        alert("Este mes tiene 31 dias.");
        break;
}

}//FIN DE LA FUNCIÓN
/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarDescuento()
{
    var importe;
    var resultado;

    importe = parseFloat (document.getElementById("importe").value);

    resultado = importe * 0.75;

    document.getElementById("resultado").value = resultado.toFixed(2);
    
}

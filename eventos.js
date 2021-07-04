/*  Declaro un arreglo                                                          */
var teclas = { 
    UP:38,
    DOWN: 40,
    LEFT: 37,
    RIGHT:39
};

    /*  KeyUp indica cuando se deja de presionar una tecla                          */
document.addEventListener("keydown",dibujarTeclado);
    /*  KeyUp indica cuando se deja de presionar una tecla                          */
document.addEventListener("mouse.down",dibujarMause);
console.log();
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 100;
var y = 100;

dibujarLinea("red", x-1, y-1, x+1, y+1, papel);

//FUNCION QUE DIBUJA
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
        /* Le digo a JS que arrancaré un trazo                                      */
    lienzo.beginPath();
        /* Le digo que color será la linea                                          */
    lienzo.strokeStyle = color;
        /*  Indico el ancho de la linea                                             */
    lienzo.lineWidth = 3;
        /* Indico de donde va iniciar el trazo                                      */
    lienzo.moveTo(xinicial, yinicial); 
        /* Indico que trazaré una linea hasta un punto 200,200                      */
    lienzo.lineTo(xfinal, yfinal);
        /* Es el método que dibujará la linea                                       */
    lienzo.stroke();
        /* Le indico que pare el trazo                                              */
    lienzo.closePath();
    
}

//FUNCION QUE DA DIRECCIÓN AL DIBUJO CON TECLADO
function dibujarTeclado(evento)
{ 
    var colorcito = "brown";
    var movimiento = 1;
    switch(evento.keyCode)
    {
        case teclas.UP:
            dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
            y = y - movimiento;
        break;

        case teclas.DOWN:
            dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
            y = y + movimiento;
        break;

        case teclas.LEFT:
            dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
            x = x - movimiento;
        break;
        
        case teclas.RIGHT:
            dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
            x = x + movimiento;
        break;

    }  
}

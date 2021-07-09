var estado = 0;              /* Estado del click */       
var colorLinea = "red";      /* Color a la linea*/

//  Arreglo con claves de Arriba, Abajo, Izq yTecla Derecha     
var teclas = { 
    UP:38,
    DOWN: 40,
    LEFT: 37,
    RIGHT:39
};

document.addEventListener("keydown", dibujarTeclado);    /*  Indica a la función dibujarTeclado que se deja de PRESIONAS una TECLA  */
document.addEventListener("mousedown", presionarMouse);  /*  Indica a la función presionarMouse que PRESIONAS el click*/
document.addEventListener("mouseup", soltarMouse);       /*  Indica a la función soltarMouse que cuando SUELTAS click*/
document.addEventListener("mousemove", dibujarMouse);    /*  Indica a la función dibujarMouse que MUEVES el mouse*/

var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var xTecla = 100;
var yTecla = 100;

dibujarLinea("red", xTecla-1, yTecla-1, xTecla+1, yTecla+1, papel); /* Dibujo un punto como una referencia para dibujar con teclas*/
dibujarLinea("black", 0, 0, 300, 0, papel);       /* Linea de arriba */
dibujarLinea("black", 300, 0, 300, 300, papel);   /* Linea derecha */
dibujarLinea("black", 0, 300, 300, 300, papel);   /* Linea abajo */
dibujarLinea("black", 0, 0, 0, 300, papel);       /* Linea izquierda */

// Funcion para mousedown (Cuando presionas click)
function presionarMouse(evento)
{
    estado = 1;              /* Cambia a ESTADO de click presionado*/ 
    xMause = evento.layerX;  /* Me da la cordenada de X */
    yMause = evento.layerY;  /* Me da la cordenada de Y */
}

// Funcion para mouseup (Cuando sueltas click)
function soltarMouse(evento)
{
    estado = 0;              /* Cambia a ESTADO de click NO presionado */
    xMause = evento.layerX;  /* Me da la cordenada de X */
    yMause = evento.layerY;  /* Me da la cordenada de Y */
}

// Funcion para mousemove (Cuando mueves el mouse)
function dibujarMouse(evento)
{
  if (estado == 1) 
  {   
    /* Solo se dibujara si esta el click del mouse presionado */
    dibujarLinea(colorLinea, xMause, yMause, evento.layerX, evento.layerY, papel);
  }
  xMause = evento.layerX;
  yMause = evento.layerY;
}

//FUNCION QUE DIBUJA
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath();                 /* Arrancaré un trazo                                      */        
    lienzo.strokeStyle = color;         /* Le digo que color será la linea                         */       
    lienzo.lineWidth = 2;               /* Ancho de la linea                                       */    
    lienzo.moveTo(xinicial, yinicial);  /* Indico de donde va iniciar el trazo                     */   
    lienzo.lineTo(xfinal, yfinal);      /* Indico que trazaré una linea hasta un punto 200,200     */       
    lienzo.stroke();                    /* Es el método que dibujará la linea                      */
    lienzo.closePath();                 /* Final  trazo                                            */
}

//FUNCION QUE DA DIRECCIÓN AL DIBUJO CON TECLADO
function dibujarTeclado(evento)
{ 
    var colorcito = colorLinea;
    var movimiento = 1;
    switch(evento.keyCode)
    {
        case teclas.UP:
            dibujarLinea(colorcito, xTecla, yTecla, xTecla, yTecla - movimiento, papel);
            yTecla = yTecla - movimiento;
        break;

        case teclas.DOWN:
            dibujarLinea(colorcito, xTecla, yTecla, xTecla, yTecla + movimiento, papel);
            yTecla = yTecla + movimiento;
        break;

        case teclas.LEFT:
            dibujarLinea(colorcito, xTecla, yTecla, xTecla - movimiento, yTecla, papel);
            xTecla = xTecla - movimiento;
        break;
        
        case teclas.RIGHT:
            dibujarLinea(colorcito, xTecla, yTecla, xTecla + movimiento, yTecla, papel);
            xTecla = xTecla + movimiento;
        break;
    }  
}

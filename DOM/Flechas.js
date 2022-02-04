//alert("a partir de ahora se utilizarán las Flechas del Teclado");
var teclas = {LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40}

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

document.addEventListener("keyup", dibujar_teclado);

//Drawing_lines (150, 150, 250, 250, "green");
Dibujar_arco(150, 150, 2, 360);

function dibujar_teclado(event)
{
    /* alert("presionaste una letra");
    console.log(event.keyCode); */

    switch (event.keyCode) {
        case teclas.LEFT:
            console.log("izquierda");
            break;

        case teclas.UP:
            console.log("arriba");
            break;

        case teclas.RIGHT:
            console.log("Derecha");
            break;

        case teclas.DOWN:
            console.log("Abajo");
            break;

        default:
            console.log(event.key);
            break;
    }
}

function Drawing_lines(Xi, Yi, Xf, Yf, color)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(Xi, Yi);
    lienzo.lineTo(Xf, Yf);
    lienzo.stroke();
    lienzo.closePath();
}

function Dibujar_arco(Centro_x, centro_y, radio,  grados_hex, fill = false ,color_fill = null, color = "red") 
{  
    var polar = (grados_hex*2) / 360;
    lienzo.beginPath();
    lienzo.arc(Centro_x, centro_y, radio, 0, polar*Math.PI, true);

    if (fill)
    {
        lienzo.fillStyle = color_fill;
        lienzo.fill();
    }
    else
    {

    }
    
    // draw the stroke
    lienzo.lineWidth = 1;
    lienzo.strokeStyle = color;
    lienzo.stroke();  
}

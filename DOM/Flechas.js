//alert("a partir de ahora se utilizarán las Flechas del Teclado");
var teclas = {LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40};
var position = {x: 150, y: 150};
var mov = 10; 

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

document.addEventListener("keyup", dibujar_teclado);

document.addEventListener("mousedown", Inicio_Trazo);
document.addEventListener("mouseup", fin_trazo);

Drawing_lines(1,1, 1, 30, "black");
Drawing_lines(1,1, 30, 1, "black");
Drawing_lines(299,270, 299, 299, "black");
Drawing_lines(270 ,299, 299, 299, "black");

Dibujar_arco(150, 150, 2, 360);

function Inicio_Trazo(event)
{
    lienzo.beginPath();
    lienzo.strokeStyle = "red";
    lienzo.moveTo(event.layerX, event.layerY);
    //console.log(event);
    //Drawing_lines(event.layerX, event.layerY, event.layerX + mov, event.layerY + mov);
    

}

function fin_trazo(event) 
{
    lienzo.lineTo(event.layerX, event.layerY);
    lienzo.stroke();
    lienzo.closePath();
    
    position.x = event.layerX
    position.y = event.layerY   
}

function dibujar_teclado(event)
{
    /* alert("presionaste una letra");
    console.log(event.keyCode); */

    switch (event.keyCode) {
        case teclas.LEFT:
            Drawing_lines(position.x, position.y, position.x - mov, position.y, "red" );
            position.x = position.x - mov;
            break;

        case teclas.UP:
            Drawing_lines(position.x, position.y, position.x, position.y - mov, "blue" );
            position.y = position.y - mov
            break;

        case teclas.RIGHT:
            Drawing_lines(position.x, position.y, position.x + mov, position.y, "green");
            position.x = position.x + mov;
            break;

        case teclas.DOWN:
            Drawing_lines(position.x, position.y, position.x, position.y + mov, "orange");
            position.y = position.y + mov;
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

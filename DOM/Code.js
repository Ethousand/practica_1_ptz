

var d = document.getElementById("dibujito");
ancho = d.width, alto = d.clientHeight


var lienzo = d.getContext("2d");
var lineas, l = 0, Xinicial, Yinicial, Xfinal, Yfinal, Fcolor;

var texto = document.getElementById("input_box");

var boton = document.getElementById("botoncito");
boton.addEventListener("click", Dibujuro_por_click);

// from up-left to down-right


function Drawing_lines(Xi, Yi, Xf, Yf, color)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(Xi, Yi);
    lienzo.lineTo(Xf, Yf);
    lienzo.stroke();
    lienzo.closePath();
}

function Dibujuro_por_click()
{
    lineas = parseInt(texto.value);
    var espacio = ancho / lineas

    while (l < lineas)
{
    Xinicial = 0;
    Xfinal = (l+1) * espacio;
    
    Yinicial = l* espacio;
    Yfinal = 300;
 
    Fcolor = "#AAF";
    Drawing_lines(Xinicial, Xfinal, Yinicial, Yfinal, Fcolor);
    l++;
    }

//from up-left to right-down
    for (l = 0; l < lineas; l++)
    {
        Xinicial = l*espacio;
        Xfinal = ancho; 

        Yfinal = (l+1)*espacio;
        Yinicial = 0;
        Fcolor = "#03C530";

        Drawing_lines(Xinicial, Yinicial, Xfinal, Yfinal, Fcolor);

        //from up-right to left-down
        Xinicial = l*espacio;
        Xfinal = ancho;

        Yinicial = alto;
        Yfinal = alto - ((l+1)*espacio)
        Fcolor = "#ffa500";

        Drawing_lines(Xinicial, Yinicial, Xfinal, Yfinal, Fcolor);

        //from down-left to up-right
        Xinicial = 0;
        Xfinal = (l+1)*espacio;

        Yinicial = ancho - (l*espacio);
        Yfinal = 0;
        Fcolor = "grey";

        Drawing_lines(Xinicial, Yinicial, Xfinal, Yfinal, Fcolor);

    }
    
}
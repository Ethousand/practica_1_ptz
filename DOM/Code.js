

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas, l, Xinicial, Yinicial, Xfinal, Yfinal, Fcolor;
lineas = 30;

// from up-left to down-right
for (l= 0; l < lineas; l++)
{
    Xinicial = 0;
    Xfinal = (l+1) * 10;
    
    Yinicial = l*10;
    Yfinal = 300;

    Fcolor = "#AAF";
    Drawing_lines(Xinicial, Xfinal, Yinicial, Yfinal, Fcolor);
    
}

//from up-left to right-down
for (l = 0; l < lineas; l++)
{
    Xinicial = l*10;
    Xfinal = 300; 

    Yfinal = (l+1)*10;
    Yinicial = 0;
    Fcolor = "#03C530";

    Drawing_lines(Xinicial, Yinicial, Xfinal, Yfinal, Fcolor);

}

//from up-right to left-down
for (l = 0; l < lineas ; l++)
{
    Xinicial = l*10;
    Xfinal = 300;

    Yinicial = 300;
    Yfinal = 300 - ((l+1)*10)
    Fcolor = "#ffa500";

    Drawing_lines(Xinicial, Yinicial, Xfinal, Yfinal, Fcolor);
}

//from down-left to up-right
for (l = 0; l < lineas; l++)
{
    Xinicial = 0;
    Xfinal = (l+1)*10;

    Yinicial = 300 - (l*10);
    Yfinal = 0;
    Fcolor = "grey";

    Drawing_lines(Xinicial, Yinicial, Xfinal, Yfinal, Fcolor);   
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
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
console.log(lienzo);

Drawing_lines(10, 300, 220, 10, "pink");
Drawing_lines(300, 10, 10, 220, "yellow");

function Drawing_lines(Xi, Yi, Xf, Yf, color)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(Xi, Yi);
    lienzo.lineTo(Xf, Yf);
    lienzo.stroke();
    lienzo.closePath();
}
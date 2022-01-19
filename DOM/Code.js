var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
console.log(lienzo);

lienzo.beginPath();
lienzo.strokeStyle = "darkgreen"
lienzo.moveTo(100, 100);
lienzo.lineTo(200, 200);
lienzo.stroke();
lienzo.closePath();


function Drawing_lines()
{
    
}
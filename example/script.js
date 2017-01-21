var canvas = document.getElementById("sandbox");
var content = canvas.getContent("2d");

var square, circle;
square = new Path20();
square.moveTo(50, 50);
square.LineTo(250,50);
square.LineTo(250,250);
square.LineTo(50, 250);
square.LineTo(50, 50);
context.linewidth=10;
context.stroke(square);

circle = newPath2D();
circle.arc(150, 150,100,0,2*Math.PI);

context.fillStyle = "rgba(0, 255, 0, 0.5)";
context.fill(circle);

var canvas = document.getElementById("my_canvas");

var ctx = canvas.getContext("2d");

color = "black";

ctx.beginPath();

ctx.strokeStyle = "blue";

ctx.lineWidth = 5;

ctx.arc(270, 210, 40 ,0 , 4*Math.PI);

ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){

color = document.getElementById("color").value;

mouse_x = e.clientX - canvas.offsetLeft;

mouse_y = e.clienty - canvas.offsetTop;

circle(mouse_x,mouse_y);

}

function circle(mouse_x,mouse_y){
    ctx.beginPath();

    ctx.strokeStyle = color;
    
    ctx.lineWidth = 5;
    
    ctx.arc(mouse_x, mouse_y, 40 ,0 , 2*Math.PI);

    ctx.stroke();
    
}

function clear_area(){

ctx.clearRect(0,0 ,canvas.width,canvas.height);

}

ctx.beginPath();

ctx.strokeStyle = "Orange";

ctx.lineWidth = 5;

ctx.arc(320, 255, 40 ,0 , 4*Math.PI);

ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);



ctx.beginPath();

ctx.strokeStyle = "black";

ctx.lineWidth = 5;

ctx.arc(370, 210, 40 ,0 , 4*Math.PI);

ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);


ctx.beginPath();

ctx.strokeStyle = "green";

ctx.lineWidth = 5;

ctx.arc(420, 255, 40 ,0 , 4*Math.PI);

ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);


ctx.beginPath();

ctx.strokeStyle = "red";

ctx.lineWidth = 5;

ctx.arc(469, 210, 40 ,0 , 4*Math.PI);

ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);


canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

current_position_of_X="";

mousesEvent="";
LineColor="black";
LineWidth=3;

canvas.addEventListener("mousedown",my_mouseDown);
function my_mouseDown(e){
    LineColor=document.getElementById("colorChoose").value;
    LineWidth=document.getElementById("widthChoose").value;
    //alert("hi" );
    mousesEvent="mousedown";
}

canvas.addEventListener("mouseup",my_mouseUp);
function my_mouseUp(e){
    mousesEvent="mouseup";
}

canvas.addEventListener("mouseleave",my_mouseLeave);
function my_mouseLeave(e){
    mousesEvent="mouseleave";
}

canvas.addEventListener("mousemove",my_mouseMove);
function my_mouseMove(e){

current_position_of_X = e.clientX - canvas.offsetLeft;
current_position_of_Y = e.clientY - canvas.offsetTop;

if (mousesEvent == "mousedown") {
ctx.beginPath();
ctx.strokeStyle=LineColor;
ctx.lineWidth=LineWidth;
ctx.moveTo(last_position_of_X, last_position_of_Y);
ctx.lineTo(current_position_of_X, current_position_of_Y);
ctx.stroke();
}

last_position_of_X = current_position_of_X;
last_position_of_Y = current_position_of_Y;
}

canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){

    last_position_of_touch_X = current_position_of_touch_X;
    last_position_of_touch_Y = current_position_of_touch_Y;   
}

canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e){

current_position_of_touch_X = e.touches[0].clientX - canvas.offsetLeft;
current_position_of_touch_Y = e.touches[0].clientY - canvas.offsetTop;

ctx.beginPath();
ctx.strokeStyle=LineColor;
ctx.lineWidth=LineWidth;
ctx.moveTo(last_position_of_touch_X, last_position_of_touch_Y);
ctx.lineTo(current_position_of_touch_X, current_position_of_touch_Y);
ctx.stroke();
}
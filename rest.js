////// running file is the animation for the player during regular running sequance
/////////////////////////////////////////////////////////////////////////////////////
var canWidth = 600;
var canHeight = 400;

var x = 0;
var y = 0;


//var trackRight = 0;
var srcX;
var srcY;
///////////////////////////size of the sprite sheet//////////////////
var sheetWidth = 351;
var sheetHeight = 115;
/////////////////// defines the amount of images on the sprite sheet
var cols = 5;
var rows = 1; 

var width = sheetWidth / cols;
var height = sheetHeight / rows;
//////////// Frame referse to a section of the sprite sheet 
var currentFrame = 0;

var character = new Image();
character.src = "rest.jpeg";

////////////////////Game play window////////////////////////////////////
var canvas = document.getElementById('canvas');
canvas.width = canWidth;
canvas.height = canHeight;



var ctx = canvas.getContext('2d');
////////////////////////////////////////frame cycle
function updateframe() {
    currentFrame = ++currentFrame % cols;

    srcX = currentFrame * width;
    srcY = 0;

    // ctx.clearReact(x, y, width, height);
}

//////////////////////////////////update frames
function drawImage(){
    updateframe();
    ctx.drawImage(character, srcX, srcY, width, height, x ,y, width, height);
}
/////////////////////speed of frames
setInterval(function(){
    drawImage();

}, 300);
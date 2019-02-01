var canWidth = 600;
var canHeight = 400;

var x = 0;
var y = 0;


//var trackRight = 0;
var srcX;
var srcY;

var sheetWidth = 845;
var sheetHeight = 164;

var cols = 9;
var rows = 1; 

var width = sheetWidth / cols;
var height = sheetHeight / rows;

var currentFrame = 0;

var character = new Image();
character.src = "https://i.imgur.com/xEFtDJU.jpg?1";

var canvas = document.getElementById('canvas');
canvas.width = canWidth;
canvas.height = canHeight;



var ctx = canvas.getContext('2d');

function updateframe() {
    currentFrame = ++currentFrame % cols;

    srcX = currentFrame * width;
    srcY = 0;

    // ctx.clearReact(x, y, width, height);
}


function drawImage(){
    updateframe();
    ctx.drawImage(character, srcX, srcY, width, height, x ,y, width, height);
}

setInterval(function(){
    drawImage();

}, 55);
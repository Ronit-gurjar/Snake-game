
/*
in HTML canvas, we can develop graphics using tiles. this tiles can be accessed using x and y coordinates.
-1<---x--->+1    &     up -1
 left     right            |
                           y
                           |
                     down +1
*/ 

//board
var blocksize= 25;
var rows= 20;
var cols= 20;
var board;
var context;

window.onload = function(){
    board = document.getElementById("board");

    board.height = rows* blocksize;
    board.width = cols* blocksize;

    context = board.getContext("2d")// for drawing on the board

    update();
}

function update() {
    context.fillStyle = "gray";
    context.fillRect(0,0,board.width, board.height);
}
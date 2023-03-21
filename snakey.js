
/*
in HTML canvas, we can develop graphics using tiles. this tiles can be accessed using x and y coordinates.

for snakes movements:-
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

//snake head
var snakeX = blocksize * 5;
var snakeY = blocksize * 5;

//food
var foodX;
var foodY;

window.onload = function(){
    board = document.getElementById("board");

    board.height = rows* blocksize;
    board.width = cols* blocksize;

    context = board.getContext("2d")// for drawing on the board
    placeFood();//placing food on board
    update();
}

function update() {
    //board's properties
    context.fillStyle = "gray";
    context.fillRect(0,0,board.width, board.height);

    //snake head's properties
    context.fillStyle= "lime"
    context.fillRect(snakeX,snakeY,blocksize,blocksize);

    //food's properites
    context.fillStyle= "red"
    context.fillRect(foodX,foodY,blocksize,blocksize);
}

function placeFood() {
    foodX=Math.floor(Math.random() * cols) * blocksize;
    foodY=Math.floor(Math.random() * rows) * blocksize;
}

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
var blocksize= 30;
var rows= 20;
var cols= 20;
var board;
var context;

//snake head
var snakeX = blocksize * 5;
var snakeY = blocksize * 5;
var speedX = 0;
var speedY = 0;

//snake body
var snakeBody = [];

//food
var foodX;
var foodY;

//end
var gameOver = false;

window.onload = function(){
    board = document.getElementById("board");
    board.height = rows* blocksize;
    board.width = cols* blocksize;
    context = board.getContext("2d")// for drawing on the board

    placeFood();//placing food on board

    document.addEventListener("keyup", changeDirection);
    setInterval(update, 1000/10); // every 100 milliseconds, the canvas updated
}

function placeFood() {
    foodX=Math.floor(Math.random() * cols) * blocksize;
    foodY=Math.floor(Math.random() * rows) * blocksize;
}

function changeDirection(e) {
    if (e.code =="ArrowUp" && speedY !=1) {
        speedX = 0;
        speedY = -1;
    }
    else if (e.code =="ArrowDown" && speedY != -1) {
        speedX = 0;
        speedY = 1;
    }
    else if (e.code =="ArrowLeft" && speedX !=1) {
        speedX = -1;
        speedY = 0;
    }
    else if (e.code =="ArrowRight" && speedX != -1) {
        speedX = 1;
        speedY = 0;
    }
}

function update() {
    if (gameOver){
        return;
    }
    //board's properties
    context.fillStyle = "gray";
    context.fillRect(0,0,board.width, board.height);

    //food's properites
    context.fillStyle= "red"
    context.fillRect(foodX,foodY,blocksize,blocksize);
    if(snakeX == foodX && snakeY == foodY){
        snakeBody.push([foodX,foodY]);
        placeFood();
    }

    for(let i = snakeBody.length-1; i>0;i--){
        //to make the body follow head along
        snakeBody[i] = snakeBody[i-1];
    }
    if (snakeBody.length) {
        //to attach body with head
        snakeBody[0] = [snakeX, snakeY];
    }

    //snake head's and body's properties
    context.fillStyle= "lime"
    snakeX += speedX * blocksize;
    snakeY += speedY * blocksize; 
    context.fillRect(snakeX,snakeY,blocksize,blocksize);
    for (let i = 0; i < snakeBody.length; i++) {
        //if food eaten, increase snake
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blocksize, blocksize);
    }

  // gameover conditions:-
    if (snakeX <0 || snakeX >cols*blocksize || snakeY >rows*blocksize) {
        gameOver = true;
        alert("GAME OVER!!!")
    }
    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
            gameOver = true;
            alert("GAME OVER!!!");
        }
    }
  
}
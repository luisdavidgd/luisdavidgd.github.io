var canvas;
var canvasContext;
var ballX = 50;
var ballY = 50;
var ballSpeedX = 15;
var ballSpeedY = 4;

var player1Score = 0;
var player2Score = 0;
const WINNING_SCORE = 3;

var gameOver = false;

var paddle1Y = 250;
var paddle2Y = 250;
const PADDLE_WIDTH = 10; // paddle thickness
const PADDLE_HEIGHT = 100; // paddle tall


function calculateMousePos(evt) {
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;
    var mouseX = evt.clientX - rect.left - root.scrollLeft;
    var mouseY = evt.clientY - rect.top - root.scrollTop;
    return {
        x: mouseX,
        y: mouseY
    };
}

function handleMouseClick() {
    if (gameOver) {
        player1Score = 0;
        player2Score = 0;
        gameOver = false;
    }
}

window.onload = function () {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    //timer
    var framesPerSecond = 30;
    setInterval(function () {
        if (!gameOver) {
            moveEverything();
        }

        drawEverything();
    }, 1000 / framesPerSecond);

    canvas.addEventListener('mousedown', handleMouseClick);

    canvas.addEventListener('mousemove',
        function (evt) {
            var mousePos = calculateMousePos(evt);
            paddle1Y = mousePos.y - (PADDLE_HEIGHT / 2);
            // paddle2Y = mousePos.x - (PADDLE_HEIGHT / 2); // With X Axis
        });
};

function ballReset() {
    if (player1Score >= WINNING_SCORE || player2Score >= WINNING_SCORE) {
        gameOver = true;
    }
    ballSpeedX = -ballSpeedX;
    ballX = canvas.width / 2;
    ballY = canvas.height / 2;
}

function computerMovement() {
    var paddle2YCenter = paddle2Y + (PADDLE_HEIGHT / 2);
    if (paddle2YCenter < ballY - 35) {
        paddle2Y += 6;
    } else if (paddle2YCenter > ballY + 35) {
        paddle2Y -= 6;
    }
}

function moveEverything() {
    computerMovement();
    ballX += ballSpeedX;
    ballY += ballSpeedY;
    // Horizontal movements
    if (ballX < 0) {
        if (ballY > paddle1Y && ballY < paddle1Y + PADDLE_HEIGHT) {
            ballSpeedX = -ballSpeedX;
            var deltaY = ballY - (paddle1Y + PADDLE_HEIGHT / 2);
            ballSpeedY = deltaY * 0.35;
        } else {
            player2Score++; // must be BEFORE ballReset()
            ballReset();
        }
    }
    if (ballX > canvas.width) {
        if (ballY > paddle2Y && ballY < paddle2Y + PADDLE_HEIGHT) {
            ballSpeedX = -ballSpeedX;
            var deltaY = ballY - (paddle2Y + PADDLE_HEIGHT / 2);
            ballSpeedY = deltaY * 0.35;
        } else {
            player1Score++; // must be BEFORE ballReset()
            ballReset();
        }
    }

    // Vertical movements
    if (ballY > canvas.height) {
        ballSpeedY = -ballSpeedY;
    }
    if (ballY < 0) {
        ballSpeedY = -ballSpeedY;
    }
}

function drawNet(drawColor) {
    for (var i = 0; i < canvas.height; i += 40) {
        colorRect(canvas.width / 2 - 1, i, 2, 20, drawColor);

    }
}

function drawEverything() {
    // next line blanks out the screen with black
    colorRect(0, 0, canvas.width, canvas.height, 'black');
    // draw
    drawNet('green');
    // this is left player paddle
    colorRect(0, paddle1Y, PADDLE_WIDTH, PADDLE_HEIGHT, 'lightblue');
    // this is right computer paddle
    colorRect(canvas.width - PADDLE_WIDTH, paddle2Y, PADDLE_WIDTH, PADDLE_HEIGHT, 'pink');
    // next line draws the ball
    colorCircle(ballX, ballY, 10, 'red');
    // next line draws the score
    canvasContext.fillStyle = 'white';
    canvasContext.fillText(player1Score, 100, 100);
    canvasContext.fillText(player2Score, canvas.width - 100, 100);
    // Game Over!
    if (gameOver) {
        if (player1Score >= WINNING_SCORE) {
            // player 1 win
            canvasContext.fillStyle = 'lightblue';
            canvasContext.fillText("Player 1 Won!", 350, 200);
        } else if (player2Score >= WINNING_SCORE) {
            // player 2 win
            canvasContext.fillStyle = 'pink';
            canvasContext.fillText("Computer Won!", 350, 200);
        }
        canvasContext.fillStyle = 'white';
        canvasContext.fillText("click to continue", 350, 500);
        return;
    }

}
function colorCircle(centerX, centerY, radius, drawColor) {
    canvasContext.fillStyle = drawColor;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
    canvasContext.fill();
}
function colorRect(leftX, topY, width, height, drawColor) {
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect(leftX, topY, width, height);
}
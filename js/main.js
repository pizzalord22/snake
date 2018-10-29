console.log("loaded main module");
spawnFood();
gameLoop = setInterval(loop, gameSpeed);

function loop() {
    if (snake.length-1 >= 100) {
        console.log(gameSpeed);
        gameSpeed = gameSpeed - 10;
        clearInterval(gameLoop);
        reset();
        gameLoop = setInterval(loop,gameSpeed);
    }
    if (snake[0][0] === foodpos[0] && snake[0][1] === foodpos[1]) {
        snake.push(snake[snake.length - 1]);
        spawnFood();
        bot();
    }

    if (direction === 1) {
        if (snake[0][0] + w < ctx.width) {
            snake.unshift([snake[0][0] + w, snake[0][1]]);
            snake.pop();
        } else {
            console.log("game over");
            clearInterval(gameLoop)
        }
    }
    if (direction === 2) {
        if (snake[0][1] + w < ctx.height) {
            snake.unshift([snake[0][0], snake[0][1] + w]);
            snake.pop();
        } else {
            console.log("game over");
            clearInterval(gameLoop)
        }
    }

    if (direction === 0) {
        if (snake[0][1] - w > -w) {
            snake.unshift([snake[0][0], snake[0][1] - w]);
            snake.pop();
        } else {
            console.log("game over");
            clearInterval(gameLoop)
        }
    }

    if (direction === 3) {
        if (snake[0][0] - w > -w) {
            snake.unshift([snake[0][0] - w, snake[0][1]]);
            snake.pop();
        } else {
            console.log("game over");
            clearInterval(gameLoop)
        }
    }
    ctx.clearRect(0, 0, ctx.width, ctx.height);
    for (x = 0; x < snake.length; x++) {
        bodyPart(snake[x][0], snake[x][1]);
    }
    drawFood();
    bot();
}

function bodyPart(x, y) {
    ctx.fillRect(x, y, w, w)
}

function reset() {
    snake = [snake[0]]; // snake start position
    direction = 1;  // default start direction (right)
    foodpos = [0, 20]; // initial food position
}
console.log("loaded food module");
function spawnFood() {
    fx = foodx();
    fy = foody();
    foodpos = [fx, fy];
    checkFood();
    drawFood()
}

function foodx() {
    fx = Math.floor(Math.random() * (ctx.width/w))*w;
    return fx;
}

function foody() {
    fy = Math.floor(Math.random() * (ctx.height/w))*w;
    return fy;
}

function checkFood() {
    tx = foodpos[0];
    ty = foodpos[1];
    for (x = 0; x < snake.length - 1; x++) {
        sx = snake[x][0];
        sy = snake[x][1];
        if (sx === tx && sy === ty) {
            spawnFood()
        }
    }
}

function drawFood() {
    ctx.fillStyle = "#f00";
    ctx.fillRect(foodpos[0], foodpos[1], w, w);
    ctx.fillStyle = "#000";
}
console.log("loaded bot module");

function bot() {
    if (foodpos[0] != snake[0][0]) {
        if (foodpos[0] > snake[0][0]) {
            direction = 1
        }
        if (foodpos[0] < snake[0][0]) {
            direction = 3
        }
    } else {
        if (foodpos[1] > snake[0][1]) {
            direction = 2
        }
        if (foodpos[1] < snake[0][1]) {
            direction = 0;
        }
    }
}
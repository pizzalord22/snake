console.log("loaded key module");
document.addEventListener('keydown', function (event) {
    if (event.keyCode === 37) {
        direction = 3
    }
    if (event.keyCode === 38) {
        direction = 0
    }

    if (event.keyCode === 39) {
        direction = 1
    }
    if (event.keyCode === 40) {
        direction = 2
    }
});

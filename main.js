let engine = new Game();
let home = document.getElementById("home");
let switchToGame = document.getElementById("switchToGame");
let game = document.getElementById("game");

home.style.width = window.innerWidth + "px";
home.style.height = window.innerHeight + "px";

switchToGame.style.position = "absolute";
switchToGame.style.top = window.innerHeight / 2 + "px";
switchToGame.style.left = window.innerWidth / 2 - 25 + "px";
switchToGame.style.width = window.innerWidth / 5 + "px";
switchToGame.style.height = window.innerHeight / 15 + "px";

game.style.width = window.innerWidth + "px";
game.style.height = window.innerHeight + "px";

x = 0
y = 0

window.addEventListener("orientationchange", function() {
    window.location.reload();
});

switchToGame.onclick = function(){
    home.style.display = "none";
    game.style.display = "block";
    requestAnimationFrame(render);
}

function render(){
    engine.createRect(x, y, 100, 100);
    requestAnimationFrame(render);
}

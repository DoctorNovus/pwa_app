var player = new Player(200,200,100,100);

//variables
var score = 0;
var level = 1;
var health = 100;

//ids
var score_id = document.getElementById("score_id");
var level_id = document.getElementById("level_id");
var gameOver = document.getElementById("gameOver");
var gOScore = document.getElementById("scoreCounter");
var gOLevel = document.getElementById("levelCounter");
var game = document.getElementById("game");
var buttons_div = document.getElementsByClassName("buttons_div");
var buttonUp = document.getElementById("buttonUp");
var buttonDown = document.getElementById("buttonDown");
var buttonLeft = document.getElementById("buttonLeft");
var buttonRight = document.getElementById("buttonRight");
var resetButton = document.getElementById("reset");

buttonUp.style.width = 75 + "px";
buttonUp.style.height = 75 + "px";

buttonDown.style.width = 75 + "px";
buttonDown.style.height = 75 + "px";

buttonLeft.style.width = 75 + "px";
buttonLeft.style.height = 75 + "px";

buttonRight.style.width = 75 + "px";
buttonRight.style.height = 75 + "px";

//gameover
gameOver.style.left = canvas.width / 2 + "px";
gameOver.style.top = canvas.height / 2 + "px";

//velocity
velX = 5.0;
velY = 5.0;

//enemy list
var enemyList = [
    
];

//enemy objects
for(let i=0; i<10; i++){
    enemyList.push(new Enemy());
}

Engine.tick(tick);
Engine.zoom(100);

function tick(){
    Engine.clear();
    if(health > 0){
        score += 25;
    }
    scoreEdit();
    leveler();
    healthBar();
    spawnPlayer();
    spawnEnemy();
    movement();
    for(let i in enemyList){
        let enemy = enemyList[i];
        enemy.update(canvas);
    }
    collision();
    detectingMobile();
    Engine.tick(tick);

}

function scoreEdit(){
    score_id.innerHTML = "Score: " + score;
}

function leveler(){
    level = score / 1000;
    level_id.innerHTML = "Level: " + Math.floor(level); 

}

function healthBar(){
    Engine.color("green");
    Engine.createRect(0, 60, health * 2, 20);
}

function spawnPlayer(){
    player.create();
}

function spawnEnemy(){
    for(let i in enemyList){
        let enemy = enemyList[i];
        enemy.create(enemy.x, enemy.y, 50, 50);
    }
}

document.addEventListener('keydown',handleKeyDown,false);
document.addEventListener('keyup',handleKeyUp,false);

function handleKeyUp(event){
    switch(event.keyCode){
        case 87:
        player.up=false;
        break;
        case 83:
        player.down=false;
        break;
        case 68:
        player.right=false;
        break;
        case 65:
        player.left=false;
        break;
    }
}

function handleKeyDown(event){
    switch(event.keyCode){
        case 87:
        player.up=true;
        break;
        case 83:
        player.down=true;
        break;
        case 68:
        player.right=true;
        break;
        case 65:
        player.left=true;
        break;
    }
}

function movement(){
    if(player.up && player.y >= 0){
        player.y -= 20;
    }

    if(player.down && player.y <= window.innerHeight - 125){
        player.y += 20;
    }

    if(player.left && player.x >= 0){
        player.x -= 20;
    }

    if(player.right && player.x <= window.innerWidth - 125){
        player.x += 20;
    }
}

function collision(){
    if(health <= 0){
        gameOver.style.display = "block";
        game.style.display = "none";
        gOScore.innerHTML = "Score: " + score;
        gOLevel.innerHTML = "Level: " + Math.floor(level);
    }

    if (player.x < enemyList[0].x + 50 &&
        player.x + 100 > enemyList[0].x &&
        player.y < enemyList[0].y + 50 &&
        player.y + 100 > enemyList[0].y) {
            health -= 5 / 4;
     }
}

function detectingMobile(){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        // some code..
        if(health > 0){
            buttonUp.style.display = "block";
            buttonDown.style.display = "block";
            buttonLeft.style.display = "block";
            buttonRight.style.display = "block";
        } else {
            buttonUp.style.display = "none";
            buttonDown.style.display = "none";
            buttonLeft.style.display = "none";
            buttonRight.style.display = "none";
        }
    }       
}

buttonUp.ontouchstart = function(){
        player.up = true;
}

buttonUp.ontouchend = function(){
    player.up = false;
}

buttonDown.ontouchstart = function(){
        player.down = true;
}

buttonDown.ontouchend = function(){
    player.down = false;
}

buttonLeft.ontouchstart = function(){
        player.left = true;
}

buttonLeft.ontouchend = function(){
    player.left = false;
}

buttonRight.ontouchstart = function(){
        player.right = true;
}

buttonRight.ontouchend = function(){
    player.right = false;
}

resetButton.onclick = function(){window.location.reload()}

resetButton.ontouchstart = function(){window.location.reload()}
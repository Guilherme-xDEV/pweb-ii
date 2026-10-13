const canvas = document.getElementById('game-canvas');
const context = canvas.getContext('2d');
const game = new Game();

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const floorY = canvas.height - 120;

const keys = {
    ArrowLeft: false,
    ArrowRight: false,
    Space: false,
    Control: false,
};

function resetGame() {
    game.player = new Player();
    game.player.x = 100;
    game.player.y = floorY - game.player.height;
    game.player.velocityY = 0;
    game.enemies = [
        new Enemy(canvas.width - 200, floorY - 40),
        new Enemy(canvas.width - 400, floorY - 40)
    ];
    game.bullets = [];
}

function update() {
    if (keys.ArrowLeft) {
        game.player.x = Math.max(0, game.player.x - game.player.speed);
    }
    if (keys.ArrowRight) {
        game.player.x = Math.min(canvas.width - game.player.width, game.player.x + game.player.speed);
    }

    if (game.player.y >= floorY - game.player.height) {
        game.player.y = floorY - game.player.height;
        game.player.velocityY = 0;
    }

    game.update();
    game.bullets = game.bullets.filter(bullet => !bullet.isOffScreen(canvas.width));
}

function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = '#222';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = '#444';
    context.fillRect(0, floorY, canvas.width, canvas.height - floorY);

    context.fillStyle = '#2ec4b6';
    context.fillRect(game.player.x, game.player.y, game.player.width, game.player.height);

    context.fillStyle = '#ff5757';
    game.enemies.forEach(enemy => {
        context.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
    });

    context.fillStyle = '#ffd166';
    game.bullets.forEach(bullet => {
        context.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
    });

    context.fillStyle = '#ffffff';
    context.font = '18px Arial';
    context.fillText(`Health: ${game.player.health}`, 20, 30);
    context.fillText(`Enemies: ${game.enemies.length}`, 20, 55);
}

function loop() {
    update();
    render();
    requestAnimationFrame(loop);
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

window.addEventListener('keydown', event => {
    if (event.code in keys) {
        keys[event.code] = true;
    }
    if (event.code === 'Space') {
        game.player.jump();
    }
    if (event.code === 'ControlLeft' || event.code === 'ControlRight') {
        game.shoot();
    }
    if (event.code === 'KeyR') {
        resetGame();
    }
});

window.addEventListener('keyup', event => {
    if (event.code in keys) {
        keys[event.code] = false;
    }
});

resetGame();
loop();

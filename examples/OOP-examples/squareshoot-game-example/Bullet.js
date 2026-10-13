class Bullet {
    constructor(x, y, damage) {
        this.x = x;
        this.y = y;
        this.width = 10;
        this.height = 6;
        this.speed = 10;
        this.damage = damage;
    }

    update() {
        this.x += this.speed;
    }

    isOffScreen(canvasWidth) {
        return this.x > canvasWidth || this.x < -this.width;
    }
}

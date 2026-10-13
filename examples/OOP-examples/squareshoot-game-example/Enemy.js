class Enemy {

    constructor(x,y) {

        this.x = x;
        this.y = y;

        this.width = 40;
        this.height = 40;

        this.health = 5;

        this.speed = 1;
    }

    update(player) {

        if(player.x > this.x) {

            this.x += this.speed;
        }

        if(player.x < this.x) {

            this.x -= this.speed;
        }
    }

    takeDamage(amount) {

        this.health -= amount;
    }

    isDead() {

        return this.health <= 0;
    }
}
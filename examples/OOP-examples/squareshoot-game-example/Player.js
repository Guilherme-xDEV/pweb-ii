class Player {

    constructor() {

        this.x = 100;
        this.y = 300;

        this.width = 50;
        this.height = 70;

        this.speed = 5;
        this.jumpForce = 15;

        this.velocityY = 0;
        this.gravity = 0.8;

        this.maxHealth = 5;
        this.health = 5;

        this.weaponDamage = 1;

        this.npcs = [];

        this.shield = 0;
    }

    update() {

        this.velocityY += this.gravity;

        this.y += this.velocityY;

        if(this.y > 300) {

            this.y = 300;
            this.velocityY = 0;
        }
    }

    jump() {

        if(this.velocityY === 0) {

            this.velocityY = -this.jumpForce;
        }
    }

    damage(amount) {

        this.health -= amount;

        if(this.health < 0) {

            this.health = 0;
        }
    }
}
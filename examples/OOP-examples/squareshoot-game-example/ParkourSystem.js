class ParkourSystem {

    constructor(player) {

        this.player = player;
    }

    wallRun() {

        this.player.x += 10;
    }

    doubleJump() {

        this.player.velocityY = -18;
    }

    dash() {

        this.player.x += 120;
    }

    climb() {

        this.player.y -= 8;
    }

    slide() {

        this.player.speed += 2;
    }
}
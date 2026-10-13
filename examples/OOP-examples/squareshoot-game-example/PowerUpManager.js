class PowerUpManager {

    constructor(player) {

        this.player = player;
    }

    weaponBoost() {

        this.player.weaponDamage += 5;
    }

    speedBoost() {

        this.player.speed += 4;
    }

    summonNPC() {

        this.player.npcs.push(
            new AllyNPC(
                this.player.x + 50,
                this.player.y
            )
        );
    }

    megaJump() {

        this.player.jumpForce += 12;
    }

    shield() {

        this.player.shield += 50;
    }
}
class Shop {

    constructor(player) {

        this.player = player;

        this.coins = 0;
    }

    buyDamage() {

        if(this.coins >= 100) {

            this.coins -= 100;

            this.player.weaponDamage++;
        }
    }

    buyLife() {

        if(this.coins >= 50) {

            this.coins -= 50;

            this.player.maxHealth++;
        }
    }

    buySpeed() {

        if(this.coins >= 80) {

            this.coins -= 80;

            this.player.speed++;
        }
    }
}
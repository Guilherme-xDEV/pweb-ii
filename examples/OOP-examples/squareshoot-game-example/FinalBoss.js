class FinalBoss {

    constructor() {

        this.name = "Morvak Supremo";

        this.health = 500;

        this.damage = 4;

        this.phase = 1;
    }

    update() {

        if(this.health <= 250) {

            this.phase = 2;
        }

        if(this.health <= 100) {

            this.phase = 3;
        }
    }

    specialAttack(player) {

        player.damage(
            this.damage * this.phase
        );
    }
}
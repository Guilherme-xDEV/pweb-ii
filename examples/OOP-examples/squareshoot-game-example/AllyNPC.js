class AllyNPC {

    constructor(x,y) {

        this.x = x;
        this.y = y;

        this.damage = 1;
    }

    update(player) {

        this.x = player.x - 60;
        this.y = player.y;
    }

    attack(enemy) {

        enemy.takeDamage(this.damage);
    }
}
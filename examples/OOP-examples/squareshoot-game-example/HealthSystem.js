class HealthSystem {
    constructor() {
        this.maxHealth = 5;
        this.health = 5;
    }

    damage(value) {
        this.health -= value;

        if(this.health < 0)
            this.health = 0;
    }

    heal(value) {
        this.health += value;

        if(this.health > this.maxHealth)
            this.health = this.maxHealth;
    }

    isDead() {
        return this.health <= 0;
    }
}
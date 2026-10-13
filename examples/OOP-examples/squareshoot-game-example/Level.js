class Level {

    constructor() {

        this.platforms = [];
        this.enemies = [];
        this.powerups = [];
    }

    addEnemy(enemy) {

        this.enemies.push(enemy);
    }

    addPlatform(platform) {

        this.platforms.push(platform);
    }
}
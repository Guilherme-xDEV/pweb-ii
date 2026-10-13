class Game {

    constructor() {

        this.player = new Player();

        this.bullets = [];

        this.enemies = [];

        this.level = new Level();
    }

    shoot() {

        this.bullets.push(

            new Bullet(
                this.player.x + 40,
                this.player.y + 20,
                this.player.weaponDamage
            )
        );
    }

    update() {

        this.player.update();

        this.bullets.forEach(

            bullet => bullet.update()
        );

        this.enemies.forEach(

            enemy => enemy.update(this.player)
        );

        this.bullets.forEach(bullet => {

            this.enemies.forEach(enemy => {

                if(collision(bullet, enemy)) {

                    enemy.takeDamage(
                        bullet.damage
                    );
                }
            });
        });

        this.enemies = this.enemies.filter(

            enemy => !enemy.isDead()
        );
    }
}
class XPSystem {

    constructor() {

        this.level = 1;
        this.xp = 0;
        this.nextLevel = 100;
    }

    gain(amount) {

        this.xp += amount;

        if(this.xp >= this.nextLevel) {

            this.level++;

            this.xp -= this.nextLevel;

            this.nextLevel *= 1.5;
        }
    }
}
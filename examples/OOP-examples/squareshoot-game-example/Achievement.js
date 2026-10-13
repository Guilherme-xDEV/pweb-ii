class Achievement {

    constructor(name){

        this.name = name;

        this.unlocked = false;
    }

    unlock(){

        this.unlocked = true;

        console.log(
            "Conquista desbloqueada!"
        );
    }
}
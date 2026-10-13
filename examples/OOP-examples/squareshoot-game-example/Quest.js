class Quest {

    constructor(name,target,reward){

        this.name = name;
        this.target = target;
        this.progress = 0;
        this.reward = reward;
        this.completed = false;
    }

    addProgress() {

        this.progress++;

        if(this.progress >= this.target){

            this.completed = true;
        }
    }
}
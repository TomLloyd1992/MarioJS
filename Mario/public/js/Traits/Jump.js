import {Trait} from "../entity.js";

export default class Jump extends Trait{
    constructor(){
        super("jump");

        this.duration = 0.1;
        this.velocity = 200;
        this.enguageTime = 0;
    }

    start(){
        this.enguageTime = this.duration;
    }

    concel(){

            this.enguageTime = 0;

    }
    update(entity, deltaTime)
    {
      if(this.enguageTime > 0)
      {
          entity.vel.y = -this.velocity;
          this.enguageTime -= deltaTime;
      }
    }
}
import Entity from "./entity.js"
import {loadMarioSprite} from "./sprites.js"

export function createMario()
{
    return loadMarioSprite()
    .then(sprites => {
    const mario = new Entity();


        mario.draw = function(context)
        {
            sprites.draw("idle", context, this.pos.x, this.pos.y );
        }

        mario.update = function updateMario(deltaTime){
            //Increase mario x + y pos every update
            this.pos.x += this.vel.x * deltaTime;
            this.pos.y += this.vel.y * deltaTime;
        }
    return mario;
    });
}
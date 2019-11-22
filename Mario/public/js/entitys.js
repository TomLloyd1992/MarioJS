import Entity, {Trait} from "./entity.js"
import {loadMarioSprite} from "./sprites.js"
import Velocity from "./Traits/Velocity.js"
import Jump from "./Traits/Jump.js"



export function createMario()
{
    return loadMarioSprite()
    .then(sprites => {
    const mario = new Entity();

        mario.addTrait(new Velocity());
        mario.addTrait(new Jump());

        mario.draw = function(context)
        {
            sprites.draw("idle", context, this.pos.x, this.pos.y );
        }


    return mario;
    });
}


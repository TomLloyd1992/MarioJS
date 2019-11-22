import Compositor from "./Compositor.js";  //Compositior for loading the different buffers
import {loadLevel} from "./loaders.js";  //Loader Json
import {loadBackGroundSprites, loadMarioSprite} from "./sprites.js"
import {createBackgroundLayer} from "./layers.js"



//Creating Canvas
const canvas = document.getElementById("screen");
const context = canvas.getContext("2d");

//Creating the sprite Layer
function createSpriteLayer(sprite,pos){
    return function drawSpriteLayer(context){
        //Draw Mario
        sprite.draw("idle", context, pos.x,pos.y );
    };
}


Promise.all([
    loadMarioSprite(),
    loadBackGroundSprites(),
    loadLevel("1-1"),
])
.then(([marioSprite, backgroundSprites, level]) => {

    const comp = new Compositor();

    const backgroundLayer = createBackgroundLayer(level.backgrounds, backgroundSprites);

    comp.layers.push(backgroundLayer);
    
        //Mario Starting Pos
        const pos = {
            x: 64,
            y: 64,
        };

        const spriteLayer = createSpriteLayer(marioSprite, pos);
        comp.layers.push(spriteLayer);


        //Update Function
        function update()
        {
            //Drawing the background layer
            comp.draw(context);

 


            //Increase mario x + y pos every update
            pos.x += 2;
            pos.y +=2;

            //Animation update for more accurate fps
            requestAnimationFrame(update);

        }

        //Call update atleast once
        update();


});





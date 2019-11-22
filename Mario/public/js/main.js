import Compositor from "./Compositor.js";  //Compositior for loading the different buffers
import Entity from "./entity.js";   //Enities used to create sprites
import Timer from "./Timer.js"
import {loadLevel} from "./loaders.js";  //Loader Json
import {createMario} from "./entitys.js";   //creating mario
import {loadBackGroundSprites} from "./sprites.js"  
import {createBackgroundLayer, createSpriteLayer} from "./layers.js"

//Creating Canvas
const canvas = document.getElementById("screen");
const context = canvas.getContext("2d");

Promise.all([
    createMario(),
    loadBackGroundSprites(),
    loadLevel("1-1"),
])
.then(([mario, backgroundSprites, level]) => {

    const comp = new Compositor();
    const backgroundLayer = createBackgroundLayer(level.backgrounds, backgroundSprites);

    mario.pos.set(64,180);
    mario.vel.set(200,-600);

    comp.layers.push(backgroundLayer);
    
    //Gravity
    const gravity = 30;
    
    //Layer Sprites
    const spriteLayer = createSpriteLayer(mario);
    comp.layers.push(spriteLayer);

    const timer = new Timer(1/60);
    

    timer.update = function update(time){
             //Drawing the background layer
             comp.draw(context);
             //Update Mario
             mario.update(time);
             //Decrease mario Vel y with gravity
             mario.vel.y += gravity;
    }

    timer.start();


});





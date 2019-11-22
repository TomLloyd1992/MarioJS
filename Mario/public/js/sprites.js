import {loadImage} from "./loaders.js";  //Loaders for image and Json
import SpriteSheet from "./SpriteSheet.js"; //SpriteSheet Renderer
 
 //Loading Tiles Sprite Sheet
export function loadBackGroundSprites()
{
    return loadImage("/img/tiles.png")
    .then(image => {
        const sprites = new SpriteSheet(image, 16, 16);
        sprites.defineTile("ground", 0,0);
        sprites.defineTile("sky", 3, 23);
        return sprites;
    });
}

 //Loading Mario Sprite Sheet
 export function loadMarioSprite()
 {
     return loadImage("/img/characters.gif")
     .then(image => {
         const sprites = new SpriteSheet(image, 16, 16);
         sprites.define("idle", 276, 44,  16, 16);
         return sprites;
     });
 }
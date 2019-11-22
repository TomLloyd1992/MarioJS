//Creating the Background layer
export function createBackgroundLayer(backgrounds, sprites){
    const backgroundBuffer = document.createElement("canvas");
    backgroundBuffer.width = 256;
    backgroundBuffer.height = 240;

      //Loading Tiles for Level 1
      backgrounds.forEach(backgrounds => {
        drawBackground(backgrounds, backgroundBuffer.getContext("2d"), sprites);
        });

        return function drawBackgroundLayer(context){
            //Drawing just the background serperately
            context.drawImage(backgroundBuffer, 0,0 );
        };
}

//Drawubg Background Tiles Function
function drawBackground(background, context, sprites) {
    background.ranges.forEach(([x1,x2,y1,y2]) => {
        for(let x = x1; x< x2; ++x){
            for(let y = y1; y < y2; ++y)
            {
                sprites.drawTile(background.tile, context, x, y);
            }
        }
    });
}

export function createSpriteLayer(entity)
{
    return function drawSpriteLayer(context){
        entity.draw(context);
    };
}
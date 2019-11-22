//Load image function
export function loadImage(url) {
    return new Promise(resolve => {
        const image = new Image();
        image.addEventListener("load", () => {
            resolve(image);
        });
        image.src= url;
    });
}

//Loading using Json
export function loadLevel(name)
{
    return fetch(`/levels/${name}.json`)
    .then(r => r.json());
}
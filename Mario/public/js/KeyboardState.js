const PRESSED = 1;
const RELEASED = 0;

export default class Keyboard{

    constructor(){

    //Holds the current state of a key
    this.keyStates = new Map();

    //holds the call back functions for a given key code
    this.keyMap = new Map();
    }

    addMapping(keyCode, callback)
    {
        this.keyMap.set(keyCode, callback);
    }

    handleEvent(event){
        const {keyCode} = event;

        if(!this.keyMap.has(keyCode))
        {
            //does not have key map
            return false;
        }

        event.preventDefault();

        const keyState = event.type === "keydown" ? PRESSED : RELEASED;

        if(this.keyStates.get(keyCode) === keyState)
        {
            return;
        }

        this.keyStates.set(keyCode, keyState);

        this.keyMap.get(keyCode)(keyState);
    }

        listenTo(window){
        ["keydown", "keyup"].forEach(eventName => {
            window.addEventListener(eventName, event => {
                this.handleEvent(event);
            });
        });
    }

}
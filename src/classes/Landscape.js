class Landscape {
    constructor() {
        this.image = loadImage('./assets/images/landscape.png');
    }

    display() {
        background(150, 90, 115) //purple
        image(this.image,100/2,100/2,100,100);
    }

    setup(){
        
    }
}
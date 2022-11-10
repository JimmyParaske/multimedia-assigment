class Lamp {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.width = 35;
        this.height = 108;
        this.image = loadImage('./assets/images/lamp.png');
    }

    display() {
        image(this.image, this.x, this.y, this.width*2, this.height*2);
    }
}
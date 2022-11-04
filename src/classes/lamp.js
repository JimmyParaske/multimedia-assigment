let x = 200;
let y = 300;
let width = 35;
let height = 108;

class Lamp {
    constructor() {
        this.x = 200;
        this.y = 300;
        this.width = 35;
        this.height = 108;
        this.image = loadImage('assets/images/lamp.png');
    }

    draw() {
        image(this.image,this.x,this.y,this.width,this.height);
    }
}
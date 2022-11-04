let x = 200;
let y = 300;
let width = 168;
let height = 183;

class HouseA {
    constructor() {
        this.x = 200;
        this.y = 300;
        this.width = 168;
        this.height = 183;
        this.image = loadImage('assets/images/house-a.png');
    }

    draw() {
        image(this.image,this.x,this.y,this.width,this.height);
    }
}
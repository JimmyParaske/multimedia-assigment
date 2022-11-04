class Wagon {
    constructor() {
        this.x = 200;
        this.y = 300;
        this.width = 93;
        this.height = 75;
        this.image = loadImage('assets/images/wagon.png');
    }

    draw() {
        image(this.image,this.x,this.y,this.width,this.height);
    }
}
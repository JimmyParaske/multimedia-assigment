class HouseC {
    constructor() {
        this.x = 200;
        this.y = 300;
        this.width = 221;
        this.height = 183;
        this.image = loadImage('assets/images/house-c.png');
    }

    draw() {
        image(this.image,this.x,this.y,this.width,this.height);
    }
}
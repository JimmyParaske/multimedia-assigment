class HouseA {
    constructor() {
        this.x = 200;
        this.y = 300;
        this.width = 168;
        this.height = 183;
        this.image = loadImage('assets/images/house-a.png');
    }

    display() {
        image(this.image,this.x,this.y,this.width,this.height);
    }
}
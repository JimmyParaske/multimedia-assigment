class HouseB {
    constructor() {
        this.x = 200;
        this.y = 300;
        this.width = 210;
        this.height = 244;
        this.image = loadImage('assets/images/house-b.png');
    }

    display() {
        image(this.image,this.x,this.y,this.width,this.height);
    }
}
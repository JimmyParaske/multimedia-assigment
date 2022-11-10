class Well {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.width = 65;
        this.height = 65;
        this.image = loadImage('./assets/images/well.png');
    }

    display() {
        image(this.image, this.x, this.y, this.width*2, this.height*2);
    }
}
class Sign {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.width = 37;
        this.height = 45;
        this.image = loadImage('assets/images/sign.png');
    }

    display() {
        stroke(0);
        strokeWeight(10);
        fill(180, 55, 0);
        image(this.image, this.x, this.y, this.width*2, this.height*2);
    }
}
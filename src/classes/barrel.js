class Barrel {
    constructor() {
        this.x = 200;
        this.y = 300;
        this.width = 24;
        this.height = 30;
        this.image = loadImage('./assets/images/barrel.png');
    }

    display() {
        stroke(0);
        strokeWeight(10);
        fill(180, 55, 0);
        image(this.image, this.x, this.y, this.width, this.height);
    }

    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }
}
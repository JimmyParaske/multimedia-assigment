class Barrel {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.width = 24;
        this.height = 30;
        this.image = loadImage('./assets/images/barrel.png');
    }

    display() {
        stroke(0);
        strokeWeight(10);
        fill(180, 55, 0);
        image(this.image, this.x, this.y, this.width*2, this.height*2);
    }

    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }
}
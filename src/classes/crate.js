class Crate {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.width = 39;
        this.height = 35;
        this.image = loadImage('./assets/images/crate.png');
    }

    display() {
        image(this.image, this.x, this.y, this.width*2, this.height*2);
    }


    //Getters
    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    getWidth() {
        return this.width;
    }

    getHeigth() {
        return this.height;
    }
}
class CrateStack {
    constructor() {
        this.x = 200;
        this.y = 300;
        this.width = 73;
        this.height = 68;
        this.image = loadImage('assets/images/crate-stack.png');
    }

    draw() {
        image(this.image, this.x, this.y, this.width, this.height);
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
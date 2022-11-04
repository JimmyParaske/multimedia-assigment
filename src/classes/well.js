class Well {
    constructor() {
        this.x = 200;
        this.y = 300;
        this.width = 65;
        this.height = 65;
        this.image = loadImage('assets/images/well.png');
    }

    draw() {
        image(this.image,this.x,this.y,this.width,this.height);
    }
}
class Background {
    constructor() {
        this.image = loadImage('assets/images/landscape.png');
    }

    draw() {
        image(this.image,CANVAS_WIDTH/2,CANVAS_HEIGHT/2,CANVAS_WIDTH,CANVAS_HEIGHT);
    }
}
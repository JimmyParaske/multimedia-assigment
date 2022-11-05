export default class Barrel {
    constructor() {
        this.x = 200;
        this.y = 300;
        this.width = 24;
        this.height = 30;
        this.image = loadImage('./assets/images/barrel.png');
    }

    draw() {
        image(this.image,this.x,this.y,this.width,this.height);
    }

    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }
}
let x = 200;
let y = 300;
let width = 37;
let height = 45;

class Sign {
    constructor() {
        this.x = 200;
        this.y = 300;
        this.width = 37;
        this.height = 45;
        this.image = loadImage('assets/images/sign.png');
    }

    draw() {
        image(this.image,this.x,this.y,this.width,this.height);
    }
}
class Player {
    constructor() {
        this.x = 400;
        this.y = 375;
        this.width = 70;
        this.height = 70;
        this.image = loadImage('./assets/images/barrel.png');
        //this.jumpSound = loadSound('./assets/sounds/player-jump.mp3');
        this.jump = false;
    }

    display() {
        stroke(0);
        strokeWeight(2);
        fill(255, 255, 255);
        image(this.image, this.x, this.y, this.width, this.height);
    }

    setup() {

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

    getJump() {
        return this.jump;
    }

    //Moves
    moveLeft() {
        this.x = this.x - 5;
    }

    moveRight() {
        this.x = this.x + 5;
    }

    jump() {
        //this.jumpSound.play();
        this.jump = true;
    }

    noJump() {
        this.jump = false;
    }

    //Player hits Crate
    hits(c) {
        if (this.x >= c.getX() - c.getWidth() / 2 && this.x <= c.getX() + c.getWidth() / 2 && this.y + c.getWidth() >= c.getY() - c.getWidth() / 2 && this.y + this.height <= c.getY() + c.getWidth() / 2 && jump == false) {
            return true;
        }
        return false;
    }
}
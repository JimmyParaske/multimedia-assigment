class Player {
    constructor() {
        this.x = 400;
        this.y = 465;
        this.width = 70;
        this.height = 70;
        this.image = loadImage('./assets/images/barrel.png');
        //this.jumpSound = loadSound('./assets/sounds/player-jump.mp3');
        this.speed = 5;
        this.j = false;
        this.direction = 1;
        this.velocity = 0;
        this.jumpHeight = -15;
        this.fallingSpeed = 0.5;
        this.minHeight = 465;
        this.maxHeight = 50;
        this.jumpCounter = 0;
    }

    display() {
        fill(255, 255, 255);
        rect(this.x, this.y, this.width, this.height);
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

    getJump() {
        return this.j;
    }

    //Setters
    setX(x) {
        this.x = x;
    }

    setY(y) {
        this.y = y;
    }

    setVelocity(velocity) {
        this.velocity = velocity;
    }

    setJumpCounter(jumpCounter) {
        this.jumpCounter = jumpCounter;
    }

    //Moves
    moveLeft() {
        this.x = this.x - this.speed;
    }

    moveRight() {
        this.x = this.x + this.speed;
    }

    jump() {
        this.j = true;
    }

    noJump() {

        this.j = false;
    }
}
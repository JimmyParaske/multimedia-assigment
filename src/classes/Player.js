class Player {
    constructor() {
        this.x = 400;
        this.y = 375;
        this.width = 70;
        this.height = 70;
        this.image = loadImage('./assets/images/barrel.png');
        //this.jumpSound = loadSound('./assets/sounds/player-jump.mp3');
        this.j = false;
        this.direction = 1;
        this.velocity = 2;
        this.jumpHeight = 15;
        this.fallingSpeed = 2;
        this.minHeight = 375;
        this.maxHeight = 50;
        this.jumpCounter = 0;
    }

    display() {
        stroke(0);
        strokeWeight(2);
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
        if (this.x + this.width / 2 >= 5) {
            this.x = this.x - 5;
        }
    }

    moveRight() {
        if (this.x + this.width / 2 <= 800 - 5) {
            this.x = this.x + 5;
        }
    }

    jump() {
        //this.jumpSound.play();
        this.j = true;
    }

    noJump() {
        this.j = false;
    }

    gravity() {
        if (this.y >= this.minHeight && this.j == false) {
            //stopped falling
            this.y = this.y; //stay at ground
            this.jumpCounter = 0; //reset counter
        }
        else {
            this.y = this.y + (this.direction * this.velocity);
        }

        if (this.j == true) {
            if (this.y <= this.maxHeight || this.jumpCounter > this.jumpHeight) {
                if (this.y >= this.minHeight) {
                    this.y = this.minHeight; // stay at ground level, dont fall down 
                }
                else {
                    this.velocity = this.fallingSpeed;
                }
            }
            else {
                this.velocity = -this.jumpHeight;
                this.jumpCounter = this.jumpCounter + 1;
            }
        }
        else {
            this.velocity = this.fallingSpeed;
        }
    }
}
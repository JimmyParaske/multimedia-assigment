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
        //this.jumpSound.play();
        this.j = true;
    }

    noJump() {

        this.j = false;
    }

    /*gravity() {
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
    } */


    /* MPOROUME AMA EINAI NA TO KALOUME MESW THS JUMP KAI MESA STIS IF NA VAZOUME SAN SYNTHIKH TO JUMP TRUE/FALSE EPISHS!!!! */

    gravity() {

        /* KATI EXW KANEI KAI FREEZAREI AMA PAS ARISTERA H DEKSIA H PATHSEIS ALLO PLHKTRO TO JUMP */
        /* DHLADH KAPOY KRATAEI TO THIS.Y = THIS.Y ENW DEN PREPEI */

        this.velocity += this.fallingSpeed
        this.y += this.velocity

        if (this.y > this.minHeight) {
            this.velocity = 0
            this.y = this.minHeight
            if (keyIsDown(UP_ARROW)) {
                this.velocity += this.jumpHeight
            }
        }



        /* H SYNTHIKH IF(THIS.J == TRUE DEN EINAI ETOIMH) !!!!!!!!!!!!!!!! */

        /* EXW VALEI OTAN GINETAI TRUE NA PHDAEI PIO PSHLA GIA NA KATALAVNW POTE GINETAI TRUE KAI PWS/ME TI KOUMPI/SYNDIASMO GINETAI TRUE!!! */
        //this.jump();



    }
}
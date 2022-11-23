class Player {
    constructor() {
        this.image = loadImage('./assets/images/player.png');

        this.sprite = createSprite(this.image, 400, 465, 70, 70);

        this.sprite.rotationLock = true;
        //για να ειναι το σωστο collider και να μην χτυπαει στο κενο πριν το κεφαλι του geralt;
        //geralt.setCollider("rectangle",0,0,80,80);

        this.speed = 5;
        this.jumpHeight = -8;
        this.fallingSpeed = 0.2;
        this.minHeight = 465;
        this.maxHeight = 50;
    }

    display() {
        this.image.resize(88, 80); //TODO
    }

    //Getters
    getX() {
        return this.sprite.x;
    }

    getY() {
        return this.sprite.y;
    }

    getWidth() {
        return this.sprite.width;
    }

    getHeigth() {
        return this.sprite.height;
    }

    getSprite() {
        return this.sprite;
    }

    //Setters
    setX(x) {
        this.sprite.x = x;
    }

    setY(y) {
        this.sprite.y = y;
    }

    // setVelY(int){
    //     this.sprite.vel.y = int;
    // }

    //Moves
    moveLeft() {
        this.sprite.vel.x = -this.speed;
    }

    moveRight() {
        this.sprite.vel.x = +this.speed;
    }

    stay() {
        this.sprite.vel.x = 0;
    }

    jump() {
        //this.jumpSound.play();
        this.sprite.vel.y += this.fallingSpeed;
        this.sprite.y += this.sprite.vel.y;

        if (this.sprite.y > this.minHeight) {
            this.sprite.vel.y = 0;
            this.sprite.y = this.minHeight;

            if (keyIsDown(UP_ARROW)) {
                this.sprite.vel.y = this.jumpHeight;
            }
        }
    }
}
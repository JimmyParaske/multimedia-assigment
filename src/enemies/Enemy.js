class Enemy {
    constructor(x, y, animationLeft, animationRight) {
        this.x = x;
        this.y = y;
        this.width = 55;
        this.height = 100;
        this.animationLeft = animationLeft;
        this.animationRight = animationRight;

        this.sprite = createSprite(this.x, this.y, this.width, this.height);
        this.sprite.visible = false;

        this.sprite.layer = 2;
        this.sprite.rotationLock = true;
    }

    display() {
        this.sprite.visible = true;

        this.sprite.addAnimation('left', this.animationLeft);
        this.sprite.addAnimation('right', this.animationRight);
    }

    // changeAnimation(string) {
    //     this.sprite.changeAnimation(string);
    // }

    // collided(object) {
    //     if (this.sprite.collided(object)) {
    //         return true;
    //     }
    //     return false;
    // }

    // overlaps(object) {
    //     if (this.sprite.overlaps(object)) {
    //         return true;
    //     }
    //     return false;
    // }

    // remove() {
    //     this.sprite.remove();
    // }

    getSprite() {
        return this.sprite;
    }

    // getY() {
    //     return this.sprite.y;
    // }

    // setY(int) {
    //     this.y = int;
    //     this.sprite.y = int;
    // }

    // setVelX(int) {
    //     this.sprite.vel.x = int;
    // }
}
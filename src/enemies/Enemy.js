class Enemy {
    constructor(x, y, animationLeft, animationRight) {
        this.x = x;
        this.y = y;
        this.width = 55;
        this.height = 100;
        this.animationLeft = animationLeft;
        this.animationRight = animationRight;

        this.sprite = createSprite(this.x, this.y, this.width, this.height);
        this.sprite.addAnimation('left', this.animationLeft);
        this.sprite.addAnimation('right', this.animationRight);
        this.sprite.visible = false;

        this.animationLeft.frameDelay = 40;
        this.animationRight.frameDelay = 40;
        this.sprite.rotationLock = true;
        this.sprite.layer = 2;
    }

    display() {
        this.sprite.visible = true;

        this.sprite.y = this.y;
    }

    getSprite() {
        return this.sprite;
    }    

    getX() {
        return this.sprite.x;
    }

    getY() {
        return this.sprite.y;
    }

    setVelX(int) {
        this.sprite.vel.x = int;
    }
}
class Heart {
    constructor(x, y, animation) {
        this.x = x;
        this.y = y;
        this.width = 40;
        this.height = 40;

        this.sprite = createSprite(this.x, this.y, this.width, this.height);
        this.sprite.visible = false;

        this.animation = animation;
        this.sprite.rotationLock = true;
    }

    display() {
        this.sprite.collider = 'static';
        
        this.sprite.addAnimation(this.animation);
        this.sprite.animation.stop();

        this.sprite.visible = true;
        
        this.sprite.y = this.y;
    }

    setX(int) {
        this.x = int;
        this.sprite.x = int;
    }

    nextFrame() {
        this.sprite.animation.nextFrame();
    }
}
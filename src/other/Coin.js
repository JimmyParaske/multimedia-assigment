class Coin {
    constructor(x, y, animation) {
        this.x = x;
        this.y = y;
        this.width = 10;
        this.height = 10;

        this.sprite = createSprite(this.x, this.y, this.width, this.height);
        this.sprite.visible = false;

        this.animation = animation;
        this.sprite.rotationLock = true;
    }

    display() {
        this.sprite.visible = true;

        this.sprite.collider = 'static';

        this.sprite.addAnimation(this.animation);

        this.sprite.y = this.y;
    }

    getSprite() {
        return this.sprite;
    } 

    remove() {
        this.sprite.remove();
    }
}
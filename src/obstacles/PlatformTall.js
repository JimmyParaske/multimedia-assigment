class PlatformTall {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 185;
        this.height = 220;
        this.image = loadImage('./assets/images/Obstacles/platformTall.png');

        this.topSprite = createSprite(this.x, (this.y - 112), this.width, 1);
        this.topSprite.visible = false;

        this.sprite = createSprite(this.x, this.y, this.width, this.height);
        this.sprite.visible = false;

        this.topSprite.rotationLock = true;
        this.topSprite.layer = 0;

        this.sprite.rotationLock = true;
        this.sprite.layer = 0;
    }

    display() {
        this.topSprite.collider = 'static';
        this.sprite.collider = 'none';

        this.sprite.addImage(this.image);
        this.sprite.visible = true;

        this.topSprite.y = (this.y - 112);
        this.sprite.y = this.y;
    }

    getSprite() {
        return this.topSprite;
    }

    getX() {
        return this.sprite.x;
    }

    getY() {
        return this.topSprite.y;
    }
}
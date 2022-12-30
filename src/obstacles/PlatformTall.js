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

        this.topSprite.layer = 1;
        this.sprite.layer = 1;
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
        return this.sprite;
    }

    getX() {
        return this.sprite.x;
    }

    getY() {
        return this.sprite.y;
    }
}
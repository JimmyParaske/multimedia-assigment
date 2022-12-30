class Platform {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 95;
        this.height = 15;
        this.image = loadImage('./assets/images/Obstacles/platformShort.png');

        this.sprite = createSprite(this.x, this.y, this.width, this.height);
        this.sprite.visible = false;

        this.sprite.layer = 1;
    }

    display() {
        this.sprite.collider = 'none';

        this.sprite.addImage(this.image);

        this.sprite.visible = true;

        this.sprite.y = this.y;
    }

    getSprite() {
        return this.sprite;
    }
}
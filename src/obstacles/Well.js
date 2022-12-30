class Well {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 70;
        this.height = 80;
        this.image = loadImage('./assets/images/Obstacles/well.png');

        this.sprite = createSprite(this.x, this.y, this.width, this.height);
        this.sprite.visible = false;

        this.sprite.layer = 1;
    }

    display() {
        this.sprite.collider = 'static';

        this.sprite.addImage(this.image);

        this.sprite.visible = true;

        this.sprite.y = this.y;
    }

    getSprite() {
        return this.sprite;
    }
}
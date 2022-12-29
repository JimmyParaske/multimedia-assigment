class Sign {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 60;
        this.height = 85;
        this.image = loadImage('./assets/images/sign.png');

        this.sprite = createSprite(this.x, this.y, this.width, this.height);
        this.sprite.visible = false;

        this.sprite.layer = 1;
    }

    display() {
        this.sprite.collider = 'static';

        this.image.resize(70, 100);
        this.sprite.addImage(this.image);

        this.sprite.visible = true;

        this.sprite.y = this.y;
    }

    getSprite() {
        return this.sprite;
    }
}
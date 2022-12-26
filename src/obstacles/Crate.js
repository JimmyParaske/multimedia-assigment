class Crate {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 65;
        this.height = 65;
        this.image = loadImage('./assets/images/crate_cropped.png');

        this.sprite = createSprite(this.x, this.y, this.width, this.height);
        this.sprite.visible = false;

        this.sprite.layer = 1;
    }

    display() {
        this.sprite.collider = 'static';

        this.image.resize(83, 74);
        this.sprite.addImage(this.image);

        this.sprite.visible = true;
        
        this.sprite.y = this.y;
    }

    getSprite() {
        return this.sprite;
    }
}
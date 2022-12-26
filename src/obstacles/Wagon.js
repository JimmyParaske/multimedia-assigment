class Wagon {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.image = loadImage('./assets/images/Obstacles/wagon.png');

        this.sprite = createSprite(this.x, this.y);
        this.sprite.visible = false;

        this.sprite.layer = 1;
        this.sprite.diameter = 145;
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
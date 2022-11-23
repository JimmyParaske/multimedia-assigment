class Crate {
    constructor(x,y) {
        this.image = loadImage('./assets/images/crate.png');

        this.sprite = createSprite(this.image, x, y, 39, 35);

        this.sprite.collider = 'static';
    }

    display() {
        this.image.resize(this.sprite.width*2,this.sprite.height*2); //TODO
    }


    //Getters
    getX() {
        return this.sprite.x;
    }

    getY() {
        return this.sprite.y;
    }

    getWidth() {
        return this.sprite.width;
    }

    getHeigth() {
        return this.sprite.height;
    }

    getSprite() {
        return this.sprite;
    }
}
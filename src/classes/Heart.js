class Heart {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.width = 40;
        this.height = 40;

        this.animation = loadAnimation('./assets/images/hearts.png', { size: [40, 40], frames: 3 });
    }

    display(){
        this.sprite = createSprite(x, y, this.width, this.height);

        this.sprite.collider = 'static';
        this.sprite.addAnimation(this.animation);
        this.sprite.animation.stop();
    }
}
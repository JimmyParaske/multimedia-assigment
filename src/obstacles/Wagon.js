class Wagon extends Obstacle {
    constructor(x, y) {
        super(x, y, 0, 0, loadImage('./assets/images/Obstacles/wagon.png'));

        this.sprite.diameter = 150;
    }
}
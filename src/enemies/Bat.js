class Bat extends Enemy {
    constructor(x, y, animationLeft, animationRight) {
        super(x, y, animationLeft, animationRight);

        this.sprite.collider = 'kinematic';
    }
}
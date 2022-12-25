class SlashAttack {
    constructor(x, y, animation) {
        this.x = x;
        this.y = y;
        this.width = 60;
        this.height = 50;
        this.animation = animation;

        this.sprite = createSprite(this.x, this.y, this.width, this.height);

        this.sprite.rotationLock = true;
        this.sprite.vel.x = -3;
        this.sprite.vel.y = 0;
    }

    display() {
        this.sprite.addAnimation(this.animation);
    }

    getY() {
        return this.y;
    }

    getLife() {
        return this.sprite.life;
    }

    setLife(int) {
        this.sprite.life = int;
    }

    addAnimation(x, y) {
        this.sprite.addAnimation(x, y);
    }

    overlaps(oject) {
        if (this.sprite.overlaps(oject)) {
            return true;
        }
        return false;
    }

    collided(oject) {
        if (this.sprite.collided(oject)) {
            return true;
        }
        return false;
    }

    remove() {
        this.sprite.remove();
    }
}
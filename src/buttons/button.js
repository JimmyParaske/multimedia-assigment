class Button {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    clicked() {
        if ((mouseX >= this.x - this.width / 2) && (mouseX <= this.x + this.width / 2) && (mouseY >= this.y - this.height / 2) && (mouseY <= this.y + this.height / 2)) {
            return true;
        }
        return false;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }
}
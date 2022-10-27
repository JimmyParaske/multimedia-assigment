// Contstructor
function startButton(x, y) {
    //Coordinates
    this.x = x;
    this.y = y;
    //Characteristics
    this.width = 0;
    this.height = 0;
    this.color = color(0, 0, 0);
    //States
    this.hovering = false;
    this.clicked = false;

    this.display = function () {
        noFill();
        if (this.hovering) {
            fill(this.col);
        }

        if (this.clicked) {
            this.width = this.width * 1.2;
            this.height = this.height * 1.2;
        }

        rect(this.x, this.y, this.width, this.height);

        this.clicked = false;
    }

    this.over = function () {
        if ((dist(mouseX, this.x) < (this.width / 2)) && (dist(mouseX, this.x) < (this.width / 2))) {
            this.hovering = true;
        } else {
            this.hovering = false;
        }
        return this.hovering;
    }

    this.click = function () {
        if (this.over()) {
            this.clicked = true;
        }
    }
}
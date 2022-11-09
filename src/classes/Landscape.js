class Landscape {
    constructor() {
        this.image = loadImage('./assets/images/landscape.png');
        this.stage = 0;
    }

    display() {
        if (this.stage == 0) {
            //TODO
            image(this.image, width / 2, height / 2, width * 3, height, -width / 2);
        } else if (this.stage == 1) {
            image(this.image, width / 2, height / 2, width * 3, height, -width / 2);
        } else if (this.stage == 2) {
            image(this.image, width / 2, height / 2, width * 3, height);
        } else if (this.stage == 3) {
            image(this.image, width / 2, height / 2, width * 3, height, width / 2);
        } else {
            //TODO
            image(this.image, width / 2, height / 2, width * 3, height, -width / 2);
        }

        //perigramma
        noFill();//keno
        stroke(0);//mauro xrwma
        strokeWeight(5);
        rect(width / 2, height / 2, width, height);
    }

    getStage() {
        return this.stage;
    }

    setStage(stage) {
        this.stage = stage;
    }
}
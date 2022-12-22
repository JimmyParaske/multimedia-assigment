class Landscape {
    constructor() {
        this.imageStart = loadImage('./assets/images/landscape_long.png');
        this.imagePlay = loadImage('./assets/images/landscape_long.png');
        this.imageEnd = loadImage('./assets/images/landscape_long.png');
    }

    display(stage) {
        if (stage == "startMenu") {
            // image(this.imageStart, width / 2, height / 2, width * 9, height);
            background(255, 204, 100);
        } else if (stage == "playing") {
            image(this.imagePlay, width / 2, height / 2, width * 9, height);
        } else {
            // image(this.imageEnd, width / 2, height / 2, width * 9, height);
            background(255, 255, 255);
        }

        noFill();
        stroke(0);
        strokeWeight(5);
    }
}
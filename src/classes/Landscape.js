class Landscape {
    constructor() {
        this.imageMenu = loadImage('./assets/images/startMenuLandscape.png');
        this.imagePlay = loadImage('./assets/images/landscape_long.png');
    }

    displayMenu() {
        image(this.imageMenu, width/2, height/2, width, height);
    }

    displayGame() {
        image(this.imagePlay, width / 2, height / 2, width * 9, height);
    }
}
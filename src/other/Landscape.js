class Landscape {
    constructor() {
        this.imageMenu = loadImage('./assets/images/Landscapes/menu.png');
        this.imagePlay = loadImage('./assets/images/Landscapes/game.png');
    }

    displayMenu() {
        image(this.imageMenu, width/2, height/2, width, height);
    }

    displayGame() {
        image(this.imagePlay, width / 2, height / 2, width * 9, height);
    }
}
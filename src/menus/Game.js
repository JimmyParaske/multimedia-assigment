//Imports 
import('./src/classes/Player.js');
import('./src/classes/Barrel.js');

export class Game {
    constructor() {

    }

    setup() {
        var player = new Player();
        var barrel = new Barrel();

        createCanvas(800, 500);
        rectMode(CENTER);
        textAlign(CENTER);
        imageMode(CENTER);
    }

    draw() {

    }


}
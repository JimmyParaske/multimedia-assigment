export class StartMenu {
  constructor() {
    this.image = loadImage('./assets/images/landscape.png');
    //this.music = loadSound('/assets/sounds/start-music.mp3');
    this.proceed = false;
  }

  print() {
    //Backround
    image(this.image, 100 / 2, 100 / 2, 100, 100);

    //Music
    //this.music.play();
    
    //Game title
    textFont();
    fill(255);
    stroke(0);
    strokeWeight(10);
    textSize(100, 100, 150);
    text('Title');

    //Buttons
  }

  //Getters
  getProceed() {
    return this.proceed;
  }
}
class Background {
  constructor() {
    this.image = loadImage('assets/images/landscape.png');
    this.music = loadSound('assets/sounds/start-music.mp3');
    this.proceed = false;
  }

  draw() {
    //Backround
    image(this.image, CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2, CANVAS_WIDTH, CANVAS_HEIGHT);

    //Music
    this.music.play();
    
    //Game title
    textFont();
    fill(255);
    stroke(0);
    strokeWeight(10);
    textSize(100, 100, 150);
    text('Title');

    //Buttons
  }

  setup() {

  }

  //Getters
  getProceed() {
    return this.proceed;
  }
}
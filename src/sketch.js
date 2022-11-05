//game control
var stage = 1; //which function to run
//use draw to switch between stages

//player
var p1x = 400;//player variables 
var p1y = 375;
var pWidth = 70;
var pHeight = 70;

//boxes or platforms 
var b1x = 200; //box 1 variables
var b1y = 300;
var bWidth = 200;
var bHeight = 40;

//gravity for jumps etc
var jump = false;
var direction = 1; //δυναμη βαρυτητας στον αξονα y
var velocity = 2; //ταχυτητα
var jumpHeight = 15; //ποσο ψηλα
var fallingspeed = 2; //το ιδιο με velocity εφοσον είμαστε στην γη
var minHeight = 375 //για να μην πεφτει κατω απο τον χαρτη 
var maxHeight = 50; //height cap
var jumpCounter = 0; // keeps track of how much we are jumping ΙΣΩΣ ΕΙΝΑΙ ΧΡΗΣΙΜΟ ΑΜΑ ΤΟΥ ΒΑΛΟΥΜΕ DOUBLE JUMP!!!!!

//multimedia
var geralt;
var platform;
var landscape;
var pl;


//setup
function setup() {
  createCanvas(800, 500);
  rectMode(CENTER);
  textAlign(CENTER);
  imageMode(CENTER);

  pl = new Player();
}//close setup


/////////////////////////////////////////draw
function draw() {
  //call functions
  keyPressed();
  keyTyped();
  gravity();

  if (stage == 1) {
    game();
  }

}//close draw


//////////////////////////////////////game
function game() {
  //background color
  background(150, 90, 115) //purple
  image(landscape, width / 2, height / 2, width, height);

  //patwma/xwma
  noStroke();
  fill(70, 20, 70);
  rect(width / 2, 450, width, 100);

  //perigramma
  noFill();//keno
  stroke(0);//mauro xrwma
  strokeWeight(5);
  rect(width / 2, height / 2, width, height);

  ////////////////////////////////////draw box
  stroke(0);
  strokeWeight(10);
  fill(180, 55, 0);
  //rect(b1x, b1y, bWidth, bHeight);
  image(platform, b1x, b1y, bWidth, bHeight);

  ////////////////////////////////////draw player
  pl.display();


  /////////////////////////////////////////collisions
  if (p1x >= b1x - bWidth / 2 && p1x <= b1x + bWidth / 2 && p1y + bHeight >= b1y - bHeight / 2 && p1y + pHeight <= b1y + bHeight / 2 && jump == false) {
    p1y = p1y;
    velocity = 0;
    jumpCounter = 0;

  }



}//close game

//////////////////////////////////////gravity
function gravity() {
  if (p1y >= minHeight && jump == false) {
    //stopped falling
    p1y = p1y; //stay at ground
    jumpCounter = 0; //reset counter
  }
  else {
    p1y = p1y + (direction * velocity); //gravity makes you fall wow!
  }

  if (jump == true) {
    if (p1y <= maxHeight || jumpCounter > jumpHeight) {
      if (p1y >= minHeight) {
        p1y = minHeight; // stay at ground level, dont fall down 
      }
      else {
        velocity = fallingspeed;
      }
    }
    else {
      velocity = -jumpHeight;
      jumpCounter = jumpCounter + 1;
    }
  }
  else {
    velocity = fallingspeed;
  }
}//end gravity

///////////////////////νουμερα και γραμματα keytyped
///////////////////////ενω space κλπ θελουν keypresssed

function keyPressed() {
  if (keyIsDown(LEFT_ARROW)) {
    pl.moveLeft();//πηγαινε αριστερα
  }

  if (keyIsDown(RIGHT_ARROW)) {
    pl.moveRight();//πηγαινε δεξια
  }

}//end left/right


function keyTyped() {
  if (key === 'a') {
    pl.jump();
  }
  else {
    pl.noJump();
  }
}//end jump


function preload() {
  geralt = loadImage('./assets/images/barrel.png');
  platform = loadImage('./assets/images/wagon.png');
  landscape = loadImage('./assets/images/landscape.png');
}

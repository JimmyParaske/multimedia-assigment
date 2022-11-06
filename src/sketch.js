//game control
var stage = 1; //which function to run
//use draw to switch between stages

//multimedia
var landscape;
var pl;
var cr;

function setup() {
  createCanvas(800, 500);
  rectMode(CENTER);
  textAlign(CENTER);
  imageMode(CENTER);

  pl = new Player();
  cr = new Crate();
}

function draw() {
  //call functions
  keyPressed();
  keyTyped();
  pl.gravity();

  if (stage == 1) {
    game();
  }

}

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

  ////////////////////////////////////draw player
  pl.display();

  ////////////////////////////////////draw box
  cr.display();

  /////////////////////////////////////////collisions  
  //if ((pl.getX() + pl.getWidth() / 2 >= cr.getX() - cr.getWidth() / 2) && (pl.getX() - pl.getWidth() / 2 <= cr.getX() + cr.getWidth() / 2) && (pl.getY() + pl.getHeight() / 2 >= cr.getY() - cr.getHeight() / 2) && (pl.getY() - pl.getHeight() / 2 <= cr.getY() + cr.getHeight() / 2) && (pl.getJump() == false)) {
    //pl.setY(pl.getY());
    //pl.setVelocity(0);
    //pl.setJumpCounter(0);
  //}
}

///////////////////////νουμερα και γραμματα keytyped
///////////////////////ενω space κλπ θελουν keypresssed

function keyPressed() {
  if (keyIsDown(LEFT_ARROW)) {
    pl.moveLeft();//πηγαινε αριστερα
  }

  if (keyIsDown(RIGHT_ARROW)) {
    pl.moveRight();//πηγαινε δεξια
  }

}

function keyTyped() {
  if (key === 'a') {
    pl.jump();
  }
  else {
    pl.noJump();
  }
}//end jump


function preload() {
  landscape = loadImage('./assets/images/landscape.png');
}

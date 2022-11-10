// Game control
var stage = 1;

// Classes
var land;
var pl;
// Stage 1
var crate1;
var barrel1;
var barrel2;
var sign;
// Stage 2
var lamp;
var crate2;
var crate3;
var crate4;
// Stage 3
var well;

function setup() {
  // Setup
  createCanvas(900, 576);
  rectMode(CENTER);
  textAlign(CENTER);
  imageMode(CENTER);

  // Background
  land = new Landscape();

  // Player
  pl = new Player();

  // Stage 1
  crate1 = new Crate(59, 470);
  barrel1 = new Barrel(470, 475);
  barrel2 = new Barrel(530, 475);
  sign = new Sign(710, 402);

  // Stage 2
  lamp = new Lamp(503, 397);
  crate2 = new Crate(627, 404);
  crate3 = new Crate(592, 470);
  crate4 = new Crate(659, 470);

  // Stage 3
  well = new Well(311, 440);
}

function draw() {
  //call functions
  keyPressed();
  pl.gravity();

  // Background
  land.setStage(stage);
  land.display();

  game(stage);
}

function game(stage) {
  pl.display();

  if (stage == 1) {
    // Draw classes
    crate1.display();
    barrel1.display();
    barrel2.display();
    sign.display();

    // Collisions  
    //if ((pl.getX() + pl.getWidth() / 2 >= crate1.getX() - crate1.getWidth() / 2) && (pl.getX() - pl.getWidth() / 2 <= crate1.getX() + crate1.getWidth() / 2) && (pl.getY() + pl.getHeight() / 2 >= crate1.getY() - crate1.getHeight() / 2) && (pl.getY() - pl.getHeight() / 2 <= crate1.getY() + crate1.getHeight() / 2) && (pl.getJump() == false)) {
    //pl.setY(pl.getY());
    //pl.setVelocity(0);
    //pl.setJumpCounter(0);
    //}

    // Breaks
  } else if (stage == 2) {
    // Draw classes
    lamp.display();
    crate4.display();
    crate3.display();
    crate2.display();

    // Collisions  

    // Breaks
  } else if (stage == 3) {
    // Draw classes
    well.display();

    // Collisions  
  }
}

// Moves
function keyPressed() {
  // Left
  if (keyIsDown(65)) {
    if ((pl.getX() - pl.getWidth() / 2 >= 5) || (!(stage == 1) && (pl.getX() >= 5))) {
      pl.moveLeft();
    } else if (!(stage == 1)) {
      stage -= 1;
      pl.setX(width);
    }
  }

  // Right
  if (keyIsDown(68)) {
    if ((pl.getX() + pl.getWidth() / 2 <= (width - 5)) || (!(stage == 3) && (pl.getX() <= (width - 5)))) {
      pl.moveRight();
    } else if (!(stage == 3)) {
      stage += 1;
      pl.setX(0);
    }
  }

  // Jump
  if (key === ' ') {
    pl.jump();
  }
  else {
    pl.noJump();
  }
}
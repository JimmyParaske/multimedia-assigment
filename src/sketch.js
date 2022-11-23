// Game control
var worldGravity = 10;

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

  // Camera
  camera.x = 100;
  camera.y = 100;

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
  // Call functions
  keyPressed();

  // Background
  land.setStage(1);
  land.display();

  game();
}

function game() {
  camera.y = 290;
  camera.on();
  camera.x = pl.getX();

  pl.display();
  crate1.display();
  crate2.display();
  crate3.display();
  crate4.display();

  // Jumping assets group
  //jumpingAssets = new Group();
  //jumpingAssets.add(crate);

  camera.off();
}

// Moves
function keyPressed() {
  // Left
  if (keyIsDown(LEFT_ARROW)) {
    if ((pl.getX() - pl.getWidth() / 2 >= 5) && (pl.getX() >= 5)) {
      pl.moveLeft();
    }
  }

  // Right
  else if (keyIsDown(RIGHT_ARROW)) {
    if ((pl.getX() + pl.getWidth() / 2 <= (width - 5)) && (pl.getX() <= (width - 5))) {
      pl.moveRight();
    }
  }

  else {
    pl.stay();
  }

  // Jump
  pl.jump();

  //EDW THELEI SPRITE GROUPS GIA PLATFORMS BARRELS CRATES KLP
  // EINAI LIGO BUGGY AMA TA VALW SE ENA GROUP OPOTE PROS TO PARON TO KATHE ENA SE KSEXWRISTO IF !!!!

  // Collision 
  // if(sprite.colliding(crate)){
  //   sprite.vel.y=0;
  //   //sprite.y = 393;

  //   if(keyIsDown(UP_ARROW)){

  //     sprite.vel.y= hop;
  //   }

  // }
}

// Game Control
let stage = "startMenu";
var jumped = false;

let hop = -8;
let fallingSpeed = 0.2;
let minHeight = 465;

let coins_collected = 0;
let enemies_dead = 0;


// Skins
var idleLeft = 'idleLeftBlue';
var idleRight = 'idleRightBlue';

var runLeft = 'runLeftBlue';
var runRight = 'runRightBlue';

var attackLeft = 'attackLeftBlue';
var attackRight = 'attackRightBlue';

// Basic Functions
function preload() {
  // Preload Sounds
  preloadSounds();

  // Preload Player
  preloadPlayer();

  // Preload Enemies
  preloadEnemies();

  // Preload Attacks
  preloadAttacks();

  // Preload Other Classes
  preloadOther();
}

function setup() {
  // 
  world.gravity.y = 10;

  // Basic Setup
  createCanvas(900, 576);

  rectMode(CENTER);
  textAlign(CENTER);
  imageMode(CENTER);

  // Setup Background & Music
  setupBackground();

  // Setup Buttons
  setupButtons();

  // Setup Player
  setupPlayer();

  // Setup Enemies
  setupEnemies();

  // Setup Attacks
  setupAttacks();

  // Setup Objects
  setupObjects();

  // Setup Other Classes
  setupOther();

  // Group All Classes
  setupGroup();
}

function draw() {
  clear();

  rect(30, 20, 55, 55, 20);

  if (stage == "startMenu") {
    drawStartMenu();
  } else if (stage == "options") {
    drawOptions();
  } else if (stage == "playing") {
    drawGame();
  } else if (stage == "endMenu") {
    drawEndMenu();
  }
}

// Preload Functions
function preloadSounds() {
  soundFormats('mp3');
  geralt_hit = loadSound('./assets/sounds/geralt_hit');
  geralt_death = loadSound('./assets/sounds/geralt_death');
  coin_sound = loadSound('./assets/sounds/mario_coin_sound');
  coin_sound.setVolume(0.2);
  background_sound = loadSound('./assets/sounds/background_music');
  enemy_hit = loadSound('./assets/sounds/enemy_hit');
  goblin_death = loadSound('./assets/sounds/goblin_death');
  skeleton_death = loadSound('./assets/sounds/skeleton_death');
  bat_death = loadSound('./assets/sounds/zorua');
  slash_sound = loadSound('./assets/sounds/slash_sound');
  slash_main_sound = loadSound('./assets/sounds/slash_main');
  slash_main_sound.rate(2);
}

function preloadPlayer() {
  geraltAnimationIdleLeftBlue = loadAnimation('./assets/images/Knight/Blue/noBKG_KnightIdle_strip4.png', { size: [128, 128], frames: 15 });
  geraltAnimationIdleLeftRed = loadAnimation('./assets/images/Knight/Red/noBKG_KnightIdle_strip4.png', { size: [128, 128], frames: 15 });
  geraltAnimationIdleLeftGreen = loadAnimation('./assets/images/Knight/Green/noBKG_KnightIdle_strip4.png', { size: [128, 128], frames: 15 });

  geraltAnimationIdleRightBlue = loadAnimation('./assets/images/Knight/Blue/noBKG_KnightIdle_strip4right.png', { size: [128, 128], frames: 15 });
  geraltAnimationIdleRightRed = loadAnimation('./assets/images/Knight/Red/noBKG_KnightIdle_strip4right.png', { size: [128, 128], frames: 15 });
  geraltAnimationIdleRightGreen = loadAnimation('./assets/images/Knight/Green/noBKG_KnightIdle_strip4right.png', { size: [128, 128], frames: 15 });

  geraltAnimationRunLeftBlue = loadAnimation('./assets/images/Knight/Blue/noBKG_KnightRun_strip2.png', { size: [192, 128], frames: 8 });
  geraltAnimationRunLeftRed = loadAnimation('./assets/images/Knight/Red/noBKG_KnightRun_strip2.png', { size: [192, 128], frames: 8 });
  geraltAnimationRunLeftGreen = loadAnimation('./assets/images/Knight/Green/noBKG_KnightRun_strip2.png', { size: [192, 128], frames: 8 });

  geraltAnimationRunRightBlue = loadAnimation('./assets/images/Knight/Blue/noBKG_KnightRun_strip2right.png', { size: [192, 128], frames: 8 });
  geraltAnimationRunRightRed = loadAnimation('./assets/images/Knight/Red/noBKG_KnightRun_strip2right.png', { size: [192, 128], frames: 8 });
  geraltAnimationRunRightGreen = loadAnimation('./assets/images/Knight/Green/noBKG_KnightRun_strip2right.png', { size: [192, 128], frames: 8 });

  geraltAnimationAttackLeftBlue = loadAnimation('./assets/images/Knight/Blue/noBKG_KnightAttack_strip2.png', { size: [288, 128], frames: 22 });
  geraltAnimationAttackLeftRed = loadAnimation('./assets/images/Knight/Red/noBKG_KnightAttack_strip2.png', { size: [288, 128], frames: 22 });
  geraltAnimationAttackLeftGreen = loadAnimation('./assets/images/Knight/Green/noBKG_KnightAttack_strip2.png', { size: [288, 128], frames: 22 });

  geraltAnimationAttackRightBlue = loadAnimation('./assets/images/Knight/Blue/noBKG_KnightAttack_strip2right.png', { size: [288, 128], frames: 22 });
  geraltAnimationAttackRightRed = loadAnimation('./assets/images/Knight/Red/noBKG_KnightAttack_strip2right.png', { size: [288, 128], frames: 22 });
  geraltAnimationAttackRightGreen = loadAnimation('./assets/images/Knight/Green/noBKG_KnightAttack_strip2right.png', { size: [288, 128], frames: 22 });
}

function preloadEnemies() {
  goblinLeft = loadAnimation('./assets/images/Goblin/RunLeft.png', { size: [220, 220], frames: 8 });
  goblinRight = loadAnimation('./assets/images/Goblin/RunRight.png', { size: [220, 220], frames: 8 });

  skeletonLeft = loadAnimation('./assets/images/Skeleton/WalkLeft.png', { size: [270, 270], frames: 4 });
  skeletonRight = loadAnimation('./assets/images/Skeleton/WalkRight.png', { size: [270, 270], frames: 4 });

  batLeft = loadAnimation('./assets/images/Bat/right.png', { size: [60.25, 64], frames: 4 });
  batRight = loadAnimation('./assets/images/Bat/left.png', { size: [60.25, 64], frames: 4 });
}

function preloadAttacks() {
  slash_main = loadAnimation('./assets/images/Sword Slashes/slash.png', { size: [165, 120], frames: 20 });
  slash_thinLeft = loadAnimation('./assets/images/Sword Slashes/slash_white_thin.png', { size: [68.75, 50], frames: 6 });
  slash_thinRight = loadAnimation('./assets/images/Sword Slashes/slash_white_thinright.png', { size: [68.75, 50], frames: 6 });
  slash_Right = loadAnimation('./assets/images/Sword Slashes/slash_red_right.png', { size: [89.5, 65], frames: 6 });
  slash_Left = loadAnimation('./assets/images/Sword Slashes/slash_red_left.png', { size: [89.5, 65], frames: 6 });
}

function preloadOther() {
  lives = loadAnimation('./assets/images/Other/hearts.png', { size: [40, 40], frames: 3 });

  coins = loadAnimation('./assets/images/Other/coins.png', { size: [16, 22], frames: 14 });
}

// Setup Functions
function setupBackground() {
  // Background
  land = new Landscape();

  // Music
  background_sound.play();
  background_sound.setVolume(0.2);
  background_sound.loop();
}

function setupButtons() {
  playButton = new TextButton(width / 2, height / 2, "New Game");
  optionsButton = new TextButton(playButton.getX(), playButton.getY() + 65, "Options");
  creditsButton = new TextButton(playButton.getX(), optionsButton.getY() + 65, "Credits");
  exitButton = new TextButton(playButton.getX(), creditsButton.getY() + 65, "Exit");

  skinButton = new TextButton(playButton.getX(), playButton.getY(), "Change Skin");
  soundButton = new SoundButton(width - 65, 65);
  returnButton = new ReturnButton(65, 65);

  replayButton = new TextButton(playButton.getX(), playButton.getY(), "Play Again");
}

function setupPlayer() {
  geralt = createSprite(-3200, 480, 67, 80);
  geralt.rotationLock = true;

  geralt.addAnimation('attackLeftGreen', geraltAnimationAttackLeftGreen);
  geralt.addAnimation('attackLeftRed', geraltAnimationAttackLeftRed);
  geralt.addAnimation('attackLeftBlue', geraltAnimationAttackLeftBlue);

  geralt.addAnimation('attackRightGreen', geraltAnimationAttackRightGreen);
  geralt.addAnimation('attackRightRed', geraltAnimationAttackRightRed);
  geralt.addAnimation('attackRightBlue', geraltAnimationAttackRightBlue);

  geralt.addAnimation('runLeftGreen', geraltAnimationRunLeftGreen);
  geralt.addAnimation('runLeftRed', geraltAnimationRunLeftRed);
  geralt.addAnimation('runLeftBlue', geraltAnimationRunLeftBlue);

  geralt.addAnimation('runRightGreen', geraltAnimationRunRightGreen);
  geralt.addAnimation('runRightRed', geraltAnimationRunRightRed);
  geralt.addAnimation('runRightBlue', geraltAnimationRunRightBlue);

  geralt.addAnimation('idleRightGreen', geraltAnimationIdleRightGreen);
  geralt.addAnimation('idleRightRed', geraltAnimationIdleRightRed);
  geralt.addAnimation('idleRightBlue', geraltAnimationIdleRightBlue);

  geralt.addAnimation('idleLeftGreen', geraltAnimationIdleLeftGreen);
  geralt.addAnimation('idleLeftRed', geraltAnimationIdleLeftRed);
  geralt.addAnimation('idleLeftBlue', geraltAnimationIdleLeftBlue);
}

function setupEnemies() {
  enemy1 = new Enemy(-2400, 465, goblinLeft, goblinRight);
  enemy2 = new Enemy(-1400, 465, goblinLeft, goblinRight);
  enemy3 = new Bat(-1170, 170, batLeft, batRight);
  enemy4 = new Enemy(-730, 465, goblinLeft, goblinRight);
  enemy5 = new Enemy(1100, 465, goblinLeft, goblinRight);
  enemy6 = new Enemy(1400, 465, goblinLeft, goblinRight);
  enemy7 = new Bat(3650, 250, batLeft, batRight);
  enemy8 = new Enemy(3650, 465, goblinLeft, goblinRight);
  enemy9 = new Bat(4295, 170, batLeft, batRight);
  enemy10 = new Enemy(300, 445, skeletonLeft, skeletonRight);
  enemy11 = new Enemy(2300, 465, goblinLeft, goblinRight);
  enemy12 = new Enemy(2800, 465, skeletonLeft, skeletonRight);
}

function setupAttacks() {
  slash_attack = new Sprite();
  slash_attack.addAnimation('white_slash_left', slash_thinLeft);
  slash_attack.life = 0;

  slash_attack2 = new Sprite();
  slash_attack2.addAnimation('white_slash_right', slash_thinRight);
  slash_attack2.life = 0;

  slash_attack3 = new Sprite();
  slash_attack3.addAnimation('red_yellow_slash', slash_main);
  slash_attack3.life = 0;
}

function setupObjects() {
  // Barrels
  S1barrel1 = new Barrel(-3550, 475);
  S1barrel2 = new Barrel(-3490, 475);
  barrel1 = new Barrel(-435, 475);
  barrel2 = new Barrel(-370, 475);
  S2barrel1 = new Barrel(3300, 475);
  S2barrel2 = new Barrel(3360, 475);

  // Crates
  S1crate = new Crate(-3100, 470);
  S1crate1 = new Crate(-2750, 400);
  S1crate2 = new Crate(-2790, 470);
  S1crate3 = new Crate(-2715, 470);
  S1crate4 = new Crate(-1660, 470);
  crate = new Crate(-840, 470);
  crate1 = new Crate(627, 404);
  crate2 = new Crate(595, 470);
  crate3 = new Crate(665, 470);
  S2crate1 = new Crate(1910, 404);
  S2crate2 = new Crate(1880, 470);
  S2crate3 = new Crate(1945, 470);

  // Wagons
  S1wagon = new Wagon(-2100, 430);
  wagon = new Wagon(0, 430);

  // Signs
  S1sign = new Sign(-1800, 340);
  sign = new Sign(-189, 405);

  // Platforms
  S1platform1 = new PlatformShort(-1450, 415);
  S1platform2 = new PlatformTall(-1190, 390);
  platform1 = new PlatformShort(1435, 415);
  platform2 = new PlatformTall(1695, 390);
  S2platform1 = new PlatformShort(4030, 415);
  S2platform2 = new PlatformTall(4295, 390);

  // Floors
  floor1 = new Floor(842, 390);
  floor2 = new Floor(957, 325);
  S2floor1 = new Floor(3655, 345);

  // Wells
  well = new Well(1205, 460);
  S2well = new Well(2750, 460);
}

function setupOther() {
  // Hearts
  kardia = new Heart(-3500, 50, lives);
  kardia2 = new Heart(-3460, 50, lives.clone());
  kardia3 = new Heart(-3420, 50, lives.clone());

  // Coins
  coin1 = new Coin(-2750, 200, coins);
  coin2 = new Coin(-1950, 150, coins.clone());
  coin3 = new Coin(-1000, 50, coins.clone());
  coin4 = new Coin(300, 350, coins.clone());
  coin5 = new Coin(1060, 80, coins.clone());
  coin6 = new Coin(1700, 350, coins.clone());
  coin7 = new Coin(2752, 180, coins.clone());
  coin8 = new Coin(3850, 100, coins.clone());
  coin2_1 = new Coin(-1175, 350, coins.clone());
  coin2_2 = new Coin(-130, 465, coins.clone());
  coin2_3 = new Coin(970, 365, coins.clone());
  coin2_4 = new Coin(2250, 365, coins.clone());
  coin2_5 = new Coin(3655, 380, coins.clone());
}

function setupGroup() {
  obstacles = new Group();

  // Barrels
  obstacles.add(S1barrel1.getSprite());
  obstacles.add(S1barrel2.getSprite());
  obstacles.add(barrel1.getSprite());
  obstacles.add(barrel2.getSprite());
  obstacles.add(S2barrel1.getSprite());
  obstacles.add(S2barrel2.getSprite());

  // Crates
  obstacles.add(S1crate.getSprite());
  obstacles.add(S1crate1.getSprite());
  obstacles.add(S1crate2.getSprite());
  obstacles.add(S1crate3.getSprite());
  obstacles.add(S1crate4.getSprite());
  obstacles.add(crate.getSprite());
  obstacles.add(crate1.getSprite());
  obstacles.add(crate2.getSprite());
  obstacles.add(crate3.getSprite());
  obstacles.add(S2crate1.getSprite());
  obstacles.add(S2crate2.getSprite());
  obstacles.add(S2crate3.getSprite());

  // Wagons
  obstacles.add(S1wagon.getSprite());
  obstacles.add(wagon.getSprite());

  // Signs
  obstacles.add(S1sign.getSprite());
  obstacles.add(sign.getSprite());

  // Platforms
  obstacles.add(S1platform1.getSprite());
  obstacles.add(S1platform2.getSprite());
  obstacles.add(platform1.getSprite());
  obstacles.add(platform2.getSprite());
  obstacles.add(S2platform1.getSprite());
  obstacles.add(S2platform2.getSprite());

  // Floors
  obstacles.add(floor1.getSprite());
  obstacles.add(floor2.getSprite());
  obstacles.add(S2floor1.getSprite());

  // Wells
  obstacles.add(well.getSprite());
  obstacles.add(S2well.getSprite());
}

// Draw Functions
function drawStartMenu() {
  // Draw background
  land.displayMenu();

  // Draw start menu
  playButton.display();
  optionsButton.display();
  creditsButton.display();
  exitButton.display();
}

function drawOptions() {
  // Draw background
  land.displayMenu();

  // 
  if (idleLeft == 'idleLeftBlue') {
    animation(geraltAnimationIdleLeftBlue, skinButton.getX(), skinButton.getY() - 80);
  } else if (idleLeft == 'idleLeftRed') {
    animation(geraltAnimationIdleLeftRed, skinButton.getX(), skinButton.getY() - 80);
  } else {
    animation(geraltAnimationIdleLeftGreen, skinButton.getX(), skinButton.getY() - 80);
  }

  // Draw options
  skinButton.display();
  soundButton.display();
  returnButton.display();
}

function drawGame() {
  // Control camera
  camera.on();

  // Background
  land.displayGame();

  // Enemies
  enemy1.display();
  enemy2.display();
  enemy3.display();
  enemy4.display();
  enemy5.display();
  enemy6.display();
  enemy7.display();
  enemy8.display();
  enemy9.display();
  enemy10.display();
  enemy11.display();
  enemy12.display();

  // Barrels
  S1barrel1.display();
  S1barrel2.display();
  barrel1.display();
  barrel2.display();
  S2barrel1.display();
  S2barrel2.display();

  // Crates
  S1crate.display();
  S1crate1.display();
  S1crate2.display();
  S1crate3.display();
  S1crate4.display();
  crate.display();
  crate1.display();
  crate2.display();
  crate3.display();
  S2crate1.display();
  S2crate2.display();
  S2crate3.display();

  // Wagons
  S1wagon.display();
  wagon.display();

  // Signs
  S1sign.display();
  sign.display();

  // Platforms
  S1platform1.display();
  S1platform2.display();
  platform1.display();
  platform2.display();
  S2platform1.display();
  S2platform2.display();

  // Floors
  floor1.display();
  floor2.display();
  S2floor1.display();

  // Wells
  well.display();
  S2well.display();

  // Hearts
  kardia.display();
  kardia2.display();
  kardia3.display();

  // Coins
  coin1.display();
  coin2.display();
  coin3.display();
  coin4.display();
  coin5.display();
  coin6.display();
  coin7.display();
  coin8.display();
  coin2_1.display();
  coin2_2.display();
  coin2_3.display();
  coin2_4.display();
  coin2_5.display();

  if (geralt.x <= -3200) {
    camera.x = -3150;
  }

  if (geralt.x >= 4000) {
    camera.x = 4050;
  }

  keyPresses();
  attackStop();
  enemyMovementAndAttackCollision();
  removeCoins();
  spawnAttack();
  slashCollisionObjects();
  finished();
  death();

  // Player's Boundaries
  if (geralt.x <= -3550) {
    geralt.x = -3550;
  }

  if (geralt.x >= 4450) {
    geralt.x = 4450;
  }

  jump(geralt);
 
  if (geralt.x >= -3200 && geralt.x <= 4000) {
    camera.x = geralt.x + 50;
    kardia.setX(geralt.x - 320);
    kardia2.setX(geralt.x - 284);
    kardia3.setX(geralt.x - 248);
  }

  // Stop Controlling Camera
  camera.off();
}

function drawEndMenu() {
  // Draw background
  land.displayMenu();

  // Draw end menu
  replayButton.display();
  optionsButton.display();
  creditsButton.display();
  exitButton.display();
}

// Playing Functions
function mouseClicked() {
  // If user clicks "New Game" on start menu 
  if ((stage == "startMenu") && (playButton.clicked())) {
    newGame();
  }

  // If user clicks "Play again" on end menu
  if ((stage == "endMenu") && (replayButton.clicked())) {
    playAgain();
  }

  // If user clicks "Options" on start or end menu
  if (((stage == "startMenu") || (stage == "endMenu")) && (optionsButton.clicked())) {
    options();
  }

  // If user clicks "Credits" on start or end menu
  if (((stage == "startMenu") || (stage == "endMenu")) && (creditsButton.clicked())) {
    window.location.href = "../credits.html";
  }

  // If user clicks "Exit" on start menu or end menu
  if (((stage == "startMenu") || (stage == "endMenu")) && (exitButton.clicked())) {
    // Exit
    window.location.href = "../index.html";
  }

  // If user clicks "Change Skin" on options 
  if ((stage == "options") && (skinButton.clicked())) {
    changeSkin();
  }

  // If user clicks sound button on options
  if ((stage == "options") && (soundButton.clicked())) {
    sound();
  }

  // If user clicks return button on options
  if ((stage == "options") && (returnButton.clicked())) {
    back();
  }

}

function keyPresses() {
  //geralt movement
  if (keyIsDown(LEFT_ARROW)) {
    geralt.vel.x = -5;
    geralt.changeAnimation(runRight);
  } else if (keyIsDown(RIGHT_ARROW)) {
    geralt.vel.x = +5;
    geralt.changeAnimation(runLeft);
  } else if (kb.released(LEFT_ARROW)) {
    geralt.changeAnimation(idleRight);
  } else if (kb.released(RIGHT_ARROW)) {
    geralt.changeAnimation(idleLeft);
  } else if (keyIsDown(ESCAPE)) {
    window.location.href = "../play.html";
  } else {
    geralt.vel.x = 0;
  }
}

// Menu Functions
function newGame() {
  // Remove start menu buttons
  playButton.hide();
  optionsButton.hide();
  creditsButton.hide();
  exitButton.hide();
  // Change stage to "playing"
  stage = "playing";
}

function playAgain() {
  // Remove end menu buttons
  replayButton.hide();
  optionsButton.hide();
  creditsButton.hide();
  exitButton.hide();

  // 
  life_counter = 0;
  coins_collected =0;

  // Change stage to "playing"
  stage = "playing";
}

function options() {
  // Remove start menu buttons
  playButton.hide();
  optionsButton.hide();
  creditsButton.hide();
  exitButton.hide();
  // 
  stage = "options";
}

function back() {
  // Remove start menu buttons
  skinButton.hide();

  stage = "startMenu";
}

function changeSkin() {
  if (idleLeft == 'idleLeftBlue') {
    idleLeft = 'idleLeftRed';
    idleRight = 'idleRightRed';

    runLeft = 'runLeftRed';
    runRight = 'runRightRed';

    attackLeft = 'attackLeftRed';
    attackRight = 'attackRightRed';
  } else if (idleLeft == 'idleLeftRed') {
    idleLeft = 'idleLeftGreen';
    idleRight = 'idleRightGreen';

    runLeft = 'runLeftGreen';
    runRight = 'runRightGreen';

    attackLeft = 'attackLeftGreen';
    attackRight = 'attackRightGreen';
  } else {
    idleLeft = 'idleLeftBlue';
    idleRight = 'idleRightBlue';

    runLeft = 'runLeftBlue';
    runRight = 'runRightBlue';

    attackLeft = 'attackLeftBlue';
    attackRight = 'attackRightBlue';
  }
}

function sound() {
  if (background_sound.isPlaying()) {
    soundButton.mute();
    background_sound.stop();
  } else {
    soundButton.unmute();
    background_sound.play();
  }
}

// Other Functions
function attackStop() {
  if (kb.presses('b') || kb.presses('v')) {
    geralt.vel.x = 0;
    geralt.changeAnimation(attackLeft);
  } else if (kb.released('b') || kb.released('v')) {
    geralt.changeAnimation(idleLeft);
  } else if (kb.presses('c')) {
    geralt.vel.x = 0;
    geralt.changeAnimation(attackRight);
  } else if (kb.released('c')) {
    geralt.changeAnimation(idleRight);
  }
}

function jump(sprite) {
  sprite.vel.y += fallingSpeed;
  sprite.y += sprite.vel.y;

  if (sprite.y > minHeight) {
    sprite.vel.y = 0;
    sprite.y = minHeight;

    if (keyIsDown(UP_ARROW)) {
      sprite.vel.y = hop;
    }
  }

  if (sprite.colliding(crate.getSprite())) {
    sprite.vel.y = 0;

    if (keyIsDown(UP_ARROW)) {
      sprite.vel.y = hop;
    }
  }

  if (sprite.colliding(barrel1.getSprite())) {
    sprite.vel.y = 0;

    if (keyIsDown(UP_ARROW)) {
      sprite.vel.y = hop;
    }
  }

  if (sprite.colliding(barrel2.getSprite())) {
    sprite.vel.y = 0;

    if (keyIsDown(UP_ARROW)) {
      sprite.vel.y = hop;
    }
  }

  if (sprite.colliding(sign.getSprite())) {
    sprite.vel.y = 0;

    if (keyIsDown(UP_ARROW)) {
      sprite.vel.y = hop;
    }
  }

  if (sprite.colliding(wagon.getSprite())) {
    sprite.vel.y = 0;

    if (keyIsDown(UP_ARROW)) {
      sprite.vel.y = hop;
    }
  }

  if (sprite.colliding(crate1.getSprite())) {
    sprite.vel.y = 0;

    if (keyIsDown(UP_ARROW)) {
      sprite.vel.y = hop;
    }
  }

  if (sprite.colliding(crate2.getSprite())) {
    sprite.vel.y = 0;

    if (keyIsDown(UP_ARROW)) {
      sprite.vel.y = hop;
    }
  }

  if (sprite.colliding(crate3.getSprite())) {
    sprite.vel.y = 0;

    if (keyIsDown(UP_ARROW)) {
      sprite.vel.y = hop;
    }
  }

  if (sprite.colliding(floor1.getSprite())) {
    sprite.vel.y = 0;

    if (keyIsDown(UP_ARROW)) {
      sprite.vel.y = hop;
    }
  }

  if (sprite.y >= floor1.getY() && sprite.colliding(floor1.getSprite())) {
    sprite.vel.y = 0;
  }

  if (sprite.colliding(floor2.getSprite())) {
    sprite.vel.y = 0;

    if (keyIsDown(UP_ARROW)) {
      sprite.vel.y = hop;
    }
  }

  if (sprite.y >= floor2.getY() && sprite.colliding(floor2.getSprite())) {
    sprite.vel.y = 0;
  }

  if (sprite.colliding(well.getSprite())) {
    sprite.vel.y = 0;

    if (keyIsDown(UP_ARROW)) {
      sprite.vel.y = hop;
    }
  }

  if (sprite.y >= well.getY() && sprite.colliding(well.getSprite())) {
    sprite.vel.y = 0;
  }

  if (sprite.colliding(platform1.getSprite())) {
    sprite.vel.y = 0;

    if (keyIsDown(UP_ARROW)) {
      sprite.vel.y = hop;
    }
  }

  if (sprite.y >= platform1.getY() && sprite.colliding(platform1.getSprite())) {
    sprite.vel.y = 0;
  }

  if (sprite.colliding(platform2.getSprite())) {
    sprite.vel.y = 0;

    if (keyIsDown(UP_ARROW)) {

      sprite.vel.y = hop;
    }
  }

  if (sprite.y >= platform2.getY() && sprite.colliding(platform2.getSprite())) {
    sprite.vel.y = 0;
  }

  if (sprite.colliding(S1barrel1.getSprite())) {
    sprite.vel.y = 0;

    if (keyIsDown(UP_ARROW)) {
      sprite.vel.y = hop;
    }
  }

  if (sprite.colliding(S1barrel2.getSprite())) {
    sprite.vel.y = 0;

    if (keyIsDown(UP_ARROW)) {
      sprite.vel.y = hop;
    }
  }

  if (sprite.colliding(S1crate.getSprite())) {
    sprite.vel.y = 0;

    if (keyIsDown(UP_ARROW)) {
      sprite.vel.y = hop;
    }
  }

  if (sprite.colliding(S1crate1.getSprite())) {
    sprite.vel.y = 0;

    if (keyIsDown(UP_ARROW)) {
      sprite.vel.y = hop;
    }
  }

  if (sprite.colliding(S1crate2.getSprite())) {
    sprite.vel.y = 0;

    if (keyIsDown(UP_ARROW)) {
      sprite.vel.y = hop;
    }
  }

  if (sprite.colliding(S1crate3.getSprite())) {
    sprite.vel.y = 0;

    if (keyIsDown(UP_ARROW)) {
      sprite.vel.y = hop;
    }
  }

  if (sprite.colliding(S1wagon.getSprite())) {
    sprite.vel.y = 0;

    if (keyIsDown(UP_ARROW)) {
      sprite.vel.y = hop;
    }
  }

  if (sprite.colliding(S1sign.getSprite())) {
    sprite.vel.y = 0;

    if (keyIsDown(UP_ARROW)) {

      sprite.vel.y = hop;
    }
  }

  if (sprite.y >= S1sign.getY() && sprite.colliding(S1sign.getSprite())) {
    sprite.vel.y = 0;
  }

  if (sprite.colliding(S1crate4.getSprite())) {
    sprite.vel.y = 0;

    if (keyIsDown(UP_ARROW)) {
      sprite.vel.y = hop;
    }
  }

  if (sprite.colliding(S1platform1.getSprite())) {
    sprite.vel.y = 0;

    if (keyIsDown(UP_ARROW)) {
      sprite.vel.y = hop;
    }
  }

  if (sprite.y >= S1platform1.getY() && sprite.colliding(S1platform1.getSprite())) {
    sprite.vel.y = 0;
  }

  if (sprite.colliding(S1platform2.getSprite())) {
    sprite.vel.y = 0;

    if (keyIsDown(UP_ARROW)) {

      sprite.vel.y = hop;
    }
  }

  if (sprite.y >= S1platform2.getY() && sprite.colliding(S1platform2.getSprite())) {
    sprite.vel.y = 0;
  }

  if (sprite.colliding(S2crate1.getSprite())) {
    sprite.vel.y = 0;

    if (keyIsDown(UP_ARROW)) {
      sprite.vel.y = hop;
    }
  }

  if (sprite.colliding(S2crate2.getSprite())) {
    sprite.vel.y = 0;

    if (keyIsDown(UP_ARROW)) {
      sprite.vel.y = hop;
    }
  }

  if (sprite.colliding(S2crate3.getSprite())) {
    sprite.vel.y = 0;

    if (keyIsDown(UP_ARROW)) {
      sprite.vel.y = hop;
    }
  }

  if (sprite.colliding(S2well.getSprite())) {
    sprite.vel.y = 0;

    if (keyIsDown(UP_ARROW)) {
      sprite.vel.y = hop;
    }
  }

  if (sprite.y >= S2well.getY() && sprite.colliding(S2well.getSprite())) {
    sprite.vel.y = 0;
  }

  if (sprite.colliding(S2barrel1.getSprite())) {
    sprite.vel.y = 0;

    if (keyIsDown(UP_ARROW)) {

      sprite.vel.y = hop;
    }
  }

  if (sprite.colliding(S2barrel2.getSprite())) {
    sprite.vel.y = 0;

    if (keyIsDown(UP_ARROW)) {

      sprite.vel.y = hop;
    }
  }

  if (sprite.colliding(S2floor1.getSprite())) {
    sprite.vel.y = 0;

    if (keyIsDown(UP_ARROW)) {

      sprite.vel.y = hop;
    }
  }

  if (sprite.y >= S2floor1.getY() && sprite.colliding(S2floor1.getSprite())) {
    sprite.vel.y = 0;
  }

  if (sprite.colliding(S2platform1.getSprite())) {
    sprite.vel.y = 0;

    if (keyIsDown(UP_ARROW)) {

      sprite.vel.y = hop;
    }
  }

  if (sprite.y >= S2platform1.getY() && sprite.colliding(S2platform1.getSprite())) {
    sprite.vel.y = 0;
  }

  if (sprite.colliding(S2platform2.getSprite())) {
    sprite.vel.y = 0;

    if (keyIsDown(UP_ARROW)) {

      sprite.vel.y = hop;
    }

  }

  if (sprite.y >= S2platform2.getY() && sprite.colliding(S2platform2.getSprite())) {
    sprite.vel.y = 0;
  }
}





function slashCollisionObjects() {
  if (slash_attack.collided(obstacles)) {
    slash_attack.remove();
    attackingB = false;
  }

  if (slash_attack2.collided(obstacles)) {
    slash_attack2.remove();
    attackingC = false;
  }

  if (slash_attack3.collided(obstacles)) {
    slash_attack3.remove();
    attackingV = false;
  }
}

collided = false;
collided2nd = false;
collided3rd = false;
collided4th = false;
collided5th = false;
collided2nd_vol2 = false;
collided3rd_vol2 = false;
collided4th_vol2 = false;
collided5th_vol2 = false;
collided6th_vol2 = false;
collided7th_vol2 = false;
collided8th_vol2 = false;

const counter_attack = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const counter_attack_skeleton = [0, 0];
var life_counter = 0;

function enemyMovementAndAttackCollision() {
  //first enemy
  if (enemy1.getY() > minHeight) {
    enemy1.getY() = minHeight;
  }

  if (enemy1.getX() <= -2230 && collided == false) {
    enemy1.setVelX(1);
    collided = true;
    enemy1.getSprite().changeAnimation('left');
  }

  if (enemy1.getSprite().collided(S1wagon.getSprite())) {
    enemy1.setVelX(-1);
    enemy1.getSprite().changeAnimation('right');
  }

  if (enemy1.getSprite().collided(S1crate3.getSprite())) {
    enemy1.setVelX(1);
    enemy1.getSprite().changeAnimation('left');
  }

  if (enemy1.getSprite().overlaps(geralt)) {
    life_counter++;
    if (life_counter < 6) {
      geralt_hit.play();
      if (life_counter == 1) {
        kardia3.nextFrame();
      }
      if (life_counter == 2) {
        kardia3.nextFrame();
      }
      if (life_counter == 3) {
        kardia2.nextFrame();
      }
      if (life_counter == 4) {
        kardia2.nextFrame();
      }
      if (life_counter == 5) {
        kardia.nextFrame();
      }
      if (life_counter == 6) {
        kardia.nextFrame();
      }
    } else {
      geralt_death.play();
    }

    if (geralt.x > enemy1.getX()) {
      enemy1.setVelX(-1);
      enemy1.getSprite().changeAnimation('right');
    } else {
      enemy1.setVelX(1);
      enemy1.getSprite().changeAnimation('left');
    }
  }

  //second enemy 
  if (enemy2.getY() > minHeight) {
    enemy2.getY() = minHeight;
  }

  if (enemy2.getX() <= -840 && collided2nd == false) {
    enemy2.setVelX(1.2);
    collided2nd = true;
    enemy2.getSprite().changeAnimation('left');
  }

  if (enemy2.getSprite().collided(crate.getSprite())) {
    enemy2.setVelX(-1.2);
    enemy2.getSprite().changeAnimation('right');
  }

  if (enemy2.getSprite().collided(S1crate4.getSprite())) {
    enemy2.setVelX(1.2);
    enemy2.getSprite().changeAnimation('left');
  }

  if (enemy2.getSprite().overlaps(geralt)) {
    life_counter++
    if (life_counter < 6) {
      geralt_hit.play();
      if (life_counter == 1) {
        kardia3.nextFrame();
      }
      if (life_counter == 2) {
        kardia3.nextFrame();
      }
      if (life_counter == 3) {
        kardia2.nextFrame();
      }
      if (life_counter == 4) {
        kardia2.nextFrame();
      }
      if (life_counter == 5) {
        kardia.nextFrame();
      }
      if (life_counter == 6) {
        kardia.nextFrame();
      }
    } else {
      geralt_death.play();
    }

    if (geralt.x > enemy2.getX()) {
      enemy2.setVelX(-1.2);
      enemy2.getSprite().changeAnimation('right');
    } else {
      enemy2.setVelX(1.2);
      enemy2.getSprite().changeAnimation('left');
    }
  }

  //first enemy vol2
  if (enemy3.getX() <= -840 && collided2nd_vol2 == false) {
    enemy3.setVelX(1.2);
    collided2nd_vol2 = true;
    enemy3.getSprite().changeAnimation('left');
  }

  if (enemy3.getX() >= crate.getX()) {
    enemy3.setVelX(-1.2);
    enemy3.getSprite().changeAnimation('right');
  }

  if (enemy3.getX() <= S1sign.getX()) {
    enemy3.setVelX(1.2);
    enemy3.getSprite().changeAnimation('left');
  }

  if (enemy3.getSprite().overlaps(geralt)) {
    life_counter++
    if (life_counter < 6) {
      geralt_hit.play();
      if (life_counter == 1) {
        kardia3.nextFrame();
      }
      if (life_counter == 2) {
        kardia3.nextFrame();
      }
      if (life_counter == 3) {
        kardia2.nextFrame();
      }
      if (life_counter == 4) {
        kardia2.nextFrame();
      }
      if (life_counter == 5) {
        kardia.nextFrame();
      }
      if (life_counter == 6) {
        kardia.nextFrame();
      }
    } else {
      geralt_death.play();
    }

    if (geralt.x > enemy3.getX()) {
      enemy3.setVelX(-1.2);
      enemy3.getSprite().changeAnimation('right');
    } else {
      enemy3.setVelX(1.2);
      enemy3.getSprite().changeAnimation('left');
    }
  }

  //second enemy vol 2 
  if (enemy4.getY() > minHeight) {
    enemy4.getY() = minHeight;
  }

  if (enemy4.getX() <= -730 && collided3rd_vol2 == false) {
    enemy4.setVelX(1.2);
    collided3rd_vol2 = true;
    enemy4.getSprite().changeAnimation('left');
  }

  if (enemy4.getSprite().collided(crate.getSprite())) {
    enemy4.setVelX(1.2);
    enemy4.getSprite().changeAnimation('left');
  }

  if (enemy4.getSprite().collided(barrel1.getSprite())) {
    enemy4.setVelX(-1.2);
    enemy4.getSprite().changeAnimation('right');
  }

  if (enemy4.getSprite().overlaps(geralt)) {
    life_counter++
    if (life_counter < 6) {
      geralt_hit.play();
      if (life_counter == 1) {
        kardia3.nextFrame();
      }
      if (life_counter == 2) {
        kardia3.nextFrame();
      }
      if (life_counter == 3) {
        kardia2.nextFrame();
      }
      if (life_counter == 4) {
        kardia2.nextFrame();
      }
      if (life_counter == 5) {
        kardia.nextFrame();
      }
      if (life_counter == 6) {
        kardia.nextFrame();
      }
    } else {
      geralt_death.play();
    }

    if (geralt.x > enemy4.getX()) {
      enemy4.setVelX(-1.2);
      enemy4.getSprite().changeAnimation('right');
    } else {
      enemy4.setVelX(1.2);
      enemy4.getSprite().changeAnimation('left');
    }
  }

  //third enemy vol 2
  if (enemy5.getY() > minHeight) {
    enemy5.getY() = minHeight;
  }

  if (enemy5.getX() <= 1200 && collided4th_vol2 == false) {
    enemy5.setVelX(1.2);
    collided4th_vol2 = true;
    enemy5.getSprite().changeAnimation('left');
  }

  if (enemy5.getSprite().collided(crate3.getSprite())) {
    enemy5.setVelX(1.2);
    enemy5.getSprite().changeAnimation('left');
  }

  if (enemy5.getSprite().collided(well.getSprite())) {
    enemy5.setVelX(-1.2);
    enemy5.getSprite().changeAnimation('right');
  }

  if (enemy5.getSprite().overlaps(geralt)) {
    life_counter++

    if (life_counter < 6) {
      geralt_hit.play();
      if (life_counter == 1) {
        kardia3.nextFrame();
      }
      if (life_counter == 2) {
        kardia3.nextFrame();
      }
      if (life_counter == 3) {
        kardia2.nextFrame();
      }
      if (life_counter == 4) {
        kardia2.nextFrame();
      }
      if (life_counter == 5) {
        kardia.nextFrame();
      }
      if (life_counter == 6) {
        kardia.nextFrame();
      }
    } else {
      geralt_death.play();
    }

    if (geralt.x > enemy5.getX()) {
      enemy5.setVelX(-1.2);
      enemy5.getSprite().changeAnimation('right');
    } else {
      enemy5.setVelX(1.2);
      enemy5.getSprite().changeAnimation('left');
    }
  }

  //fourth enemy vol 2
  if (enemy6.getY() > minHeight) {
    enemy6.getY() = minHeight;
  }

  if (enemy6.getX() <= 1400 && collided5th_vol2 == false) {
    enemy6.setVelX(1.2);
    collided5th_vol2 = true;
    enemy6.getSprite().changeAnimation('left');
  }

  if (enemy6.getSprite().collided(well.getSprite())) {
    enemy6.setVelX(1.2);
    enemy6.getSprite().changeAnimation('left');
  }

  if (enemy6.getSprite().collided(S2crate2.getSprite())) {
    enemy6.setVelX(-1.2);
    enemy6.getSprite().changeAnimation('right');
  }

  if (enemy6.getSprite().overlaps(geralt)) {
    life_counter++
    if (life_counter < 6) {
      geralt_hit.play();
      if (life_counter == 1) {
        kardia3.nextFrame();
      }
      if (life_counter == 2) {
        kardia3.nextFrame();
      }
      if (life_counter == 3) {
        kardia2.nextFrame();
      }
      if (life_counter == 4) {
        kardia2.nextFrame();
      }
      if (life_counter == 5) {
        kardia.nextFrame();
      }
      if (life_counter == 6) {
        kardia.nextFrame();
      }
    } else {
      geralt_death.play();
    }

    if (geralt.x > enemy6.getX()) {
      enemy6.setVelX(-1.2);
      enemy6.getSprite().changeAnimation('right');
    } else {
      enemy6.setVelX(1.2);
      enemy6.getSprite().changeAnimation('left');
    }
  }

  //fifth enemy vol 2
  if (enemy7.getX() <= 3700 && collided7th_vol2 == false) {
    enemy7.setVelX(2);
    collided7th_vol2 = true;
    enemy7.getSprite().changeAnimation('left');
  }

  if (enemy7.getX() >= S2platform1.getX()) {
    enemy7.setVelX(-2);
    enemy7.getSprite().changeAnimation('right');
  }

  if (enemy7.getX() <= S2barrel1.getX()) {
    enemy7.setVelX(2);
    enemy7.getSprite().changeAnimation('left');
  }

  if (enemy7.getSprite().overlaps(geralt)) {
    life_counter++

    if (life_counter < 6) {
      geralt_hit.play();
      if (life_counter == 1) {
        kardia3.nextFrame();
      }
      if (life_counter == 2) {
        kardia3.nextFrame();
      }
      if (life_counter == 3) {
        kardia2.nextFrame();
      }
      if (life_counter == 4) {
        kardia2.nextFrame();
      }
      if (life_counter == 5) {
        kardia.nextFrame();
      }
      if (life_counter == 6) {
        kardia.nextFrame();
      }
    } else {
      geralt_death.play();
    }

    if (geralt.x > enemy7.getX()) {
      enemy7.gsetVelX(-2);
      enemy7.getSprite().changeAnimation('right');

    } else {
      enemy7.setVelX(2);
      enemy7.getSprite().changeAnimation('left');
    }
  }

  //sixth enemy vol 2
  if (enemy8.getY() > minHeight) {
    enemy8.getY() = minHeight;
  }

  if (enemy8.getX() <= 3800 && collided6th_vol2 == false) {

    enemy8.setVelX(2);
    collided6th_vol2 = true;
    enemy8.getSprite().changeAnimation('left');
  }

  if (enemy8.getSprite().collided(S2barrel2.getSprite())) {

    enemy8.setVelX(2);
    enemy8.getSprite().changeAnimation('left');
  }

  if (enemy8.getX() >= 4480) {
    enemy8.setVelX(-2);
    enemy8.getSprite().changeAnimation('right');
  }

  if (enemy8.getSprite().overlaps(geralt)) {
    life_counter++
    if (life_counter < 6) {
      geralt_hit.play();
      if (life_counter == 1) {
        kardia3.nextFrame();
      }
      if (life_counter == 2) {
        kardia3.nextFrame();
      }
      if (life_counter == 3) {
        kardia2.nextFrame();
      }
      if (life_counter == 4) {
        kardia2.nextFrame();
      }
      if (life_counter == 5) {
        kardia.nextFrame();
      }
      if (life_counter == 6) {
        kardia.nextFrame();
      }
    } else {
      geralt_death.play();
    }

    if (geralt.x > enemy8.getX()) {
      enemy8.setVelX(-2);
      enemy8.getSprite().changeAnimation('right');
    } else {
      enemy8.setVelX(2);
      enemy8.getSprite().changeAnimation('left');
    }
  }

  //seventh enemy vol 2
  if (enemy9.getX() <= 3700 && collided8th_vol2 == false) {
    enemy9.setVelX(-1.5);
    collided8th_vol2 = true;
    enemy9.getSprite().changeAnimation('right');

  }

  if (enemy9.getX() >= S2platform2.getX()) {
    enemy9.setVelX(-1.5);
    enemy9.getSprite().changeAnimation('right');

  }

  if (enemy9.getX() <= S2floor1.getX()) {
    enemy9.setVelX(1.5);
    enemy9.getSprite().changeAnimation('left');
  }

  if (enemy9.getSprite().overlaps(geralt)) {
    life_counter++

    if (life_counter < 6) {
      geralt_hit.play();
      if (life_counter == 1) {
        kardia3.nextFrame();
      }
      if (life_counter == 2) {
        kardia3.nextFrame();
      }
      if (life_counter == 3) {
        kardia2.nextFrame();
      }
      if (life_counter == 4) {
        kardia2.nextFrame();
      }
      if (life_counter == 5) {
        kardia.nextFrame();
      }
      if (life_counter == 6) {
        kardia.nextFrame();
      }
    } else {
      geralt_death.play();
    }

    if (geralt.x > enemy9.getX()) {
      enemy9.setVelX(-1.5);
      enemy9.getSprite().changeAnimation('right');

    } else {
      enemy9.setVelX(1.5);
      enemy9.getSprite().changeAnimation('left');
    }
  }

  //third enemy
  if (enemy10.getY() > minHeight) {
    enemy10.getY() = minHeight;
  }

  if (enemy10.getX() <= 595 && collided3rd == false) {
    enemy10.setVelX(1.2);
    collided3rd = true;
    enemy10.getSprite().changeAnimation('left');
  }

  if (enemy10.getSprite().collided(crate2.getSprite())) {
    enemy10.setVelX(-1.2);
    enemy10.getSprite().changeAnimation('right');
  }

  if (enemy10.getSprite().collided(wagon.getSprite())) {
    enemy10.setVelX(1.2);
    enemy10.getSprite().changeAnimation('left');
  }

  if (enemy10.getSprite().overlaps(geralt)) {
    life_counter++;

    if (life_counter < 6) {
      geralt_hit.play();
      if (life_counter == 1) {
        kardia3.nextFrame();
      }
      if (life_counter == 2) {
        kardia3.nextFrame();
      }
      if (life_counter == 3) {
        kardia2.nextFrame();
      }
      if (life_counter == 4) {
        kardia2.nextFrame();
      }
      if (life_counter == 5) {
        kardia.nextFrame();
      }
      if (life_counter == 6) {
        kardia.nextFrame();
      }
    }
    else {
      geralt_death.play();
    }
    if (geralt.x > enemy10.getX()) {
      enemy10.setVelX(-1.2);
      enemy10.getSprite().changeAnimation('right');
    }
    else {
      enemy10.setVelX(1.2);
      enemy10.getSprite().changeAnimation('left');
    }
  }

  //fourth enemy
  if (enemy11.getY() > minHeight) {
    enemy11.getY() = minHeight;
  }

  if (enemy11.getX() <= 2740 && collided4th == false) {
    enemy11.setVelX(1.6);
    collided4th = true;
    enemy11.getSprite().changeAnimation('left');
  }

  if (enemy11.getSprite().collided(S2well.getSprite())) {
    enemy11.setVelX(-1.6);
    enemy11.getSprite().changeAnimation('right');
  }

  if (enemy11.getSprite().collided(S2crate3.getSprite())) {
    enemy11.setVelX(1.6);
    enemy11.getSprite().changeAnimation('left');
  }

  if (enemy11.getSprite().overlaps(geralt)) {
    life_counter++;
    if (life_counter < 6) {
      geralt_hit.play();
      if (life_counter == 1) {
        kardia3.nextFrame();
      }
      if (life_counter == 2) {
        kardia3.nextFrame();
      }
      if (life_counter == 3) {
        kardia2.nextFrame();
      }
      if (life_counter == 4) {
        kardia2.nextFrame();
      }
      if (life_counter == 5) {
        kardia.nextFrame();
      }
      if (life_counter == 6) {
        kardia.nextFrame();
      }
    } else {
      geralt_death.play();
    }

    if (geralt.x > enemy11.getX()) {
      enemy11.setVelX(-1.6);
      enemy11.getSprite().changeAnimation('right');
    } else {
      enemy11.setVelX(1.6);
      enemy11.getSprite().changeAnimation('left');
    }
  }

  //fifth enemy
  if (enemy12.getY() > minHeight) {
    enemy12.getY() = minHeight;
  }

  if (enemy12.getX() <= 3290 && collided5th == false) {
    enemy12.setVelX(1.4);
    collided5th = true;
    enemy12.getSprite().changeAnimation('left');
  }

  if (enemy12.getSprite().collided(S2barrel1.getSprite())) {
    enemy12.setVelX(-1.4);
    enemy12.getSprite().changeAnimation('right');
  }

  if (enemy12.getSprite().collided(S2well.getSprite())) {
    enemy12.setVelX(1.4);
    enemy12.getSprite().changeAnimation('left');
  }

  if (enemy12.getSprite().overlaps(geralt)) {
    life_counter++;

    if (life_counter > 6) {
      geralt_death.play();
    } else {
      geralt_hit.play();

      if (life_counter == 1) {
        kardia3.nextFrame();
      } else if (life_counter == 2) {
        kardia3.nextFrame();
      } else if (life_counter == 3) {
        kardia2.nextFrame();
      } else if (life_counter == 4) {
        kardia2.nextFrame();
      } else if (life_counter == 5) {
        kardia.nextFrame();
      } else {
        kardia.nextFrame();
      }
    }

    if (geralt.x > enemy12.getX()) {
      enemy12.setVelX(-1.4);
      enemy12.getSprite().changeAnimation('right');
    }
    else {
      enemy12.setVelX(1.4);
      enemy12.getSprite().changeAnimation('left');
    }
  }

  if (slash_attack.overlaps(enemy1.getSprite())) {
    slash_attack.remove();
    attackingB = false;
    enemy_hit.play();
    counter_attack[0]++;

    if (counter_attack[0] == 2) {
      enemy1.getSprite().remove();
      goblin_death.play();
      enemies_dead++;
    }
  }

  if (slash_attack.overlaps(enemy2.getSprite())) {
    slash_attack.remove();
    attackingB = false;
    enemy_hit.play();
    counter_attack[1]++;

    if (counter_attack[1] == 2) {
      enemy2.getSprite().remove();
      goblin_death.play();
      enemies_dead++;
    }
  }

  if (slash_attack.overlaps(enemy3.getSprite())) {
    slash_attack.remove();
    attackingB = false;
    enemy_hit.play();
    counter_attack[3]++;

    if (counter_attack[3] == 2) {
      enemy3.getSprite().remove();
      bat_death.play();
      enemies_dead++;
    }
  }

  if (slash_attack.overlaps(enemy4.getSprite())) {
    slash_attack.remove();
    attackingB = false;
    enemy_hit.play();
    counter_attack[4]++;

    if (counter_attack[4] == 2) {
      enemy4.getSprite().remove();
      goblin_death.play();
      enemies_dead++;
    }
  }

  if (slash_attack.overlaps(enemy5.getSprite())) {
    slash_attack.remove();
    attackingB = false;
    enemy_hit.play();
    counter_attack[5]++;

    if (counter_attack[5] == 2) {
      enemy5.getSprite().remove();
      goblin_death.play();
      enemies_dead++;
    }
  }

  if (slash_attack.overlaps(enemy6.getSprite())) {
    slash_attack.remove();
    attackingB = false;
    enemy_hit.play();
    counter_attack[6]++;

    if (counter_attack[6] == 2) {
      enemy6.getSprite().remove();
      goblin_death.play();
      enemies_dead++;
    }
  }

  if (slash_attack.overlaps(enemy7.getSprite())) {
    slash_attack.remove();
    attackingB = false;
    enemy_hit.play();
    counter_attack[7]++;

    if (counter_attack[7] == 2) {
      enemy7.getSprite().remove();
      bat_death.play();
      enemies_dead++;
    }
  }

  if (slash_attack.overlaps(enemy8.getSprite())) {
    slash_attack.remove();
    attackingB = false;
    enemy_hit.play();
    counter_attack[8]++;

    if (counter_attack[8] == 2) {
      enemy8.getSprite().remove();
      goblin_death.play();
      enemies_dead++;
    }
  }

  if (slash_attack.overlaps(enemy9.getSprite())) {
    slash_attack.remove();
    attackingB = false;
    enemy_hit.play();
    counter_attack[9]++;

    if (counter_attack[9] == 2) {
      enemy9.getSprite().remove();
      bat_death.play();
      enemies_dead++;
    }
  }

  if (slash_attack.overlaps(enemy10.getSprite())) {
    slash_attack.remove();
    attackingB = false;
    enemy_hit.play();
    counter_attack_skeleton[0]++;

    if (counter_attack_skeleton[0] == 4) {
      enemy10.getSprite().remove();
      skeleton_death.play();
      enemies_dead++;
    }
  }

  if (slash_attack.overlaps(enemy11.getSprite())) {
    slash_attack.remove();
    attackingB = false;
    enemy_hit.play();
    counter_attack[2]++;

    if (counter_attack[2] == 2) {
      enemy11.getSprite().remove();
      goblin_death.play();
      enemies_dead++;
    }
  }

  if (slash_attack.overlaps(enemy12.getSprite())) {
    slash_attack.remove();
    attackingB = false;
    enemy_hit.play();
    counter_attack_skeleton[1]++;

    if (counter_attack_skeleton[1] == 4) {
      enemy12.getSprite().remove();
      skeleton_death.play();
      enemies_dead++;
    }
  }

  if (slash_attack2.overlaps(enemy1.getSprite())) {
    slash_attack2.remove();
    attackingC = false;
    enemy_hit.play();
    counter_attack[0]++;

    if (counter_attack[0] == 2) {
      enemy1.getSprite().remove();
      goblin_death.play();
      enemies_dead++;
    }
  }

  if (slash_attack2.overlaps(enemy2.getSprite())) {
    slash_attack2.remove();
    attackingC = false;
    enemy_hit.play();
    counter_attack[1]++;

    if (counter_attack[1] == 2) {
      enemy2.getSprite().remove();
      goblin_death.play();
      enemies_dead++;
    }
  }

  if (slash_attack2.overlaps(enemy3.getSprite())) {
    slash_attack2.remove();
    attackingC = false;
    enemy_hit.play();
    counter_attack[3]++;

    if (counter_attack[3] == 2) {
      enemy3.getSprite().remove();
      bat_death.play();
      enemies_dead++;
    }
  }

  if (slash_attack2.overlaps(enemy4.getSprite())) {
    slash_attack2.remove();
    attackingC = false;
    enemy_hit.play();
    counter_attack[4]++;

    if (counter_attack[4] == 2) {
      enemy4.getSprite().remove();
      goblin_death.play();
      enemies_dead++;
    }
  }

  if (slash_attack2.overlaps(enemy5.getSprite())) {
    slash_attack2.remove();
    attackingC = false;
    enemy_hit.play();
    counter_attack[5]++;

    if (counter_attack[5] == 2) {
      enemy5.getSprite().remove();
      goblin_death.play();
      enemies_dead++;
    }
  }

  if (slash_attack2.overlaps(enemy6.getSprite())) {
    slash_attack2.remove();
    attackingC = false;
    enemy_hit.play();
    counter_attack[6]++;

    if (counter_attack[6] == 2) {
      enemy6.getSprite().remove();
      goblin_death.play();
      enemies_dead++;
    }
  }

  if (slash_attack2.overlaps(enemy7.getSprite())) {
    slash_attack2.remove();
    attackingC = false;
    enemy_hit.play();
    counter_attack[7]++;

    if (counter_attack[7] == 2) {
      enemy7.getSprite().remove();
      goblin_death.play();
      enemies_dead++;
    }
  }

  if (slash_attack2.overlaps(enemy8.getSprite())) {
    slash_attack2.remove();
    attackingC = false;
    enemy_hit.play();
    counter_attack[8]++;

    if (counter_attack[8] == 2) {
      enemy8.getSprite().remove();
      goblin_death.play();
      enemies_dead++;
    }
  }

  if (slash_attack2.overlaps(enemy9.getSprite())) {
    slash_attack2.remove();
    attackingC = false;
    enemy_hit.play();
    counter_attack[9]++;

    if (counter_attack[9] == 2) {
      enemy9.getSprite().remove();
      goblin_death.play();
      enemies_dead++;
    }
  }

  if (slash_attack2.overlaps(enemy10.getSprite())) {
    slash_attack2.remove();
    attackingC = false;
    enemy_hit.play();
    counter_attack_skeleton[0]++;

    if (counter_attack_skeleton[0] == 4) {
      enemy10.getSprite().remove();
      skeleton_death.play();
      enemies_dead++;
    }
  }

  if (slash_attack2.overlaps(enemy11.getSprite())) {
    slash_attack2.remove();
    attackingC = false;
    enemy_hit.play();
    counter_attack[2]++;

    if (counter_attack[2] == 2) {
      enemy11.getSprite().remove();
      goblin_death.play();
      enemies_dead++;
    }
  }

  if (slash_attack2.overlaps(enemy12.getSprite())) {
    slash_attack2.remove();
    attackingC = false;
    enemy_hit.play();
    counter_attack_skeleton[1]++;

    if (counter_attack_skeleton[1] == 4) {
      enemy12.getSprite().remove();
      skeleton_death.play();
      enemies_dead++;
    }
  }

  if (slash_attack3.overlaps(enemy1.getSprite())) {
    enemy1.getSprite().remove();
    slash_attack3.remove();
    attackingV = false;
    goblin_death.play();
    enemies_dead++;
  }

  if (slash_attack3.overlaps(enemy2.getSprite())) {
    enemy2.getSprite().remove();
    slash_attack3.remove();
    attackingV = false;
    goblin_death.play();
    enemies_dead++;
  }

  if (slash_attack3.overlaps(enemy3.getSprite())) {
    enemy3.getSprite().remove();
    slash_attack3.remove();
    attackingV = false;
    bat_death.play();
    enemies_dead++;
  }

  if (slash_attack3.overlaps(enemy4.getSprite())) {
    enemy4.getSprite().remove();
    slash_attack3.remove();
    attackingV = false;
    goblin_death.play();
    enemies_dead++;
  }

  if (slash_attack3.overlaps(enemy5.getSprite())) {
    enemy5.getSprite().remove();
    slash_attack3.remove();
    attackingV = false;
    goblin_death.play();
    enemies_dead++;
  }

  if (slash_attack3.overlaps(enemy6.getSprite())) {
    enemy6.getSprite().remove();
    slash_attack3.remove();
    attackingV = false;
    goblin_death.play();
    enemies_dead++;
  }

  if (slash_attack3.overlaps(enemy7.getSprite())) {
    enemy7.getSprite().remove();
    slash_attack3.remove();
    attackingV = false;
    goblin_death.play();
    enemies_dead++;
  }

  if (slash_attack3.overlaps(enemy8.getSprite())) {
    enemy8.getSprite().remove();
    slash_attack3.remove();
    attackingV = false;
    goblin_death.play();
    enemies_dead++;
  }

  if (slash_attack3.overlaps(enemy9.getSprite())) {
    enemy9.getSprite().remove();
    slash_attack3.remove();
    attackingV = false;
    goblin_death.play();
    enemies_dead++;
  }

  if (slash_attack3.overlaps(enemy10.getSprite())) {
    enemy10.getSprite().remove();
    slash_attack3.remove();
    attackingV = false;
    skeleton_death.play();
    enemies_dead++;
  }

  if (slash_attack3.overlaps(enemy11.getSprite())) {
    enemy11.getSprite().remove();
    slash_attack3.remove();
    attackingV = false;
    goblin_death.play();
    enemies_dead++;
  }

  if (slash_attack3.overlaps(enemy12.getSprite())) {
    enemy12.getSprite().remove();
    slash_attack3.remove();
    attackingV = false;
    skeleton_death.play();
    enemies_dead++;
  }
}

function death() {
  if (life_counter == 6) {
    for (let i = allSprites.length; i--;) {
      allSprites[i].remove();
    }
    background_sound.stop();
    stage = "endMenu";
  }
}

function finished(){
 
  if(coins_collected == 13 && enemies_dead == 12 ){
    for (let i = allSprites.length; i--;) {
      allSprites[i].remove();
    }
    background_sound.stop();
    stage = "endMenu";
  }
}


function removeCoins() {
  if (geralt.overlaps(coin1.getSprite())) {
    coin1.getSprite().remove();
    coin_sound.play();
    coins_collected++;
  }

  if (geralt.overlaps(coin2.getSprite())) {
    coin2.getSprite().remove();
    coin_sound.play();
    coins_collected++;
  }

  if (geralt.overlaps(coin3.getSprite())) {
    coin3.getSprite().remove();
    coin_sound.play();
    coins_collected++;
  }

  if (geralt.overlaps(coin4.getSprite())) {
    coin4.getSprite().remove();
    coin_sound.play();
    coins_collected++;
  }

  if (geralt.overlaps(coin5.getSprite())) {
    coin5.getSprite().remove();
    coin_sound.play();
    coins_collected++;
  }

  if (geralt.overlaps(coin6.getSprite())) {
    coin6.getSprite().remove();
    coin_sound.play();
    coins_collected++;
  }

  if (geralt.overlaps(coin7.getSprite())) {
    coin7.getSprite().remove();
    coin_sound.play();
    coins_collected++;
  }

  if (geralt.overlaps(coin8.getSprite())) {
    coin8.getSprite().remove();
    coin_sound.play();
    coins_collected++;
  }

  if (geralt.overlaps(coin2_1.getSprite())) {
    coin2_1.getSprite().remove();
    coin_sound.play();
    coins_collected++;
  }

  if (geralt.overlaps(coin2_2.getSprite())) {
    coin2_2.getSprite().remove();
    coin_sound.play();
    coins_collected++;
  }

  if (geralt.overlaps(coin2_3.getSprite())) {
    coin2_3.getSprite().remove();
    coin_sound.play();
    coins_collected++;
  }

  if (geralt.overlaps(coin2_4.getSprite())) {
    coin2_4.getSprite().remove();
    coin_sound.play();
    coins_collected++;
  }

  if (geralt.overlaps(coin2_5.getSprite())) {
    coin2_5.getSprite().remove();
    coin_sound.play();
    coins_collected++;
  }


  if (slash_attack.overlaps(coin1.getSprite())) {
    coin1.getSprite().remove();
    coin_sound.play();
    coins_collected++;
  }

  if (slash_attack.overlaps(coin2.getSprite())) {
    coin2.getSprite().remove();
    coin_sound.play();
    coins_collected++;
  }

  if (slash_attack.overlaps(coin3.getSprite())) {
    coin3.getSprite().remove();
    coin_sound.play();
    coins_collected++;
  }

  if (slash_attack.overlaps(coin4.getSprite())) {
    coin4.getSprite().remove();
    coin_sound.play();
    coins_collected++;
  }

  if (slash_attack.overlaps(coin5.getSprite())) {
    coin5.getSprite().remove();
    coin_sound.play();
    coins_collected++;
  }

  if (slash_attack.overlaps(coin6.getSprite())) {
    coin6.getSprite().remove();
    coin_sound.play();
    coins_collected++;
  }

  if (slash_attack.overlaps(coin7.getSprite())) {
    coin7.getSprite().remove();
    coin_sound.play();
    coins_collected++;
  }

  if (slash_attack.overlaps(coin8.getSprite())) {
    coin8.getSprite().remove();
    coin_sound.play();
    coins_collected++;
  }

  if (slash_attack.overlaps(coin2_1.getSprite())) {
    coin2_1.getSprite().remove();
    coin_sound.play();
    coins_collected++;
  }

  if (slash_attack.overlaps(coin2_2.getSprite())) {
    coin2_2.getSprite().remove();
    coin_sound.play();
    coins_collected++;
  }

  if (slash_attack.overlaps(coin2_3.getSprite())) {
    coin2_3.getSprite().remove();
    coin_sound.play();
    coins_collected++;
  }

  if (slash_attack.overlaps(coin2_4.getSprite())) {
    coin2_4.getSprite().remove();
    coin_sound.play();
    coins_collected++;
  }

  if (slash_attack.overlaps(coin2_5.getSprite())) {
    coin2_5.getSprite().remove();
    coin_sound.play();
    coins_collected++;
  }


  if (slash_attack2.overlaps(coin1.getSprite())) {
    coin1.getSprite().remove();
    coin_sound.play();
    coins_collected++;
  }

  if (slash_attack2.overlaps(coin2.getSprite())) {
    coin2.getSprite().remove();
    coin_sound.play();
    coins_collected++;
  }

  if (slash_attack2.overlaps(coin3.getSprite())) {
    coin3.getSprite().remove();
    coin_sound.play();
    coins_collected++;
  }

  if (slash_attack2.overlaps(coin4.getSprite())) {
    coin4.getSprite().remove();
    coin_sound.play();
    coins_collected++;
  }

  if (slash_attack2.overlaps(coin5.getSprite())) {
    coin5.getSprite().remove();
    coin_sound.play();
    coins_collected++;
  }

  if (slash_attack2.overlaps(coin6.getSprite())) {
    coin6.getSprite().remove();
    coin_sound.play();
    coins_collected++;
  }

  if (slash_attack2.overlaps(coin7.getSprite())) {
    coin7.getSprite().remove();
    coin_sound.play();
    coins_collected++;
  }

  if (slash_attack2.overlaps(coin8.getSprite())) {
    coin8.getSprite().remove();
    coin_sound.play();
    coins_collected++;
  }

  if (slash_attack2.overlaps(coin2_1.getSprite())) {
    coin2_1.getSprite().remove();
    coin_sound.play();
    coins_collected++;
  }

  if (slash_attack2.overlaps(coin2_2.getSprite())) {
    coin2_2.getSprite().remove();
    coin_sound.play();
    coins_collected++;
  }

  if (slash_attack2.overlaps(coin2_3.getSprite())) {
    coin2_3.getSprite().remove();
    coin_sound.play();
    coins_collected++;
  }

  if (slash_attack2.overlaps(coin2_4.getSprite())) {
    coin2_4.getSprite().remove();
    coin_sound.play();
    coins_collected++;
  }

  if (slash_attack2.overlaps(coin2_5.getSprite())) {
    coin2_5.getSprite().remove();
    coin_sound.play();
    coins_collected++;
  }
}

var attackingB = false;
var attackingC = false;
var attackingV = false;

function spawnAttack() {
  if (kb.presses('b') && (attackingB == false)) {
    slash_attack = createSprite(geralt.x + 100, geralt.y - 15, 60, 50);
    slash_attack.addAnimation(slash_Right);
    slash_sound.play();
    slash_attack.rotationLock = true;
    slash_attack.vel.x = +3;
    slash_attack.vel.y = 0;
    attackingB = true;
  }

  if (kb.presses('c') && (attackingC == false)) {
    slash_attack2 = createSprite(geralt.x - 100, geralt.y - 15, 60, 50);
    slash_attack2.addAnimation(slash_Left);
    slash_sound.play();
    slash_attack2.rotationLock = true;
    slash_attack2.vel.x = -3;
    slash_attack2.vel.y = 0;
    attackingC = true;
  }

  if (kb.holding('v') && (attackingV == false)) {
    slash_attack3 = createSprite(geralt.x + 120, geralt.y - 15, 90, 50);
    slash_attack3.addAnimation(slash_main);
    slash_attack3.collider = 'static';
    slash_main_sound.play();
    slash_main_sound.loop();
    slash_attack3.rotationLock = true;
    attackingV = true;
  }

  if (slash_attack.y >= minHeight) {   //COLLIDING ANTI GIA OVERLAPS AMA THELOUME NA KANEI KAI KNOCKBACK TO enemy1.getSprite()
    slash_attack.y = minHeight;
    slash_attack.remove();
    attackingB = false;
  }

  if (slash_attack2.y >= minHeight) {   //COLLIDING ANTI GIA OVERLAPS AMA THELOUME NA KANEI KAI KNOCKBACK TO enemy1.getSprite()
    slash_attack2.remove();
    attackingC = false;
  }

  if (kb.released('v')) {
    slash_attack3.remove();
    attackingV = false;
    slash_main_sound.stop();
  }
}
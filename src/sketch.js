// Game Control
let stage = "startMenu";

let hop = -8;
let fallingSpeed = 0.2;
let minHeight = 465;

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

  // Preload Objects
  preloadObjects();

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
  enemyAnimationLeft = loadAnimation('./assets/images/Goblin/RunLeft.png', { size: [220, 220], frames: 8 });
  enemy2AnimationLeft = loadAnimation('./assets/images/Skeleton/WalkLeft.png', { size: [270, 270], frames: 4 });
  enemyAnimationRight = loadAnimation('./assets/images/Goblin/RunRight.png', { size: [220, 220], frames: 8 });
  enemy2AnimationRight = loadAnimation('./assets/images/Skeleton/WalkRight.png', { size: [270, 270], frames: 4 });
  enemy3AnimationLeft = loadAnimation('./assets/images/bat_right.png', { size: [60.25, 64], frames: 4 });
  enemy3AnimationRight = loadAnimation('./assets/images/bat_left.png', { size: [60.25, 64], frames: 4 });

  enemyAnimationLeft.frameDelay = 10;
  enemy2AnimationLeft.frameDelay = 15;
  enemyAnimationRight.frameDelay = 10;
  enemy2AnimationRight.frameDelay = 15;
}

function preloadAttacks() {
  slash_main = loadAnimation('./assets/images/Sword Slashes/slash.png', { size: [165, 120], frames: 20 });
  slash_thinLeft = loadAnimation('./assets/images/Sword Slashes/slash_white_thin.png', { size: [68.75, 50], frames: 6 });
  slash_thinRight = loadAnimation('./assets/images/Sword Slashes/slash_white_thinright.png', { size: [68.75, 50], frames: 6 });
  slash_Right = loadAnimation('./assets/images/Sword Slashes/slash_red_right.png', { size: [89.5, 65], frames: 6 });
  slash_Left = loadAnimation('./assets/images/Sword Slashes/slash_red_left.png', { size: [89.5, 65], frames: 6 });
}

function preloadObjects() {
  floorImg = loadImage('./assets/images/floor.png');
  floorshortImg = loadImage('./assets/images/floor_short.png');
  wellImg = loadImage('./assets/images/well.png');
  welltopImg = loadImage('./assets/images/welltop.png');
  platformImg = loadImage('./assets/images/platform.png');
  platform1Img = loadImage('./assets/images/platform1.png');
  platform2Img = loadImage('./assets/images/platform2.png');
}

function preloadOther() {
  lives = loadAnimation('./assets/images/hearts.png', { size: [40, 40], frames: 3 });

  coins = loadAnimation('./assets/images/coin3_16x16.png', { size: [16, 22], frames: 14 });
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
  optionsButton = new TextButton(width / 2, playButton.getY() + 65, "Options");
  creditsButton = new TextButton(width / 2, optionsButton.getY() + 65, "Credits");
  exitButton = new TextButton(width / 2, creditsButton.getY() + 65, "Exit");

  skinButton = new TextButton(width / 2, height / 2, "Change Skin");
  soundButton = new SoundButton(width - 65, 65);
  returnButton = new ReturnButton(65, 65);

  replayButton = new TextButton(width / 2, height / 2, "Play Again");
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
  enemy1 = createSprite(-2400, 465, 55, 100);
  enemy1.rotationLock = true;

  enemy1.addAnimation('left', enemyAnimationLeft);
  enemy1.addAnimation('right', enemyAnimationRight);
  enemy1.layer = 2;

  enemy2 = createSprite(-1400, 465, 55, 100);
  enemy2.rotationLock = true;

  enemy2.addAnimation('left', enemyAnimationLeft.clone());
  enemy2.addAnimation('right', enemyAnimationRight.clone());
  enemy2.layer = 2;

  enemy2_1 = createSprite(-1170, 150, 55, 100);
  enemy2_1.rotationLock = true;
  enemy2_1.collider = 'kinematic';

  enemy2_1.addAnimation('left', enemy3AnimationLeft);
  enemy2_1.addAnimation('right', enemy3AnimationRight);
  enemy2_1.layer = 2;

  enemy2_2 = createSprite(-730, 465, 55, 100);
  enemy2_2.rotationLock = true;

  enemy2_2.addAnimation('left', enemyAnimationLeft.clone());
  enemy2_2.addAnimation('right', enemyAnimationRight.clone());
  enemy2_2.layer = 2;

  enemy2_3 = createSprite(1100, 465, 55, 100);
  enemy2_3.rotationLock = true;

  enemy2_3.addAnimation('left', enemyAnimationLeft.clone());
  enemy2_3.addAnimation('right', enemyAnimationRight.clone());
  enemy2_3.layer = 2;

  enemy2_4 = createSprite(1400, 465, 55, 100);
  enemy2_4.rotationLock = true;

  enemy2_4.addAnimation('left', enemyAnimationLeft.clone());
  enemy2_4.addAnimation('right', enemyAnimationRight.clone());
  enemy2_4.layer = 2;

  enemy2_5 = createSprite(3650, 250, 55, 100);
  enemy2_5.rotationLock = true;

  enemy2_5.addAnimation('left', enemy3AnimationLeft.clone());
  enemy2_5.addAnimation('right', enemy3AnimationRight.clone());
  enemy2_5.layer = 2;
  enemy2_5.collider = 'kinematic';

  enemy2_6 = createSprite(3650, 465, 55, 100);
  enemy2_6.rotationLock = true;

  enemy2_6.addAnimation('left', enemyAnimationLeft.clone());
  enemy2_6.addAnimation('right', enemyAnimationRight.clone());
  enemy2_6.layer = 2;

  enemy2_7 = createSprite(4295, 170, 55, 100);
  enemy2_7.rotationLock = true;

  enemy2_7.addAnimation('left', enemy3AnimationLeft.clone());
  enemy2_7.addAnimation('right', enemy3AnimationRight.clone());
  enemy2_7.layer = 2;
  enemy2_7.collider = 'kinematic';

  enemy3 = createSprite(300, 445, 55, 100);
  enemy3.rotationLock = true;

  enemy3.addAnimation('left', enemy2AnimationLeft);
  enemy3.addAnimation('right', enemy2AnimationRight);
  enemy3.layer = 2;

  enemy4 = createSprite(2300, 465, 55, 100);
  enemy4.rotationLock = true;

  enemy4.addAnimation('left', enemyAnimationLeft.clone());
  enemy4.addAnimation('right', enemyAnimationRight.clone());
  enemy4.layer = 2;

  enemy5 = createSprite(2800, 465, 55, 100);
  enemy5.rotationLock = true;

  enemy5.addAnimation('left', enemy2AnimationLeft.clone());
  enemy5.addAnimation('right', enemy2AnimationRight.clone());
  enemy5.layer = 2;
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
  S1barrel2 = new Barrel(-3500, 475);
  barrel1 = new Barrel(-435, 475);
  barrel2 = new Barrel(-370, 475);
  S2barrel1 = new Barrel(3300, 475);
  S2barrel2 = new Barrel(3360, 475);

  // Crates
  S1crate = new Crate(-3100, 470);
  S1crate1 = new Crate(-2750, 404);
  S1crate2 = new Crate(-2785, 470);
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
  S1platform1a = createSprite(-1450, 320, 185, 20);
  S1platform1a.collider = 'static';
  S1platform1a.visible = false;

  S1platform1b = createSprite(-1450, 405, 185, 20);
  S1platform1b.collider = 'none';
  platform1Img.resize(195, 195);
  S1platform1b.addImage(platform1Img);

  S1platform2a = createSprite(-1190, 285, 185, 20);
  S1platform2a.collider = 'static';

  S1platform2b = createSprite(-1190, 383, 185, 20);
  S1platform2b.collider = 'none';
  platform2Img.resize(195, 235);
  S1platform2b.addImage(platform2Img);

  platform1a = createSprite(1435, 320, 185, 20);
  platform1a.collider = 'static';
  platform1a.visible = false;

  platform1b = createSprite(1435, 405, 185, 20);
  platform1b.collider = 'none';
  platform1Img.resize(195, 195);
  platform1b.addImage(platform1Img);

  platform2a = createSprite(1695, 285, 185, 20);
  platform2a.collider = 'static';

  platform2b = createSprite(1695, 383, 185, 20);
  platform2b.collider = 'none';
  platform2Img.resize(195, 235);
  platform2b.addImage(platform2Img);

  S2platform1a = createSprite(4030, 320, 185, 20);
  S2platform1a.collider = 'static';
  S2platform1a.visible = false;

  S2platform1b = createSprite(4030, 405, 185, 20);
  S2platform1b.collider = 'none';
  platform1Img.resize(195, 195);
  S2platform1b.addImage(platform1Img);

  S2platform2a = createSprite(4295, 285, 185, 20);
  S2platform2a.collider = 'static';

  S2platform2b = createSprite(4295, 383, 185, 20);
  S2platform2b.collider = 'none';
  platform2Img.resize(195, 235);
  S2platform2b.addImage(platform2Img);

  S1platform1a.layer = 1;
  S1platform1b.layer = 1;
  S1platform2a.layer = 1;
  S1platform2b.layer = 1;
  platform1a.layer = 1;
  platform1b.layer = 1;
  platform2a.layer = 1;
  platform2b.layer = 1;
  S2platform1a.layer = 1;
  S2platform1b.layer = 1;
  S2platform2a.layer = 1;
  S2platform2b.layer = 1;

  // Floors
  floor1 = createSprite(842, 390, 145, 40);
  floor1.collider = 'static';
  floorImg.resize(160, 39);
  floor1.addImage(floorImg);

  floor2 = createSprite(957, 325, 120, 40);
  floor2.collider = 'static';
  floorshortImg.resize(127, 39);
  floor2.addImage(floorshortImg);

  S2floor1 = createSprite(3655, 345, 145, 40);
  S2floor1.collider = 'static';
  floorImg.resize(160, 39);
  S2floor1.addImage(floorImg);

  floor1.layer = 1;
  floor2.layer = 1;
  S2floor1.layer = 1;

  // Wells
  well = createSprite(1205, 460, 110, 15);
  well.collider = 'none';
  wellImg.resize(100, 100);
  well.addImage(wellImg);

  welltop = createSprite(1201, 415, 95, 15);
  welltop.collider = 'static';
  welltopImg.resize(91, 20);
  welltop.addImage(welltopImg);

  S2well = createSprite(2750, 460, 110, 15);
  S2well.collider = 'none';
  wellImg.resize(100, 100);
  S2well.addImage(wellImg);

  S2welltop = createSprite(2750, 415, 95, 15);
  S2welltop.collider = 'static';
  welltopImg.resize(91, 20);

  S2welltop.visible = false;
  well.layer = 1;
  welltop.layer = 1;
  S2well.layer = 1;
  S2welltop.layer = 1; 
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
  obstacles.add(S1barrel1.getSprite());
  obstacles.add(S1barrel2.getSprite());

  obstacles.add(S1crate.getSprite());
  obstacles.add(S1crate1.getSprite());
  obstacles.add(S1crate2.getSprite());
  obstacles.add(S1crate3.getSprite());
  obstacles.add(S1crate4.getSprite());

  obstacles.add(S1sign.getSprite());
  obstacles.add(sign.getSprite());

  obstacles.add(S1wagon.getSprite());

  obstacles.add(S1platform1a);
  obstacles.add(S1platform2a);
  obstacles.add(crate.getSprite());
  obstacles.add(crate1.getSprite());
  obstacles.add(crate2.getSprite());
  obstacles.add(crate3.getSprite());
  obstacles.add(barrel1.getSprite());
  obstacles.add(barrel2.getSprite());
  obstacles.add(sign.getSprite());
  obstacles.add(wagon.getSprite());
  obstacles.add(floor1);
  obstacles.add(floor2);
  obstacles.add(welltop);
  obstacles.add(platform1a);
  obstacles.add(platform2a);
  obstacles.add(S2crate1.getSprite());
  obstacles.add(S2crate2.getSprite());
  obstacles.add(S2crate3.getSprite());
  obstacles.add(S2welltop);
  obstacles.add(S2barrel1.getSprite());
  obstacles.add(S2barrel2.getSprite());
  obstacles.add(S2floor1);
  obstacles.add(S2platform1a);
  obstacles.add(S2platform2a);
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

  // Draw background
  land.displayGame();

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
  death();

  //BOUNDARIES FOR PLAYER
  if (geralt.x <= -3550) {
    geralt.x = -3550;
  }

  if (geralt.x >= 4450) {
    geralt.x = 4450;
  }

  jump(geralt);

  //camera.y = geralt.y;
  if (geralt.x >= -3200 && geralt.x <= 4000) {
    camera.x = geralt.x + 50;
    kardia.setX(geralt.x - 320);
    kardia2.setX(geralt.x - 284);
    kardia3.setX(geralt.x - 248);
  }

  // Stop controlling camera
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

var jumped = false;

//geralt jump
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

  if (sprite.colliding(floor1)) {
    sprite.vel.y = 0;

    if (keyIsDown(UP_ARROW)) {
      sprite.vel.y = hop;
    }
  }

  if (sprite.y >= floor1.y && sprite.colliding(floor1)) {
    sprite.vel.y = 0;
  }

  if (sprite.colliding(floor2)) {
    sprite.vel.y = 0;

    if (keyIsDown(UP_ARROW)) {
      sprite.vel.y = hop;
    }
  }

  if (sprite.y >= floor2.y && sprite.colliding(floor2)) {
    sprite.vel.y = 0;
  }

  if (sprite.colliding(welltop)) {
    sprite.vel.y = 0;

    if (keyIsDown(UP_ARROW)) {
      sprite.vel.y = hop;
    }
  }

  if (sprite.y >= welltop.y && sprite.colliding(welltop)) {
    sprite.vel.y = 0;
  }

  if (sprite.colliding(platform1a)) {
    sprite.vel.y = 0;

    if (keyIsDown(UP_ARROW)) {
      sprite.vel.y = hop;
    }
  }

  if (sprite.y >= platform1a.y && sprite.colliding(platform1a)) {
    sprite.vel.y = 0;
  }

  if (sprite.colliding(platform2a)) {
    sprite.vel.y = 0;

    if (keyIsDown(UP_ARROW)) {

      sprite.vel.y = hop;
    }
  }

  if (sprite.y >= platform2a.y && sprite.colliding(platform2a)) {
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

  if (sprite.y >= S1sign.getSprite().y && sprite.colliding(S1sign.getSprite())) {
    sprite.vel.y = 0;
  }

  if (sprite.colliding(S1crate4.getSprite())) {
    sprite.vel.y = 0;

    if (keyIsDown(UP_ARROW)) {
      sprite.vel.y = hop;
    }
  }

  if (sprite.colliding(S1platform1a)) {
    sprite.vel.y = 0;

    if (keyIsDown(UP_ARROW)) {
      sprite.vel.y = hop;
    }
  }

  if (sprite.y >= S1platform1a.y && sprite.colliding(S1platform1a)) {
    sprite.vel.y = 0;
  }

  if (sprite.colliding(S1platform2a)) {
    sprite.vel.y = 0;

    if (keyIsDown(UP_ARROW)) {

      sprite.vel.y = hop;
    }
  }

  if (sprite.y >= S1platform2a.y && sprite.colliding(S1platform2a)) {
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

  if (sprite.colliding(S2welltop)) {
    sprite.vel.y = 0;

    if (keyIsDown(UP_ARROW)) {
      sprite.vel.y = hop;
    }
  }

  if (sprite.y >= S2welltop.y && sprite.colliding(S2welltop)) {
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

  if (sprite.colliding(S2floor1)) {
    sprite.vel.y = 0;

    if (keyIsDown(UP_ARROW)) {

      sprite.vel.y = hop;
    }
  }

  if (sprite.y >= S2floor1.y && sprite.colliding(S2floor1)) {
    sprite.vel.y = 0;
  }

  if (sprite.colliding(S2platform1a)) {
    sprite.vel.y = 0;

    if (keyIsDown(UP_ARROW)) {

      sprite.vel.y = hop;
    }
  }

  if (sprite.y >= S2platform1a.y && sprite.colliding(S2platform1a)) {
    sprite.vel.y = 0;
  }

  if (sprite.colliding(S2platform2a)) {
    sprite.vel.y = 0;

    if (keyIsDown(UP_ARROW)) {

      sprite.vel.y = hop;
    }

  }

  if (sprite.y >= S2platform2a.y && sprite.colliding(S2platform2a)) {
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
  if (enemy1.y > minHeight) {
    enemy1.y = minHeight;
  }

  if (enemy1.x <= -2230 && collided == false) {
    enemy1.vel.x = 1;
    collided = true;
    enemy1.changeAnimation('left');
  }

  if (enemy1.collided(S1wagon.getSprite())) {
    enemy1.vel.x = -1;
    enemy1.changeAnimation('right');
  }

  if (enemy1.collided(S1crate3.getSprite())) {
    enemy1.vel.x = 1;
    enemy1.changeAnimation('left');
  }

  if (enemy1.overlaps(geralt)) {
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

    if (geralt.x > enemy1.x) {
      enemy1.vel.x = -1;
      enemy1.changeAnimation('right');
    } else {
      enemy1.vel.x = 1;
      enemy1.changeAnimation('left');
    }
  }

  //second enemy 
  if (enemy2.y > minHeight) {
    enemy2.y = minHeight;
  }

  if (enemy2.x <= -840 && collided2nd == false) {
    enemy2.vel.x = 1.2;
    collided2nd = true;
    enemy2.changeAnimation('left');
  }

  if (enemy2.collided(crate.getSprite())) {
    enemy2.vel.x = -1.2;
    enemy2.changeAnimation('right');
  }

  if (enemy2.collided(S1crate4.getSprite())) {
    enemy2.vel.x = 1.2;
    enemy2.changeAnimation('left');
  }

  if (enemy2.overlaps(geralt)) {
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

    if (geralt.x > enemy2.x) {
      enemy2.vel.x = -1.2;
      enemy2.changeAnimation('right');
    } else {
      enemy2.vel.x = 1.2;
      enemy2.changeAnimation('left');
    }
  }

  //first enemy vol2
  if (enemy2_1.x <= -840 && collided2nd_vol2 == false) {
    enemy2_1.vel.x = 1.2;
    collided2nd_vol2 = true;
    enemy2_1.changeAnimation('left');
  }

  if (enemy2_1.x >= crate.getX()) {
    enemy2_1.vel.x = -1.2;
    enemy2_1.changeAnimation('right');
  }

  if (enemy2_1.x <= S1sign.getSprite().x) {
    enemy2_1.vel.x = 1.2;
    enemy2_1.changeAnimation('left');
  }

  if (enemy2_1.overlaps(geralt)) {
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

    if (geralt.x > enemy2_1.x) {
      enemy2_1.vel.x = -1.2;
      enemy2_1.changeAnimation('right');
    } else {
      enemy2_1.vel.x = 1.2;
      enemy2_1.changeAnimation('left');
    }
  }

  //second enemy vol 2 
  if (enemy2_2.y > minHeight) {
    enemy2_2.y = minHeight;
  }

  if (enemy2_2.x <= -730 && collided3rd_vol2 == false) {
    enemy2_2.vel.x = 1.2;
    collided3rd_vol2 = true;
    enemy2_2.changeAnimation('left');
  }

  if (enemy2_2.collided(crate.getSprite())) {
    enemy2_2.vel.x = 1.2;
    enemy2_2.changeAnimation('left');
  }

  if (enemy2_2.collided(barrel1.getSprite())) {
    enemy2_2.vel.x = -1.2;
    enemy2_2.changeAnimation('right');
  }

  if (enemy2_2.overlaps(geralt)) {
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

    if (geralt.x > enemy2_2.x) {
      enemy2_2.vel.x = -1.2;
      enemy2_2.changeAnimation('right');
    } else {
      enemy2_2.vel.x = 1.2;
      enemy2_2.changeAnimation('left');
    }
  }

  //third enemy vol 2
  if (enemy2_3.y > minHeight) {
    enemy2_3.y = minHeight;
  }

  if (enemy2_3.x <= 1200 && collided4th_vol2 == false) {
    enemy2_3.vel.x = 1.2;
    collided4th_vol2 = true;
    enemy2_3.changeAnimation('left');
  }

  if (enemy2_3.collided(crate3.getSprite())) {
    enemy2_3.vel.x = 1.2;
    enemy2_3.changeAnimation('left');
  }

  if (enemy2_3.collided(welltop)) {
    enemy2_3.vel.x = -1.2;
    enemy2_3.changeAnimation('right');
  }

  if (enemy2_3.overlaps(geralt)) {
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

    if (geralt.x > enemy2_3.x) {
      enemy2_3.vel.x = -1.2;
      enemy2_3.changeAnimation('right');
    } else {
      enemy2_3.vel.x = 1.2;
      enemy2_3.changeAnimation('left');
    }
  }

  //fourth enemy vol 2
  if (enemy2_4.y > minHeight) {
    enemy2_4.y = minHeight;
  }

  if (enemy2_4.x <= 1400 && collided5th_vol2 == false) {
    enemy2_4.vel.x = 1.2;
    collided5th_vol2 = true;
    enemy2_4.changeAnimation('left');
  }

  if (enemy2_4.collided(welltop)) {
    enemy2_4.vel.x = 1.2;
    enemy2_4.changeAnimation('left');
  }

  if (enemy2_4.collided(S2crate2.getSprite())) {
    enemy2_4.vel.x = -1.2;
    enemy2_4.changeAnimation('right');
  }

  if (enemy2_4.overlaps(geralt)) {
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

    if (geralt.x > enemy2_4.x) {
      enemy2_4.vel.x = -1.2;
      enemy2_4.changeAnimation('right');
    } else {
      enemy2_4.vel.x = 1.2;
      enemy2_4.changeAnimation('left');
    }
  }

  //fifth enemy vol 2
  if (enemy2_5.x <= 3700 && collided7th_vol2 == false) {
    enemy2_5.vel.x = 2;
    collided7th_vol2 = true;
    enemy2_5.changeAnimation('left');
  }

  if (enemy2_5.x >= S2platform1a.x) {
    enemy2_5.vel.x = -2;
    enemy2_5.changeAnimation('right');
  }

  if (enemy2_5.x <= S2barrel1.getSprite().x) {
    enemy2_5.vel.x = 2;
    enemy2_5.changeAnimation('left');
  }

  if (enemy2_5.overlaps(geralt)) {
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

    if (geralt.x > enemy2_5.x) {
      enemy2_5.vel.x = -2;
      enemy2_5.changeAnimation('right');

    } else {
      enemy2_5.vel.x = 2;
      enemy2_5.changeAnimation('left');
    }
  }

  //sixth enemy vol 2
  if (enemy2_6.y > minHeight) {
    enemy2_6.y = minHeight;
  }

  if (enemy2_6.x <= 3800 && collided6th_vol2 == false) {

    enemy2_6.vel.x = 2;
    collided6th_vol2 = true;
    enemy2_6.changeAnimation('left');
  }

  if (enemy2_6.collided(S2barrel2.getSprite())) {

    enemy2_6.vel.x = 2;
    enemy2_6.changeAnimation('left');
  }

  if (enemy2_6.x >= 4480) {
    enemy2_6.vel.x = -2;
    enemy2_6.changeAnimation('right');
  }

  if (enemy2_6.overlaps(geralt)) {
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

    if (geralt.x > enemy2_6.x) {
      enemy2_6.vel.x = -2;
      enemy2_6.changeAnimation('right');
    } else {
      enemy2_6.vel.x = 2;
      enemy2_6.changeAnimation('left');
    }
  }

  //seventh enemy vol 2
  if (enemy2_7.x <= 3700 && collided8th_vol2 == false) {
    enemy2_7.vel.x = -1.5;
    collided8th_vol2 = true;
    enemy2_7.changeAnimation('right');

  }

  if (enemy2_7.x >= S2platform2a.x) {
    enemy2_7.vel.x = -1.5;
    enemy2_7.changeAnimation('right');

  }

  if (enemy2_7.x <= S2floor1.x) {
    enemy2_7.vel.x = 1.5;
    enemy2_7.changeAnimation('left');
  }

  if (enemy2_7.overlaps(geralt)) {
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

    if (geralt.x > enemy2_7.x) {
      enemy2_7.vel.x = -1.5;
      enemy2_7.changeAnimation('right');

    } else {
      enemy2_7.vel.x = 1.5;
      enemy2_7.changeAnimation('left');
    }
  }

  //third enemy
  if (enemy3.y > minHeight) {
    enemy3.y = minHeight;
  }

  if (enemy3.x <= 595 && collided3rd == false) {
    enemy3.vel.x = 1.2;
    collided3rd = true;
    enemy3.changeAnimation('left');
  }

  if (enemy3.collided(crate2.getSprite())) {
    enemy3.vel.x = -1.2;
    enemy3.changeAnimation('right');
  }

  if (enemy3.collided(wagon.getSprite())) {
    enemy3.vel.x = 1.2;
    enemy3.changeAnimation('left');
  }

  if (enemy3.overlaps(geralt)) {
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
    if (geralt.x > enemy3.x) {
      enemy3.vel.x = -1.2;
      enemy3.changeAnimation('right');
    }
    else {
      enemy3.vel.x = 1.2;
      enemy3.changeAnimation('left');
    }
  }

  //fourth enemy
  if (enemy4.y > minHeight) {
    enemy4.y = minHeight;
  }

  if (enemy4.x <= 2740 && collided4th == false) {
    enemy4.vel.x = 1.6;
    collided4th = true;
    enemy4.changeAnimation('left');
  }

  if (enemy4.collided(S2welltop)) {
    enemy4.vel.x = -1.6;
    enemy4.changeAnimation('right');
  }

  if (enemy4.collided(S2crate3.getSprite())) {
    enemy4.vel.x = 1.6;
    enemy4.changeAnimation('left');
  }

  if (enemy4.overlaps(geralt)) {
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

    if (geralt.x > enemy4.x) {
      enemy4.vel.x = -1.6;
      enemy4.changeAnimation('right');
    } else {
      enemy4.vel.x = 1.6;
      enemy4.changeAnimation('left');
    }
  }

  //fifth enemy
  if (enemy5.y > minHeight) {
    enemy5.y = minHeight;
  }

  if (enemy5.x <= 3290 && collided5th == false) {
    enemy5.vel.x = 1.4;
    collided5th = true;
    enemy5.changeAnimation('left');
  }

  if (enemy5.collided(S2barrel1.getSprite())) {
    enemy5.vel.x = -1.4;
    enemy5.changeAnimation('right');
  }

  if (enemy5.collided(S2welltop)) {
    enemy5.vel.x = 1.4;
    enemy5.changeAnimation('left');
  }

  if (enemy5.overlaps(geralt)) {
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

    if (geralt.x > enemy5.x) {
      enemy5.vel.x = -1.4;
      enemy5.changeAnimation('right');
    }
    else {
      enemy5.vel.x = 1.4;
      enemy5.changeAnimation('left');
    }
  }

  if (slash_attack.overlaps(enemy1)) {
    slash_attack.remove();
    attackingB = false;
    enemy_hit.play();
    counter_attack[0]++;

    if (counter_attack[0] == 2) {
      enemy1.remove();
      goblin_death.play();
    }
  }

  if (slash_attack.overlaps(enemy2)) {
    slash_attack.remove();
    attackingB = false;
    enemy_hit.play();
    counter_attack[1]++;

    if (counter_attack[1] == 2) {
      enemy2.remove();
      goblin_death.play();
    }
  }

  if (slash_attack.overlaps(enemy2_1)) {
    slash_attack.remove();
    attackingB = false;
    enemy_hit.play();
    counter_attack[3]++;

    if (counter_attack[3] == 2) {
      enemy2_1.remove();
      bat_death.play();
    }
  }

  if (slash_attack.overlaps(enemy2_2)) {
    slash_attack.remove();
    attackingB = false;
    enemy_hit.play();
    counter_attack[4]++;

    if (counter_attack[4] == 2) {
      enemy2_2.remove();
      goblin_death.play();
    }
  }

  if (slash_attack.overlaps(enemy2_3)) {
    slash_attack.remove();
    attackingB = false;
    enemy_hit.play();
    counter_attack[5]++;

    if (counter_attack[5] == 2) {
      enemy2_3.remove();
      goblin_death.play();
    }
  }

  if (slash_attack.overlaps(enemy2_4)) {
    slash_attack.remove();
    attackingB = false;
    enemy_hit.play();
    counter_attack[6]++;

    if (counter_attack[6] == 2) {
      enemy2_4.remove();
      goblin_death.play();
    }
  }

  if (slash_attack.overlaps(enemy2_5)) {
    slash_attack.remove();
    attackingB = false;
    enemy_hit.play();
    counter_attack[7]++;

    if (counter_attack[7] == 2) {
      enemy2_5.remove();
      bat_death.play();
    }
  }

  if (slash_attack.overlaps(enemy2_6)) {
    slash_attack.remove();
    attackingB = false;
    enemy_hit.play();
    counter_attack[8]++;

    if (counter_attack[8] == 2) {
      enemy2_6.remove();
      goblin_death.play();
    }
  }

  if (slash_attack.overlaps(enemy2_7)) {
    slash_attack.remove();
    attackingB = false;
    enemy_hit.play();
    counter_attack[9]++;

    if (counter_attack[9] == 2) {
      enemy2_7.remove();
      bat_death.play();
    }
  }

  if (slash_attack.overlaps(enemy3)) {
    slash_attack.remove();
    attackingB = false;
    enemy_hit.play();
    counter_attack_skeleton[0]++;

    if (counter_attack_skeleton[0] == 4) {
      enemy3.remove();
      skeleton_death.play();
    }
  }

  if (slash_attack.overlaps(enemy4)) {
    slash_attack.remove();
    attackingB = false;
    enemy_hit.play();
    counter_attack[2]++;

    if (counter_attack[2] == 2) {
      enemy4.remove();
      goblin_death.play();
    }
  }

  if (slash_attack.overlaps(enemy5)) {
    slash_attack.remove();
    attackingB = false;
    enemy_hit.play();
    counter_attack_skeleton[1]++;

    if (counter_attack_skeleton[1] == 4) {
      enemy5.remove();
      skeleton_death.play();
    }
  }

  if (slash_attack2.overlaps(enemy1)) {
    slash_attack2.remove();
    attackingC = false;
    enemy_hit.play();
    counter_attack[0]++;

    if (counter_attack[0] == 2) {
      enemy1.remove();
      goblin_death.play();
    }
  }

  if (slash_attack2.overlaps(enemy2)) {
    slash_attack2.remove();
    attackingC = false;
    enemy_hit.play();
    counter_attack[1]++;

    if (counter_attack[1] == 2) {
      enemy2.remove();
      goblin_death.play();
    }
  }

  if (slash_attack2.overlaps(enemy2_1)) {
    slash_attack2.remove();
    attackingC = false;
    enemy_hit.play();
    counter_attack[3]++;

    if (counter_attack[3] == 2) {
      enemy2_1.remove();
      bat_death.play();
    }
  }

  if (slash_attack2.overlaps(enemy2_2)) {
    slash_attack2.remove();
    attackingC = false;
    enemy_hit.play();
    counter_attack[4]++;

    if (counter_attack[4] == 2) {
      enemy2_2.remove();
      goblin_death.play();
    }
  }

  if (slash_attack2.overlaps(enemy2_3)) {
    slash_attack2.remove();
    attackingC = false;
    enemy_hit.play();
    counter_attack[5]++;

    if (counter_attack[5] == 2) {
      enemy2_3.remove();
      goblin_death.play();
    }
  }

  if (slash_attack2.overlaps(enemy2_4)) {
    slash_attack2.remove();
    attackingC = false;
    enemy_hit.play();
    counter_attack[6]++;

    if (counter_attack[6] == 2) {
      enemy2_4.remove();
      goblin_death.play();
    }
  }

  if (slash_attack2.overlaps(enemy2_5)) {
    slash_attack2.remove();
    attackingC = false;
    enemy_hit.play();
    counter_attack[7]++;

    if (counter_attack[7] == 2) {
      enemy2_5.remove();
      goblin_death.play();
    }
  }

  if (slash_attack2.overlaps(enemy2_6)) {
    slash_attack2.remove();
    attackingC = false;
    enemy_hit.play();
    counter_attack[8]++;

    if (counter_attack[8] == 2) {
      enemy2_6.remove();
      goblin_death.play();
    }
  }

  if (slash_attack2.overlaps(enemy2_7)) {
    slash_attack2.remove();
    attackingC = false;
    enemy_hit.play();
    counter_attack[9]++;

    if (counter_attack[9] == 2) {
      enemy2_7.remove();
      goblin_death.play();
    }
  }

  if (slash_attack2.overlaps(enemy3)) {
    slash_attack2.remove();
    attackingC = false;
    enemy_hit.play();
    counter_attack_skeleton[0]++;

    if (counter_attack_skeleton[0] == 4) {
      enemy3.remove();
      skeleton_death.play();
    }
  }

  if (slash_attack2.overlaps(enemy4)) {
    slash_attack2.remove();
    attackingC = false;
    enemy_hit.play();
    counter_attack[2]++;

    if (counter_attack[2] == 2) {
      enemy4.remove();
      goblin_death.play();
    }
  }

  if (slash_attack2.overlaps(enemy5)) {
    slash_attack2.remove();
    attackingC = false;
    enemy_hit.play();
    counter_attack_skeleton[1]++;

    if (counter_attack_skeleton[1] == 4) {
      enemy5.remove();
      skeleton_death.play();
    }
  }

  if (slash_attack3.overlaps(enemy1)) {
    enemy1.remove();
    slash_attack3.remove();
    attackingV = false;
    goblin_death.play();
  }

  if (slash_attack3.overlaps(enemy2)) {
    enemy2.remove();
    slash_attack3.remove();
    attackingV = false;
    goblin_death.play();
  }

  if (slash_attack3.overlaps(enemy2_1)) {
    enemy2_1.remove();
    slash_attack3.remove();
    attackingV = false;
    bat_death.play();
  }

  if (slash_attack3.overlaps(enemy2_2)) {
    enemy2_2.remove();
    slash_attack3.remove();
    attackingV = false;
    goblin_death.play();
  }

  if (slash_attack3.overlaps(enemy2_3)) {
    enemy2_3.remove();
    slash_attack3.remove();
    attackingV = false;
    goblin_death.play();
  }

  if (slash_attack3.overlaps(enemy2_4)) {
    enemy2_4.remove();
    slash_attack3.remove();
    attackingV = false;
    goblin_death.play();
  }

  if (slash_attack3.overlaps(enemy2_5)) {
    enemy2_5.remove();
    slash_attack3.remove();
    attackingV = false;
    goblin_death.play();
  }

  if (slash_attack3.overlaps(enemy2_6)) {
    enemy2_6.remove();
    slash_attack3.remove();
    attackingV = false;
    goblin_death.play();
  }

  if (slash_attack3.overlaps(enemy2_7)) {
    enemy2_7.remove();
    slash_attack3.remove();
    attackingV = false;
    goblin_death.play();
  }

  if (slash_attack3.overlaps(enemy3)) {
    enemy3.remove();
    slash_attack3.remove();
    attackingV = false;
    skeleton_death.play();
  }

  if (slash_attack3.overlaps(enemy4)) {
    enemy4.remove();
    slash_attack3.remove();
    attackingV = false;
    goblin_death.play();
  }

  if (slash_attack3.overlaps(enemy5)) {
    enemy5.remove();
    slash_attack3.remove();
    attackingV = false;
    skeleton_death.play();
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

function removeCoins() {
  if (geralt.overlaps(coin1.getSprite())) {
    coin1.getSprite().remove();
    coin_sound.play();
  }

  if (geralt.overlaps(coin2.getSprite())) {
    coin2.getSprite().remove();
    coin_sound.play();
  }

  if (geralt.overlaps(coin3.getSprite())) {
    coin3.getSprite().remove();
    coin_sound.play();
  }

  if (geralt.overlaps(coin4.getSprite())) {
    coin4.getSprite().remove();
    coin_sound.play();
  }

  if (geralt.overlaps(coin5.getSprite())) {
    coin5.getSprite().remove();
    coin_sound.play();
  }

  if (geralt.overlaps(coin6.getSprite())) {
    coin6.getSprite().remove();
    coin_sound.play();
  }

  if (geralt.overlaps(coin7.getSprite())) {
    coin7.getSprite().remove();
    coin_sound.play();
  }

  if (geralt.overlaps(coin8.getSprite())) {
    coin8.getSprite().remove();
    coin_sound.play();
  }

  if (geralt.overlaps(coin2_1.getSprite())) {
    coin2_1.getSprite().remove();
    coin_sound.play();
  }

  if (geralt.overlaps(coin2_2.getSprite())) {
    coin2_2.getSprite().remove();
    coin_sound.play();
  }

  if (geralt.overlaps(coin2_3.getSprite())) {
    coin2_3.getSprite().remove();
    coin_sound.play();
  }

  if (geralt.overlaps(coin2_4.getSprite())) {
    coin2_4.getSprite().remove();
    coin_sound.play();
  }

  if (geralt.overlaps(coin2_5.getSprite())) {
    coin2_5.getSprite().remove();
    coin_sound.play();
  }


  if (slash_attack.overlaps(coin1.getSprite())) {
    coin1.getSprite().remove();
    coin_sound.play();
  }

  if (slash_attack.overlaps(coin2.getSprite())) {
    coin2.getSprite().remove();
    coin_sound.play();
  }

  if (slash_attack.overlaps(coin3.getSprite())) {
    coin3.getSprite().remove();
    coin_sound.play();
  }

  if (slash_attack.overlaps(coin4.getSprite())) {
    coin4.getSprite().remove();
    coin_sound.play();
  }

  if (slash_attack.overlaps(coin5.getSprite())) {
    coin5.getSprite().remove();
    coin_sound.play();
  }

  if (slash_attack.overlaps(coin6.getSprite())) {
    coin6.getSprite().remove();
    coin_sound.play();
  }

  if (slash_attack.overlaps(coin7.getSprite())) {
    coin7.getSprite().remove();
    coin_sound.play();
  }

  if (slash_attack.overlaps(coin8.getSprite())) {
    coin8.getSprite().remove();
    coin_sound.play();
  }

  if (slash_attack.overlaps(coin2_1.getSprite())) {
    coin2_1.getSprite().remove();
    coin_sound.play();
  }

  if (slash_attack.overlaps(coin2_2.getSprite())) {
    coin2_2.getSprite().remove();
    coin_sound.play();
  }

  if (slash_attack.overlaps(coin2_3.getSprite())) {
    coin2_3.getSprite().remove();
    coin_sound.play();
  }

  if (slash_attack.overlaps(coin2_4.getSprite())) {
    coin2_4.getSprite().remove();
    coin_sound.play();
  }

  if (slash_attack.overlaps(coin2_5.getSprite())) {
    coin2_5.getSprite().remove();
    coin_sound.play();
  }


  if (slash_attack2.overlaps(coin1.getSprite())) {
    coin1.getSprite().remove();
    coin_sound.play();
  }

  if (slash_attack2.overlaps(coin2.getSprite())) {
    coin2.getSprite().remove();
    coin_sound.play();
  }

  if (slash_attack2.overlaps(coin3.getSprite())) {
    coin3.getSprite().remove();
    coin_sound.play();
  }

  if (slash_attack2.overlaps(coin4.getSprite())) {
    coin4.getSprite().remove();
    coin_sound.play();
  }

  if (slash_attack2.overlaps(coin5.getSprite())) {
    coin5.getSprite().remove();
    coin_sound.play();
  }

  if (slash_attack2.overlaps(coin6.getSprite())) {
    coin6.getSprite().remove();
    coin_sound.play();
  }

  if (slash_attack2.overlaps(coin7.getSprite())) {
    coin7.getSprite().remove();
    coin_sound.play();
  }

  if (slash_attack2.overlaps(coin8.getSprite())) {
    coin8.getSprite().remove();
    coin_sound.play();
  }

  if (slash_attack2.overlaps(coin2_1.getSprite())) {
    coin2_1.getSprite().remove();
    coin_sound.play();
  }

  if (slash_attack2.overlaps(coin2_2.getSprite())) {
    coin2_2.getSprite().remove();
    coin_sound.play();
  }

  if (slash_attack2.overlaps(coin2_3.getSprite())) {
    coin2_3.getSprite().remove();
    coin_sound.play();
  }

  if (slash_attack2.overlaps(coin2_4.getSprite())) {
    coin2_4.getSprite().remove();
    coin_sound.play();
  }

  if (slash_attack2.overlaps(coin2_5.getSprite())) {
    coin2_5.getSprite().remove();
    coin_sound.play();
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

  if (slash_attack.y >= minHeight) {   //COLLIDING ANTI GIA OVERLAPS AMA THELOUME NA KANEI KAI KNOCKBACK TO enemy1
    slash_attack.y = minHeight;
    slash_attack.remove();
    attackingB = false;
  }

  if (slash_attack2.y >= minHeight) {   //COLLIDING ANTI GIA OVERLAPS AMA THELOUME NA KANEI KAI KNOCKBACK TO enemy1
    slash_attack2.remove();
    attackingC = false;
  }

  if (kb.released('v')) {
    slash_attack3.remove();
    attackingV = false;
    slash_main_sound.stop();
  }
}
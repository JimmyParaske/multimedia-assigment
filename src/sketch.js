// Game control
var stage = 1;
let geraltAnimationIdle;
let hop=-8;
let fallingSpeed = 0.2;
let minHeight = 465;
// Classes
var land;
var pl;
var geralt;

var enemy1;
var enemy2;
var enemy3;
var enemy4;
var enemy5;
var enemy2_1;
var enemy2_2;
var enemy2_3;
var enemy2_4;
var enemy2_5;
var enemy2_6;
var enemy2_7;
var enemy2_8;
var enemy2_9;
var enemy2_10;

var coin1;
var coin2;
var coin3;
var coin4;
var coin5;
var coin6;
var coin7;
var coin8;
var coin2_1;
var coin2_2;
var coin2_3;
var coin2_4;
var coin2_5;


var slash_attack;
var slash_attack2;
var slash_attack3;



// Stage 1
var S1barrel1;
var S1barrel2;
var S1crate;
var S1crate1;
var S1crate2;
var S1crate3;
var S1wagon;
var S1sign;
var S1crate4;

// Stage 2
var crate;
var barrel1;
var barrel2;
var sign;
var wagon;
var lamp;
var crate1;
var crate2;
var crate3;
var floor1;
var floor2;
var well;
var platform1a;
var platform1b;
var platform2a;
var platform2b;


//animation variables

var coin_sheet;
var coin_animation;
var walk1_animation;
var walk1_animation_reverse;
var walk2_animation;
var walk2_animation_reverse;




function preload(){

  //player assets
  geraltAnimationIdleLeft = loadAnimation('./assets/images/Knight/noBKG_KnightIdle_strip4.png', { size: [128, 128], frames: 15 });
  geraltAnimationIdleRight = loadAnimation('./assets/images/Knight/noBKG_KnightIdle_strip4right.png', { size: [128, 128], frames: 15 });
  geraltAnimationRunLeft = loadAnimation('./assets/images/Knight/noBKG_KnightRun_strip2.png', { size: [192, 128], frames: 8 });
  geraltAnimationRunRight = loadAnimation('./assets/images/Knight/noBKG_KnightRun_strip2right.png', { size: [192, 128], frames: 8 });
  geraltAnimationAttackLeft = loadAnimation('./assets/images/Knight/noBKG_KnightAttack_strip2.png', { size: [288, 128], frames: 22 });
  geraltAnimationAttackRight = loadAnimation('./assets/images/Knight/noBKG_KnightAttack_strip2right.png', { size: [288, 128], frames: 22 });
  geraltAnimationDeath = loadAnimation('./assets/images/Knight/noBKG_KnightDeath_strip.png', { size: [192, 128], frames: 15 });
  geraltAnimationJump = loadAnimation('./assets/images/Knight/noBKG_KnightJumpAndFall_strip.png', { size: [309, 128], frames: 14 });

  //attack and effects assets
  slash_main = loadAnimation('./assets/images/Sword Slashes/slash.png', { size: [165, 120], frames: 20 });
  slash_thinLeft = loadAnimation('./assets/images/Sword Slashes/slash_white_thin.png', { size: [68.75, 50], frames: 6 });
  slash_thinRight = loadAnimation('./assets/images/Sword Slashes/slash_white_thinright.png', { size: [68.75, 50], frames: 6 });
  slash_Right = loadAnimation('./assets/images/Sword Slashes/slash_red_right.png', { size: [89.5, 65], frames: 6 });
  slash_Left = loadAnimation('./assets/images/Sword Slashes/slash_red_left.png', { size: [89.5, 65], frames: 6 });
 
  //life of geralt asset 
  lives = loadAnimation('./assets/images/hearts.png', { size: [40, 40], frames: 3 });

  //obstacle assets
  crateImg = loadImage('./assets/images/crate_cropped.png');
  cratestackedImg = loadImage('./assets/images/crate_stacked.png');
  barrelImg = loadImage('./assets/images/barrel.png');
  signImg = loadImage('./assets/images/sign.png');
  wagonImg = loadImage('./assets/images/wagon.png');
  floorImg = loadImage('./assets/images/floor.png');
  floorshortImg = loadImage('./assets/images/floor_short.png');
  wellImg = loadImage('./assets/images/well.png');
  welltopImg = loadImage('./assets/images/welltop.png');
  platformImg = loadImage('./assets/images/platform.png');
  platform1Img = loadImage('./assets/images/platform1.png');
  platform2Img = loadImage('./assets/images/platform2.png');

  //enemies (3 types)
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

  //coins
  coins = loadAnimation('./assets/images/coin3_16x16.png', { size: [16, 22], frames: 14 });


  //sound effects
  soundFormats('mp3');
  geralt_hit = loadSound('./assets/sounds/geralt_hit');
  geralt_death =  loadSound('./assets/sounds/geralt_death');
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

function setup() {
  // Setup
  createCanvas(900, 576);
  
  
  rectMode(CENTER);
  textAlign(CENTER);
  imageMode(CENTER);

  // Background
  land = new Landscape();
  //background music
  backgroundMusic();
  
 

  //world gravity
  world.gravity.y=10;
  
 
  


  // Player
  geralt = createSprite(-3200,480,67,80);
  //-3200
  //για να μην κανει rotate ο geralt 
  geralt.rotationLock = true;
 
  
  
  geralt.addAnimation('left', geraltAnimationRunLeft);
  geralt.addAnimation('right', geraltAnimationRunRight);
  geralt.addAnimation('attack_left', geraltAnimationAttackLeft);
  geralt.addAnimation('attack_right', geraltAnimationAttackRight);
  geralt.addAnimation('jump', geraltAnimationJump);
  geralt.addAnimation('death', geraltAnimationDeath);
  geralt.addAnimation('idle_right',geraltAnimationIdleRight);
  geralt.addAnimation('idle_left',geraltAnimationIdleLeft);
  geralt.layer = 2;
  

  //geralt healthbar
  kardia = createSprite(-3500,50,40,40);
  kardia.collider = 'static';
  kardia.addAnimation(lives);
  kardia.animation.stop();

  kardia2 = createSprite(-3460,50,40,40);
  kardia2.collider = 'static';
  kardia2.addAnimation(lives.clone());
  kardia2.animation.stop();
  
  kardia3 = createSprite(-3420,50,40,40);
  kardia3.collider = 'static';
  kardia3.addAnimation(lives.clone());
  kardia3.animation.stop();

  //attack slash sprite (move horizontaly)
 
  slash_attack = new Sprite();
  slash_attack.addAnimation('white_slash_left', slash_thinLeft);
  slash_attack.life= 0;

  slash_attack2 = new Sprite();
  slash_attack2.addAnimation('white_slash_right', slash_thinRight);
  slash_attack2.life = 0;

  slash_attack3 = new Sprite();
  slash_attack3.addAnimation('red_yellow_slash', slash_main);
  slash_attack3.life = 0;
  


  //slash_attack2 = new Sprite();  

 
  //slash animations (testing)
  /*enemy1Slash = createSprite(-3200, 480, 60, 50);
  enemy1Slash.collider = 'static'
  enemy1Slash.addAnimation('slash_left', slash_thinLeft);
  enemy1Slash.addAnimation('slash_right', slash_thinRight);


  enemy2Slash = createSprite(-3200, 400, 60, 50);
  enemy2Slash.collider = 'static'
  enemy2Slash.addAnimation('slash_left', slash_Left);
  enemy2Slash.addAnimation('slash_right', slash_Right);
  */

   //enemies (2 types)
  enemy1 = createSprite(-2400,465,55,100);
  enemy1.rotationLock = true;
 
  enemy1.addAnimation('left',enemyAnimationLeft);
  enemy1.addAnimation('right',enemyAnimationRight);
  enemy1.layer = 2;

  enemy2 = createSprite(-1400,465,55,100);
  enemy2.rotationLock = true;
 
  enemy2.addAnimation('left',enemyAnimationLeft.clone());
  enemy2.addAnimation('right',enemyAnimationRight.clone());
  enemy2.layer = 2;

  enemy2_1 = createSprite(-1170,150,55,100);
  enemy2_1.rotationLock = true;
  enemy2_1.collider = 'kinematic';

  enemy2_1.addAnimation('left',enemy3AnimationLeft);
  enemy2_1.addAnimation('right',enemy3AnimationRight);
  enemy2_1.layer = 2;

  enemy2_2 = createSprite(-730,465,55,100);
  enemy2_2.rotationLock = true;
 
  enemy2_2.addAnimation('left',enemyAnimationLeft.clone());
  enemy2_2.addAnimation('right',enemyAnimationRight.clone());
  enemy2_2.layer = 2;


  enemy2_3 = createSprite(1100,465,55,100);
  enemy2_3.rotationLock = true;
 
  enemy2_3.addAnimation('left',enemyAnimationLeft.clone());
  enemy2_3.addAnimation('right',enemyAnimationRight.clone());
  enemy2_3.layer = 2;


  enemy2_4 = createSprite(1400,465,55,100);
  enemy2_4.rotationLock = true;
 
  enemy2_4.addAnimation('left',enemyAnimationLeft.clone());
  enemy2_4.addAnimation('right',enemyAnimationRight.clone());
  enemy2_4.layer = 2;



  enemy2_5 = createSprite(3650,250,55,100);
  enemy2_5.rotationLock = true;
 
  enemy2_5.addAnimation('left',enemy3AnimationLeft.clone());
  enemy2_5.addAnimation('right',enemy3AnimationRight.clone());
  enemy2_5.layer = 2;
  enemy2_5.collider = 'kinematic';

  enemy2_6 = createSprite(3650,465,55,100);
  enemy2_6.rotationLock = true;
 
  enemy2_6.addAnimation('left',enemyAnimationLeft.clone());
  enemy2_6.addAnimation('right',enemyAnimationRight.clone());
  enemy2_6.layer = 2;



  enemy2_7 = createSprite(4295,170,55,100);
  enemy2_7.rotationLock = true;
 
  enemy2_7.addAnimation('left',enemy3AnimationLeft.clone());
  enemy2_7.addAnimation('right',enemy3AnimationRight.clone());
  enemy2_7.layer = 2;
  enemy2_7.collider = 'kinematic';


  enemy3 = createSprite(300,445,55,100);
  enemy3.rotationLock = true;
 
  enemy3.addAnimation('left',enemy2AnimationLeft);
  enemy3.addAnimation('right',enemy2AnimationRight);
  enemy3.layer = 2;

  enemy4 = createSprite(2300,465,55,100);
  enemy4.rotationLock = true;

  enemy4.addAnimation('left',enemyAnimationLeft.clone());
  enemy4.addAnimation('right',enemyAnimationRight.clone());
  enemy4.layer = 2;

  enemy5 = createSprite(2800,465,55,100);
  enemy5.rotationLock = true;
  
  enemy5.addAnimation('left',enemy2AnimationLeft.clone());
  enemy5.addAnimation('right',enemy2AnimationRight.clone());
  enemy5.layer = 2;



  //coins picked up by geralt
  coin1 = createSprite(-2750, 200, 10, 10);
  coin1.collider = 'static';
  coin1.addAnimation(coins);


  coin2 = createSprite(-1950, 150, 10, 10);
  coin2.collider = 'static';
  coin2.addAnimation(coins.clone());
  

  coin3 = createSprite(-1000, 50, 10, 10);
  coin3.collider = 'static';
  coin3.addAnimation(coins.clone());
 

  coin4 = createSprite(300, 350, 10, 10);
  coin4.collider = 'static';
  coin4.addAnimation(coins.clone());
  

  coin5 = createSprite(1060, 80, 10, 10);
  coin5.collider = 'static';
  coin5.addAnimation(coins.clone());
 

  coin6 = createSprite(1700, 350, 10, 10);
  coin6.collider = 'static';
  coin6.addAnimation(coins.clone());
 

  coin7 = createSprite(2752, 180, 10, 10);
  coin7.collider = 'static';
  coin7.addAnimation(coins.clone());
 

  coin8 = createSprite(3850, 100, 10, 10);
  coin8.collider = 'static';
  coin8.addAnimation(coins.clone());
 
  //more coins vol 2

  coin2_1 = createSprite(-1175, 350, 10, 10);
  coin2_1.collider = 'static';
  coin2_1.addAnimation(coins.clone());

  coin2_2 = createSprite(-130, 465, 10, 10);
  coin2_2.collider = 'static';
  coin2_2.addAnimation(coins.clone());

  coin2_3 = createSprite(970, 365, 10, 10);
  coin2_3.collider = 'static';
  coin2_3.addAnimation(coins.clone());

  coin2_4 = createSprite(2250, 365, 10, 10);
  coin2_4.collider = 'static';
  coin2_4.addAnimation(coins.clone());

  coin2_5 = createSprite(3655, 380, 10, 10);
  coin2_5.collider = 'static';
  coin2_5.addAnimation(coins.clone());

 

 // !!!!!!!!!!!!!!!!!!!!!! STAGE 1 !!!!!!!!!!!!!!!!!!!! 


  S1barrel1 = createSprite(-3550, 475, 45, 55);
  S1barrel1.collider='static';
  barrelImg.resize(55,60);
  S1barrel1.addImage(barrelImg);
 

  S1barrel2 = createSprite(-3500, 475, 45, 55);
  S1barrel2.collider = 'static';
  S1barrel2.addImage(barrelImg);


  S1crate =  createSprite(-3100,470, 78, 70);
  S1crate.collider = 'static';
  crateImg.resize(83,74);
  S1crate.addImage(crateImg);


  S1crate1 = createSprite(-2750, 404, 70, 65);
  S1crate1.collider = 'static';
  S1crate1.addImage(crateImg);
  

  S1crate2 = createSprite(-2785, 470, 70, 65);
  S1crate2.collider = 'static';
  S1crate2.addImage(crateImg);
 

  S1crate3 = createSprite(-2715, 470, 65, 65);
  S1crate3.collider = 'static';
  cratestackedImg.resize(70,70);
  S1crate3.addImage(cratestackedImg);


  S1wagon = createSprite(-2100,430);
  S1wagon.collider = 'static';
  S1wagon.diameter = 155;
  wagonImg.resize(190,170);
  S1wagon.addImage(wagonImg);



  S1sign = createSprite(-1800, 340, 60, 85);
  S1sign.collider = 'static';
  signImg.resize(70,100);
  S1sign.addImage(signImg);
  
  S1crate4 =  createSprite(-1660,470, 78, 70);
  S1crate4.collider = 'static';
  crateImg.resize(83,74);
  S1crate4.addImage(crateImg);




  S1platform1a = createSprite(-1450, 320, 185, 20);
  S1platform1a.collider = 'static';
  S1platform1a.visible = false;
 
  
  S1platform1b = createSprite(-1450, 405, 185, 20);
  S1platform1b.collider= 'none';
  platform1Img.resize(195,195);
  S1platform1b.addImage(platform1Img);


  S1platform2a = createSprite(-1190, 285, 185, 20);
  S1platform2a.collider = 'static';
 
  S1platform2b = createSprite(-1190, 383, 185, 20);
  S1platform2b.collider = 'none';
  platform2Img.resize(195,235);
  S1platform2b.addImage(platform2Img);


  S1barrel1.layer = 1;
  S1barrel2.layer = 1;
  S1crate.layer = 1;
  S1crate1.layer = 1;
  S1crate2.layer = 1;
  S1crate3.layer = 1;
  S1wagon.layer = 1;
  S1sign.layer = 1;
  S1crate4.layer = 1;
  S1platform1a.layer = 1;
  S1platform1b.layer = 1;
  S1platform2a.layer = 1;
  S1platform2b.layer = 1;
  


  // !!!!!!!!!!!!!!!!!!!!!! END STAGE 1 !!!!!!!!!!!!!!!!!!!

  // !!!!!!!!!!!!!!! STAGE 2 !!!!!!!!!!!!!!!!!!!!!
 
  crate =  createSprite(-840,470, 78, 70);
  crate.collider = 'static';
  crateImg.resize(83,74);
  crate.addImage(crateImg);
 

 
  barrel1 = createSprite(-435, 475, 45, 55);
  barrel1.collider='static';
  barrelImg.resize(55,60);
  barrel1.addImage(barrelImg);
  

  barrel2 = createSprite(-370, 475, 45, 55);
  barrel2.collider = 'static';
  barrel2.addImage(barrelImg);
  

  sign = createSprite(-189, 405, 60, 85);
  sign.collider = 'static';
  signImg.resize(70,100);
  sign.addImage(signImg);
  


  

  wagon = createSprite(0,430);
  wagon.collider = 'static';
  wagon.diameter = 155;
  wagonImg.resize(190,170);
  wagon.addImage(wagonImg);
  


  crate1 = createSprite(627, 404, 70, 65);
  crate1.collider = 'static';
  crate1.addImage(crateImg);
  

  crate2 = createSprite(595, 470, 70, 65);
  crate2.collider = 'static';
  crate2.addImage(crateImg);
 

  crate3 = createSprite(665, 470, 65, 65);
  crate3.collider = 'static';
  cratestackedImg.resize(70,70);
  crate3.addImage(cratestackedImg);
  

  floor1 = createSprite(842, 390, 145, 40);
  floor1.collider = 'static';
  floorImg.resize(160,39);
  floor1.addImage(floorImg);
  

  floor2 = createSprite(957, 325, 120, 40);
  floor2.collider = 'static';
  floorshortImg.resize(127,39);
  floor2.addImage(floorshortImg);
  

  
  well = createSprite(1205, 460, 110, 15);
  well.collider = 'none';
  wellImg.resize(100,100);
  well.addImage(wellImg);
  welltop = createSprite(1201, 415, 95, 15);
  welltop.collider ='static';
  welltopImg.resize(91,20);
  welltop.addImage(welltopImg);

  

  platform1a = createSprite(1435, 320, 185, 20);
  platform1a.collider = 'static';
  platform1a.visible = false;
 
  
  platform1b = createSprite(1435, 405, 185, 20);
  platform1b.collider= 'none';
  platform1Img.resize(195,195);
  platform1b.addImage(platform1Img);


  platform2a = createSprite(1695, 285, 185, 20);
  platform2a.collider = 'static';
 
  platform2b = createSprite(1695, 383, 185, 20);
  platform2b.collider = 'none';
  platform2Img.resize(195,235);
  platform2b.addImage(platform2Img);

  crate.layer = 1;
  barrel1.layer = 1;
  barrel2.layer = 1;
  sign.layer = 1;
  wagon.layer = 1;
  crate1.layer = 1;
  crate2.layer = 1;
  crate3.layer = 1;
  floor1.layer = 1;
  floor2.layer = 1;
  well.layer = 1;
  welltop.layer = 1;
  platform1a.layer = 1;
  platform1b.layer = 1;
  platform2a.layer = 1;
  platform2b.layer = 1;
  
// !!!!!!!!!!!!!!!!!! END STAGE 2 !!!!!!!!!!!!!!!!!!!!!!
 

//!!!!!!!!!!!!!!! STAGE 3 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


  S2crate1 = createSprite(1910, 404, 70, 65);
  S2crate1.collider = 'static';
  S2crate1.addImage(crateImg);
  

  S2crate2 = createSprite(1880, 470, 70, 65);
  S2crate2.collider = 'static';
  S2crate2.addImage(crateImg);
 

  S2crate3 = createSprite(1945, 470, 65, 65);
  S2crate3.collider = 'static';
  cratestackedImg.resize(70,70);
  S2crate3.addImage(cratestackedImg);



  S2well = createSprite(2750, 460, 110, 15);
  S2well.collider = 'none';
  wellImg.resize(100,100);
  S2well.addImage(wellImg);
  S2welltop = createSprite(2750, 415, 95, 15);
  S2welltop.collider ='static';
  welltopImg.resize(91,20);
  
  S2welltop.visible = false;


   
  S2barrel1 = createSprite(3300, 475, 45, 55);
  S2barrel1.collider='static';
  barrelImg.resize(55,60);
  S2barrel1.addImage(barrelImg);
  

  S2barrel2 = createSprite(3360, 475, 45, 55);
  S2barrel2.collider = 'static';
  S2barrel2.addImage(barrelImg);


  S2floor1 = createSprite(3655, 345, 145, 40);
  S2floor1.collider = 'static';
  floorImg.resize(160,39);
  S2floor1.addImage(floorImg);



  S2platform1a = createSprite(4030, 320, 185, 20);
  S2platform1a.collider = 'static';
  S2platform1a.visible = false;
 
  
  S2platform1b = createSprite(4030, 405, 185, 20);
  S2platform1b.collider= 'none';
  platform1Img.resize(195,195);
  S2platform1b.addImage(platform1Img);


  S2platform2a = createSprite(4295, 285, 185, 20);
  S2platform2a.collider = 'static';
 
  S2platform2b = createSprite(4295, 383, 185, 20);
  S2platform2b.collider = 'none';
  platform2Img.resize(195,235);
  S2platform2b.addImage(platform2Img);


  S2crate1.layer = 1;
  S2crate2.layer = 1;
  S2crate3.layer = 1;
  S2well.layer = 1;
  S2welltop.layer = 1;
  S2barrel1.layer = 1;
  S2barrel2.layer = 1;
  S2floor1.layer = 1;
  S2platform1a.layer = 1;
  S2platform1b.layer = 1;
  S2platform2a.layer = 1;
  S2platform2b.layer = 1;


  obstacles =new Group();
  obstacles.add(S1barrel1);
  obstacles.add(S1barrel2);
  obstacles.add(S1crate);
  obstacles.add(S1crate1);
  obstacles.add(S1crate2);
  obstacles.add(S1crate3);
  obstacles.add(S1crate4);
  obstacles.add(S1sign);
  obstacles.add(S1sign);
  obstacles.add(S1wagon);
  obstacles.add(S1platform1a);
  obstacles.add(S1platform2a);
  obstacles.add(S1crate);
  obstacles.add(crate);
  obstacles.add(barrel1);
  obstacles.add(barrel2);
  obstacles.add(sign);
  obstacles.add(wagon);
  obstacles.add(crate1);
  obstacles.add(crate2);
  obstacles.add(crate3);
  obstacles.add(floor1);
  obstacles.add(floor2);
  obstacles.add(welltop);
  obstacles.add(platform1a);
  obstacles.add(platform2a);
  obstacles.add(S2crate1);
  obstacles.add(S2crate2);
  obstacles.add(S2crate3);
  obstacles.add(S2welltop); 
  obstacles.add(S2barrel1);
  obstacles.add(S2barrel2);
  obstacles.add(S2floor1); 
  obstacles.add(S2platform1a);
  obstacles.add(S2platform2a);
 
  


// !!!!!!!!!!!!!!!!!!!!!!!!! END STAGE 3 !!!!!!!!!!!!!!!!!!!


}

function draw() {
  
  clear();
  //call functions

  //camera
  camera.on();
  


  if( geralt.x <= -3200){

    camera.x= -3150;
  }
  if(geralt.x >= 4000){

    camera.x= 4050;
  }
  keyPresses();
  attackStop();
  enemyMovementAndAttackCollision();
 
  removeCoins();
  spawnAttack();
  slashCollisionObjects();
  deathScreen();
  
  //BOUNDARIES FOR PLAYER
  if(geralt.x <= -3550){
    geralt.x=-3550;
  }
  if(geralt.x >=4450){
    geralt.x = 4450;
  }

 
  

  
  jump(geralt);
  
  
	//camera.y = geralt.y;
  if(geralt.x >= -3200 && geralt.x <= 4000){
    camera.x=geralt.x+50;
    kardia.x =geralt.x - 320;
    kardia2.x =geralt.x - 284;
    kardia3.x =geralt.x - 248;
  }

  
  // Background
  land.setStage(stage);
  land.display();

  //game(stage);
  camera.off();
  
}

function game(stage) {
  //pl.display();

  if (stage == 1) {
    // Draw classes
    crate1.display();
    barrel1.display();
    barrel2.display();
    sign.display();

   

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
function keyPresses() {

//geralt movement

  if(keyIsDown(LEFT_ARROW)){

    geralt.vel.x = -5;
    geralt.changeAnimation('right');

   
  }
  else if(keyIsDown(RIGHT_ARROW)){
    geralt.vel.x = +5;
    geralt.changeAnimation('left');  
    
  }
  else if(kb.released(LEFT_ARROW)){
    geralt.changeAnimation('idle_right');

  }
  else if(kb.released(RIGHT_ARROW)){

    geralt.changeAnimation('idle_left');
  }
  else{
    geralt.vel.x = 0;
   
  }

  

}


function attackStop(){

  if(kb.presses('b') || kb.presses('v')){              

    geralt.vel.x=0;
    geralt.changeAnimation('attack_left');


  }
  else if(kb.released('b') || kb.released('v')){

    geralt.changeAnimation('idle_left');
    
  }
  else if(kb.presses('c')){               

    geralt.vel.x=0;
    geralt.changeAnimation('attack_right');

  }
  else if(kb.released('c')){

    geralt.changeAnimation('idle_right');
    
  }
  


}





var jumped = false;

//geralt jump

function jump(sprite){

    
    sprite.vel.y += fallingSpeed;
    sprite.y += sprite.vel.y;

    if(sprite.y > minHeight){
      sprite.vel.y=0;
      sprite.y = minHeight;
     
      if(keyIsDown(UP_ARROW)){

        sprite.vel.y= hop;
       
        
      }

    }
  

  

  if(sprite.colliding(crate)){
    sprite.vel.y=0;
    
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  } 

  if(sprite.colliding(barrel1)){
    sprite.vel.y=0;
    
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  } 
 
  if(sprite.colliding(barrel2)){
    sprite.vel.y=0;
    
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  } 

  if(sprite.colliding(sign)){
    sprite.vel.y=0;
    
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  } 


  if(sprite.colliding(wagon)){
    sprite.vel.y=0;
   
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  }


  if(sprite.colliding(crate1)){
    sprite.vel.y=0;
   
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  }

  if(sprite.colliding(crate2)){
    sprite.vel.y=0;
    
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  }

  if(sprite.colliding(crate3)){
    sprite.vel.y=0;
   
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  }


  if(sprite.colliding(floor1)){
    sprite.vel.y=0;
   
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  }


  if(sprite.y >= floor1.y && sprite.colliding(floor1)){
    sprite.vel.y=0;
  }

  if(sprite.colliding(floor2)){
    sprite.vel.y=0;
   
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  }


  if(sprite.y >= floor2.y && sprite.colliding(floor2)){
    sprite.vel.y=0;
  }

  if(sprite.colliding(welltop)){
    sprite.vel.y=0;
   
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  }


  if(sprite.y >= welltop.y && sprite.colliding(welltop)){
    sprite.vel.y=0;
  }

  if(sprite.colliding(platform1a)){
    sprite.vel.y=0;
    
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  }


  if(sprite.y >= platform1a.y && sprite.colliding(platform1a)){
    sprite.vel.y=0;
  }

  if(sprite.colliding(platform2a)){
    sprite.vel.y=0;
    
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  }


  if(sprite.y >= platform2a.y && sprite.colliding(platform2a)){
    sprite.vel.y=0;
  }

  if(sprite.colliding(S1barrel1)){
    sprite.vel.y=0;
   
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  }



  if(sprite.colliding(S1barrel2)){
    sprite.vel.y=0;
    
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  }



  if(sprite.colliding(S1crate)){
    sprite.vel.y=0;
    
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  }



  if(sprite.colliding(S1crate1)){
    sprite.vel.y=0;
   
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  }



  if(sprite.colliding(S1crate2)){
    sprite.vel.y=0;
   
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  }



  if(sprite.colliding(S1crate3)){
    sprite.vel.y=0;
   
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  }




  if(sprite.colliding(S1wagon)){
    sprite.vel.y=0;
    
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  }


  if(sprite.colliding(S1sign)){
    sprite.vel.y=0;
   
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  }

  if(sprite.y >= S1sign.y && sprite.colliding(S1sign)){
    sprite.vel.y=0;
  }


  if(sprite.colliding(S1crate4)){
    sprite.vel.y=0;
    
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  }

  if(sprite.colliding(S1platform1a)){
    sprite.vel.y=0;
    
  

    if(keyIsDown(UP_ARROW) ){

      sprite.vel.y = hop;
      
    }

  
    
  }


  if(sprite.y >= S1platform1a.y && sprite.colliding(S1platform1a)){
    sprite.vel.y=0;
  }

  if(sprite.colliding(S1platform2a)){
    sprite.vel.y=0;
   
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  }

  if(sprite.y >= S1platform2a.y && sprite.colliding(S1platform2a)){
    sprite.vel.y=0;
  }

  if(sprite.colliding(S2crate1)){
    sprite.vel.y=0;
    
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  }


  if(sprite.colliding(S2crate2)){
    sprite.vel.y=0;
    
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  }



  if(sprite.colliding(S2crate3)){
    sprite.vel.y=0;
    
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  }


  if(sprite.colliding(S2welltop)){
    sprite.vel.y=0;
    
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  }

  if(sprite.y >= S2welltop.y && sprite.colliding(S2welltop)){
    sprite.vel.y=0;
  }

  if(sprite.colliding(S2barrel1)){
    sprite.vel.y=0;
    
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  }



  if(sprite.colliding(S2barrel2)){
    sprite.vel.y=0;
    
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  }



  if(sprite.colliding(S2floor1)){
    sprite.vel.y=0;
   
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  }


  if(sprite.y >= S2floor1.y && sprite.colliding(S2floor1)){
    sprite.vel.y=0;
  }


  if(sprite.colliding(S2platform1a)){
    sprite.vel.y=0;
    
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  }


  if(sprite.y >= S2platform1a.y && sprite.colliding(S2platform1a)){
    sprite.vel.y=0;
  }
 
  if(sprite.colliding(S2platform2a)){
    sprite.vel.y=0;
   
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  }

  if(sprite.y >= S2platform2a.y && sprite.colliding(S2platform2a)){
    sprite.vel.y=0;
  }

}




function slashCollisionObjects(){


  if(slash_attack.collided(obstacles)){
    slash_attack.remove();
    attackingB = false;
  }
  if(slash_attack2.collided(obstacles)){

    slash_attack2.remove();
    attackingC = false;
  }
  if(slash_attack3.collided(obstacles)){

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


const counter_attack = [0,0,0,0,0,0,0,0,0,0];
const counter_attack_skeleton = [0,0];
var life_counter=0;


function enemyMovementAndAttackCollision(){

  

  //first enemy
  if(enemy1.y > minHeight){

    enemy1.y = minHeight;
  }

  if(enemy1.x <= -2230 && collided==false){

    enemy1.vel.x = 1;
    collided = true;
    enemy1.changeAnimation('left');
  }


  if(enemy1.collided(S1wagon)){

    enemy1.vel.x =-1;
    enemy1.changeAnimation('right');
  }

  if(enemy1.collided(S1crate3)){

    enemy1.vel.x = 1;
    enemy1.changeAnimation('left');
  }

  if(enemy1.overlaps(geralt)){

    life_counter++;
    if(life_counter <6){
      geralt_hit.play();
      if(life_counter == 1){
        kardia3.animation.nextFrame();
      }
      if(life_counter == 2){
        kardia3.animation.nextFrame();
      }
      if(life_counter == 3){
        kardia2.animation.nextFrame();
      }
      if(life_counter == 4){
        kardia2.animation.nextFrame();
      }
      if(life_counter == 5){
        kardia.animation.nextFrame();
      }
      if(life_counter == 6){
        kardia.animation.nextFrame();
      }
    }
    else{
      geralt_death.play();
    }
    if(geralt.x > enemy1.x){
      enemy1.vel.x=-1;
      enemy1.changeAnimation('right');
    }
    else{
      enemy1.vel.x = 1;
      enemy1.changeAnimation('left');
    }
  }



  //second enemy 
  if(enemy2.y > minHeight){

    enemy2.y = minHeight;
  }


  if(enemy2.x <= -840 && collided2nd==false){

    enemy2.vel.x = 1.2;
    collided2nd = true;
    enemy2.changeAnimation('left');
  }

  if(enemy2.collided(crate)){

    enemy2.vel.x =-1.2;
    enemy2.changeAnimation('right');
  }

  if(enemy2.collided(S1crate4)){

    enemy2.vel.x = 1.2;
    enemy2.changeAnimation('left');
  }

  if(enemy2.overlaps(geralt)){

    life_counter++
    if(life_counter <6){
      geralt_hit.play();
      if(life_counter == 1){
        kardia3.animation.nextFrame();
      }
      if(life_counter == 2){
        kardia3.animation.nextFrame();
      }
      if(life_counter == 3){
        kardia2.animation.nextFrame();
      }
      if(life_counter == 4){
        kardia2.animation.nextFrame();
      }
      if(life_counter == 5){
        kardia.animation.nextFrame();
      }
      if(life_counter == 6){
        kardia.animation.nextFrame();
      }
    }
    else{
      geralt_death.play();
    }
    if(geralt.x > enemy2.x){
      enemy2.vel.x=-1.2;
      enemy2.changeAnimation('right');
    }
    else{
      enemy2.vel.x = 1.2;
      enemy2.changeAnimation('left');
    }
  }


  //first enemy vol2


  if(enemy2_1.x <= -840 && collided2nd_vol2==false){

    enemy2_1.vel.x = 1.2;
    collided2nd_vol2 = true;
    enemy2_1.changeAnimation('left');
    
  }

  if(enemy2_1.x >= crate.x){

    enemy2_1.vel.x =-1.2;
    enemy2_1.changeAnimation('right');
    
  }
  if(enemy2_1.x <= S1sign.x){

    enemy2_1.vel.x = 1.2;
    enemy2_1.changeAnimation('left');
    
  }


  if(enemy2_1.overlaps(geralt)){

    life_counter++
    if(life_counter <6){
      geralt_hit.play();
      if(life_counter == 1){
        kardia3.animation.nextFrame();
      }
      if(life_counter == 2){
        kardia3.animation.nextFrame();
      }
      if(life_counter == 3){
        kardia2.animation.nextFrame();
      }
      if(life_counter == 4){
        kardia2.animation.nextFrame();
      }
      if(life_counter == 5){
        kardia.animation.nextFrame();
      }
      if(life_counter == 6){
        kardia.animation.nextFrame();
      }
    }
    else{
      geralt_death.play();
    }
    if(geralt.x > enemy2_1.x){
      enemy2_1.vel.x=-1.2;
      enemy2_1.changeAnimation('right');
    }
    else{
      enemy2_1.vel.x = 1.2;
      enemy2_1.changeAnimation('left');
    }
  
  }

  //second enemy vol 2 
  if(enemy2_2.y > minHeight){

    enemy2_2.y = minHeight;
  }


  if(enemy2_2.x <= -730 && collided3rd_vol2==false){

    enemy2_2.vel.x = 1.2;
    collided3rd_vol2 = true;
    enemy2_2.changeAnimation('left');
  }

  if(enemy2_2.collided(crate)){

    enemy2_2.vel.x =1.2;
    enemy2_2.changeAnimation('left');
  }

  if(enemy2_2.collided(barrel1)){

    enemy2_2.vel.x = -1.2;
    enemy2_2.changeAnimation('right');
  }

  if(enemy2_2.overlaps(geralt)){

    life_counter++
    if(life_counter <6){
      geralt_hit.play();
      if(life_counter == 1){
        kardia3.animation.nextFrame();
      }
      if(life_counter == 2){
        kardia3.animation.nextFrame();
      }
      if(life_counter == 3){
        kardia2.animation.nextFrame();
      }
      if(life_counter == 4){
        kardia2.animation.nextFrame();
      }
      if(life_counter == 5){
        kardia.animation.nextFrame();
      }
      if(life_counter == 6){
        kardia.animation.nextFrame();
      }
    }
    else{
      geralt_death.play();
    }
    if(geralt.x > enemy2_2.x){
      enemy2_2.vel.x=-1.2;
      enemy2_2.changeAnimation('right');
    }
    else{
      enemy2_2.vel.x = 1.2;
      enemy2_2.changeAnimation('left');
    }
  }



  //third enemy vol 2
  if(enemy2_3.y > minHeight){

    enemy2_3.y = minHeight;
  }


  if(enemy2_3.x <= 1200 && collided4th_vol2==false){

    enemy2_3.vel.x = 1.2;
    collided4th_vol2 = true;
    enemy2_3.changeAnimation('left');
  }

  if(enemy2_3.collided(crate3)){

    enemy2_3.vel.x =1.2;
    enemy2_3.changeAnimation('left');
  }

  if(enemy2_3.collided(welltop)){

    enemy2_3.vel.x = -1.2;
    enemy2_3.changeAnimation('right');
  }

  if(enemy2_3.overlaps(geralt)){

    life_counter++
    if(life_counter <6){
      geralt_hit.play();
      if(life_counter == 1){
        kardia3.animation.nextFrame();
      }
      if(life_counter == 2){
        kardia3.animation.nextFrame();
      }
      if(life_counter == 3){
        kardia2.animation.nextFrame();
      }
      if(life_counter == 4){
        kardia2.animation.nextFrame();
      }
      if(life_counter == 5){
        kardia.animation.nextFrame();
      }
      if(life_counter == 6){
        kardia.animation.nextFrame();
      }
    }
    else{
      geralt_death.play();
    }
    if(geralt.x > enemy2_3.x){
      enemy2_3.vel.x=-1.2;
      enemy2_3.changeAnimation('right');
    }
    else{
      enemy2_3.vel.x = 1.2;
      enemy2_3.changeAnimation('left');
    }
  }



//fourth enemy vol 2
if(enemy2_4.y > minHeight){

  enemy2_4.y = minHeight;
}


if(enemy2_4.x <= 1400 && collided5th_vol2==false){

  enemy2_4.vel.x = 1.2;
  collided5th_vol2 = true;
  enemy2_4.changeAnimation('left');
}

if(enemy2_4.collided(welltop)){

  enemy2_4.vel.x =1.2;
  enemy2_4.changeAnimation('left');
}

if(enemy2_4.collided(S2crate2)){

  enemy2_4.vel.x = -1.2;
  enemy2_4.changeAnimation('right');
}

if(enemy2_4.overlaps(geralt)){

  life_counter++
  if(life_counter <6){
    geralt_hit.play();
    if(life_counter == 1){
      kardia3.animation.nextFrame();
    }
    if(life_counter == 2){
      kardia3.animation.nextFrame();
    }
    if(life_counter == 3){
      kardia2.animation.nextFrame();
    }
    if(life_counter == 4){
      kardia2.animation.nextFrame();
    }
    if(life_counter == 5){
      kardia.animation.nextFrame();
    }
    if(life_counter == 6){
      kardia.animation.nextFrame();
    }
  }
  else{
    geralt_death.play();
  }
  if(geralt.x > enemy2_4.x){
    enemy2_4.vel.x=-1.2;
    enemy2_4.changeAnimation('right');
  }
  else{
    enemy2_4.vel.x = 1.2;
    enemy2_4.changeAnimation('left');
  }
}

//fifth enemy vol 2



if(enemy2_5.x <= 3700 && collided7th_vol2==false){

  enemy2_5.vel.x = 2;
  collided7th_vol2 = true;
  enemy2_5.changeAnimation('left');
  
}
if(enemy2_5.x >= S2platform1a.x){

  enemy2_5.vel.x =-2;
  enemy2_5.changeAnimation('right');
  
}
if(enemy2_5.x <= S2barrel1.x){

  enemy2_5.vel.x = 2;
  enemy2_5.changeAnimation('left');
  
  
}


if(enemy2_5.overlaps(geralt)){

  life_counter++
  if(life_counter <6){
    geralt_hit.play();
    if(life_counter == 1){
      kardia3.animation.nextFrame();
    }
    if(life_counter == 2){
      kardia3.animation.nextFrame();
    }
    if(life_counter == 3){
      kardia2.animation.nextFrame();
    }
    if(life_counter == 4){
      kardia2.animation.nextFrame();
    }
    if(life_counter == 5){
      kardia.animation.nextFrame();
    }
    if(life_counter == 6){
      kardia.animation.nextFrame();
    }
  }
  else{
    geralt_death.play();
  }
  if(geralt.x > enemy2_5.x){
    enemy2_5.vel.x=-2;
    enemy2_5.changeAnimation('right');
   
  }
  else{
    enemy2_5.vel.x = 2;
    enemy2_5.changeAnimation('left');
   
  }

}



//sixth enemy vol 2
if(enemy2_6.y > minHeight){

  enemy2_6.y = minHeight;
}


if(enemy2_6.x <= 3800 && collided6th_vol2==false){

  enemy2_6.vel.x = 2;
  collided6th_vol2 = true;
  enemy2_6.changeAnimation('left');
}

if(enemy2_6.collided(S2barrel2)){

  enemy2_6.vel.x =2;
  enemy2_6.changeAnimation('left');
}

if(enemy2_6.x >= 4480){

  enemy2_6.vel.x = -2;
  enemy2_6.changeAnimation('right');
}

if(enemy2_6.overlaps(geralt)){

  life_counter++
  if(life_counter <6){
    geralt_hit.play();
    if(life_counter == 1){
      kardia3.animation.nextFrame();
    }
    if(life_counter == 2){
      kardia3.animation.nextFrame();
    }
    if(life_counter == 3){
      kardia2.animation.nextFrame();
    }
    if(life_counter == 4){
      kardia2.animation.nextFrame();
    }
    if(life_counter == 5){
      kardia.animation.nextFrame();
    }
    if(life_counter == 6){
      kardia.animation.nextFrame();
    }
  }
  else{
    geralt_death.play();
  }
  if(geralt.x > enemy2_6.x){
    enemy2_6.vel.x= -2;
    enemy2_6.changeAnimation('right');
  }
  else{
    enemy2_6.vel.x = 2;
    enemy2_6.changeAnimation('left');
  }
}


//seventh enemy vol 2


if(enemy2_7.x <= 3700 && collided8th_vol2==false){

  enemy2_7.vel.x = -1.5;
  collided8th_vol2 = true;
  enemy2_7.changeAnimation('right');
  
}
if(enemy2_7.x >= S2platform2a.x){

  enemy2_7.vel.x =-1.5;
  enemy2_7.changeAnimation('right');
  
}
if(enemy2_7.x <= S2floor1.x){

  enemy2_7.vel.x = 1.5;
  enemy2_7.changeAnimation('left');
  
}


if(enemy2_7.overlaps(geralt)){

  life_counter++
  if(life_counter <6){
    geralt_hit.play();
    if(life_counter == 1){
      kardia3.animation.nextFrame();
    }
    if(life_counter == 2){
      kardia3.animation.nextFrame();
    }
    if(life_counter == 3){
      kardia2.animation.nextFrame();
    }
    if(life_counter == 4){
      kardia2.animation.nextFrame();
    }
    if(life_counter == 5){
      kardia.animation.nextFrame();
    }
    if(life_counter == 6){
      kardia.animation.nextFrame();
    }
  }
  else{
    geralt_death.play();
  }
  if(geralt.x > enemy2_7.x){
    enemy2_7.vel.x=-1.5;
    enemy2_7.changeAnimation('right');
   
  }
  else{
    enemy2_7.vel.x = 1.5;
    enemy2_7.changeAnimation('left');
    
  }

}



  //third enemy
  if(enemy3.y > minHeight){

    enemy3.y = minHeight;
  }


  if(enemy3.x <= 595 && collided3rd==false){

    enemy3.vel.x = 1.2;
    collided3rd = true;
    enemy3.changeAnimation('left');
  }

  if(enemy3.collided(crate2)){

    enemy3.vel.x =-1.2;
    enemy3.changeAnimation('right');
  }

  if(enemy3.collided(wagon)){

    enemy3.vel.x = 1.2;
    enemy3.changeAnimation('left');
  }

  if(enemy3.overlaps(geralt)){

    life_counter++;
    if(life_counter <6){
      geralt_hit.play();
      if(life_counter == 1){
        kardia3.animation.nextFrame();  
      }
      if(life_counter == 2){
        kardia3.animation.nextFrame();
      }
      if(life_counter == 3){
        kardia2.animation.nextFrame();
      }
      if(life_counter == 4){
        kardia2.animation.nextFrame();
      }
      if(life_counter == 5){
        kardia.animation.nextFrame();
      }
      if(life_counter == 6){
        kardia.animation.nextFrame();
      }
    }
    else{
      geralt_death.play();
    }
    if(geralt.x > enemy3.x){
      enemy3.vel.x=-1.2;
      enemy3.changeAnimation('right');
    }
    else{
      enemy3.vel.x = 1.2;
      enemy3.changeAnimation('left');
    }
  }



  //fourth enemy
  if(enemy4.y > minHeight){

    enemy4.y = minHeight;
  }


  if(enemy4.x <= 2740 && collided4th==false){

    enemy4.vel.x = 1.6;
    collided4th = true;
    enemy4.changeAnimation('left');
  }

  if(enemy4.collided(S2welltop)){

    enemy4.vel.x =-1.6;
    enemy4.changeAnimation('right');
    
  }

  if(enemy4.collided(S2crate3)){

    enemy4.vel.x = 1.6;
    enemy4.changeAnimation('left');
  }

  if(enemy4.overlaps(geralt)){

    life_counter++;
    if(life_counter <6){
      geralt_hit.play();
      if(life_counter == 1){
        kardia3.animation.nextFrame();
      }
      if(life_counter == 2){
        kardia3.animation.nextFrame();
      }
      if(life_counter == 3){
        kardia2.animation.nextFrame();
      }
      if(life_counter == 4){
        kardia2.animation.nextFrame();
      }
      if(life_counter == 5){
        kardia.animation.nextFrame();
      }
      if(life_counter == 6){
        kardia.animation.nextFrame();
      }
    }
    else{
      geralt_death.play();
    }
    if(geralt.x > enemy4.x){
      enemy4.vel.x=-1.6;
      enemy4.changeAnimation('right');
    }
    else{
      enemy4.vel.x = 1.6;
      enemy4.changeAnimation('left');
    }
  }



  //fifth enemy
  if(enemy5.y > minHeight){

    enemy5.y = minHeight;
  }


  if(enemy5.x <= 3290 && collided5th==false){

    enemy5.vel.x = 1.4;
    collided5th = true;
    enemy5.changeAnimation('left');
  }

  if(enemy5.collided(S2barrel1)){

    enemy5.vel.x =-1.4;
    enemy5.changeAnimation('right');
    
  }

  if(enemy5.collided(S2welltop)){

    enemy5.vel.x = 1.4;
    enemy5.changeAnimation('left');
  }

  if(enemy5.overlaps(geralt)){

    life_counter++;
    if(life_counter <6){
      geralt_hit.play();
      if(life_counter == 1){
        kardia3.animation.nextFrame();
      }
      if(life_counter == 2){
        kardia3.animation.nextFrame();
      }
      if(life_counter == 3){
        kardia2.animation.nextFrame();
      }
      if(life_counter == 4){
        kardia2.animation.nextFrame();
      }
      if(life_counter == 5){
        kardia.animation.nextFrame();
      }
      if(life_counter == 6){
        kardia.animation.nextFrame();
      }
    }
    else{
      geralt_death.play();
    }
    if(geralt.x > enemy5.x){
      enemy5.vel.x=-1.4;
      enemy5.changeAnimation('right');
    }
    else{
      enemy5.vel.x = 1.4;
      enemy5.changeAnimation('left');
    }
  }




  if(slash_attack.overlaps(enemy1)){

    //enemy1.remove();
    slash_attack.remove();
    attackingB = false;
    enemy_hit.play();
    counter_attack[0]++;
    if(counter_attack[0] == 2){
      enemy1.remove();
      goblin_death.play();
    }
  }
  if(slash_attack.overlaps(enemy2)){

   
    slash_attack.remove();
    attackingB = false;
    enemy_hit.play();
    counter_attack[1]++;
    if(counter_attack[1] == 2){
      enemy2.remove();
      goblin_death.play();
    }
  }
  if(slash_attack.overlaps(enemy2_1)){

   
    slash_attack.remove();
    attackingB = false;
    enemy_hit.play();
    counter_attack[3]++;
    if(counter_attack[3] == 2){
      enemy2_1.remove();
      bat_death.play();
    }
  }
  if(slash_attack.overlaps(enemy2_2)){

   
    slash_attack.remove();
    attackingB = false;
    enemy_hit.play();
    counter_attack[4]++;
    if(counter_attack[4] == 2){
      enemy2_2.remove();
      goblin_death.play();
    }
  }
  if(slash_attack.overlaps(enemy2_3)){

   
    slash_attack.remove();
    attackingB = false;
    enemy_hit.play();
    counter_attack[5]++;
    if(counter_attack[5] == 2){
      enemy2_3.remove();
      goblin_death.play();
    }
  }
  if(slash_attack.overlaps(enemy2_4)){

   
    slash_attack.remove();
    attackingB = false;
    enemy_hit.play();
    counter_attack[6]++;
    if(counter_attack[6] == 2){
      enemy2_4.remove();
      goblin_death.play();
    }
  }
  if(slash_attack.overlaps(enemy2_5)){

   
    slash_attack.remove();
    attackingB = false;
    enemy_hit.play();
    counter_attack[7]++;
    if(counter_attack[7] == 2){
      enemy2_5.remove();
      bat_death.play();
    }
  }
  if(slash_attack.overlaps(enemy2_6)){

   
    slash_attack.remove();
    attackingB = false;
    enemy_hit.play();
    counter_attack[8]++;
    if(counter_attack[8] == 2){
      enemy2_6.remove();
      goblin_death.play();
    }
  }
  if(slash_attack.overlaps(enemy2_7)){

   
    slash_attack.remove();
    attackingB = false;
    enemy_hit.play();
    counter_attack[9]++;
    if(counter_attack[9] == 2){
      enemy2_7.remove();
      bat_death.play();
    }
  }
  if(slash_attack.overlaps(enemy3)){

    
    slash_attack.remove();
    attackingB = false;
    enemy_hit.play();
    counter_attack_skeleton[0]++;
    if(counter_attack_skeleton[0] == 4){
      enemy3.remove();
      skeleton_death.play();
    }
  }
  if(slash_attack.overlaps(enemy4)){

   
    slash_attack.remove();
    attackingB = false;
    enemy_hit.play();
    counter_attack[2]++;
    if(counter_attack[2] == 2){
      enemy4.remove();
      goblin_death.play();
    }
  }
  if(slash_attack.overlaps(enemy5)){

   
    slash_attack.remove();
    attackingB = false;
    enemy_hit.play();
    counter_attack_skeleton[1]++;
    if(counter_attack_skeleton[1] == 4){
      enemy5.remove();
      skeleton_death.play();
    }
  }




  if(slash_attack2.overlaps(enemy1)){

   
    slash_attack2.remove();
    attackingC = false;
    enemy_hit.play();
    counter_attack[0]++;
    if(counter_attack[0] == 2){
      enemy1.remove();
      goblin_death.play();
    }
  }
  if(slash_attack2.overlaps(enemy2)){

   
    slash_attack2.remove();
    attackingC = false;
    enemy_hit.play();
    counter_attack[1]++;
    if(counter_attack[1] == 2){
      enemy2.remove();
      goblin_death.play();
    }
  }
  if(slash_attack2.overlaps(enemy2_1)){

   
    slash_attack2.remove();
    attackingC = false;
    enemy_hit.play();
    counter_attack[3]++;
    if(counter_attack[3] == 2){
      enemy2_1.remove();
      bat_death.play();
    }
  }
  if(slash_attack2.overlaps(enemy2_2)){

   
    slash_attack2.remove();
    attackingC = false;
    enemy_hit.play();
    counter_attack[4]++;
    if(counter_attack[4] == 2){
      enemy2_2.remove();
      goblin_death.play();
    }
  }
  if(slash_attack2.overlaps(enemy2_3)){

   
    slash_attack2.remove();
    attackingC = false;
    enemy_hit.play();
    counter_attack[5]++;
    if(counter_attack[5] == 2){
      enemy2_3.remove();
      goblin_death.play();
    }
  }
  if(slash_attack2.overlaps(enemy2_4)){

   
    slash_attack2.remove();
    attackingC = false;
    enemy_hit.play();
    counter_attack[6]++;
    if(counter_attack[6] == 2){
      enemy2_4.remove();
      goblin_death.play();
    }
  }
  if(slash_attack2.overlaps(enemy2_5)){

   
    slash_attack2.remove();
    attackingC = false;
    enemy_hit.play();
    counter_attack[7]++;
    if(counter_attack[7] == 2){
      enemy2_5.remove();
      goblin_death.play();
    }
  }
  if(slash_attack2.overlaps(enemy2_6)){

   
    slash_attack2.remove();
    attackingC = false;
    enemy_hit.play();
    counter_attack[8]++;
    if(counter_attack[8] == 2){
      enemy2_6.remove();
      goblin_death.play();
    }
  }
  if(slash_attack2.overlaps(enemy2_7)){

   
    slash_attack2.remove();
    attackingC = false;
    enemy_hit.play();
    counter_attack[9]++;
    if(counter_attack[9] == 2){
      enemy2_7.remove();
      goblin_death.play();
    }
  }
  if(slash_attack2.overlaps(enemy3)){

   
    slash_attack2.remove();
    attackingC = false;
    enemy_hit.play();
    counter_attack_skeleton[0]++;
    if(counter_attack_skeleton[0] == 4){
      enemy3.remove();
      skeleton_death.play();
    }
  }
  if(slash_attack2.overlaps(enemy4)){

   
    slash_attack2.remove();
    attackingC = false;
    enemy_hit.play();
    counter_attack[2]++;
    if(counter_attack[2] == 2){
      enemy4.remove();
      goblin_death.play();
    }
  }
  if(slash_attack2.overlaps(enemy5)){

   
    slash_attack2.remove();
    attackingC = false;
    enemy_hit.play();
    counter_attack_skeleton[1]++;
    if(counter_attack_skeleton[1] == 4){
      enemy5.remove();
      skeleton_death.play();
    }
  }



  if(slash_attack3.overlaps(enemy1)){

    enemy1.remove();
    slash_attack3.remove();
    attackingV = false;
    goblin_death.play();
    
  }
  if(slash_attack3.overlaps(enemy2)){

    enemy2.remove();
    slash_attack3.remove();
    attackingV = false;
    goblin_death.play();
  }
  if(slash_attack3.overlaps(enemy2_1)){

    enemy2_1.remove();
    slash_attack3.remove();
    attackingV = false;
    bat_death.play();
  }
  if(slash_attack3.overlaps(enemy2_2)){

    enemy2_2.remove();
    slash_attack3.remove();
    attackingV = false;
    goblin_death.play();
  }
  if(slash_attack3.overlaps(enemy2_3)){

    enemy2_3.remove();
    slash_attack3.remove();
    attackingV = false;
    goblin_death.play();
  }
  if(slash_attack3.overlaps(enemy2_4)){

    enemy2_4.remove();
    slash_attack3.remove();
    attackingV = false;
    goblin_death.play();
  }
  if(slash_attack3.overlaps(enemy2_5)){

    enemy2_5.remove();
    slash_attack3.remove();
    attackingV = false;
    goblin_death.play();
  }
  if(slash_attack3.overlaps(enemy2_6)){

    enemy2_6.remove();
    slash_attack3.remove();
    attackingV = false;
    goblin_death.play();
  }
  if(slash_attack3.overlaps(enemy2_7)){

    enemy2_7.remove();
    slash_attack3.remove();
    attackingV = false;
    goblin_death.play();
  }
  if(slash_attack3.overlaps(enemy3)){

    enemy3.remove();
    slash_attack3.remove();
    attackingV = false;
    skeleton_death.play();
  }
  if(slash_attack3.overlaps(enemy4)){

    enemy4.remove();
    slash_attack3.remove();
    attackingV = false;
    goblin_death.play();
  }
  if(slash_attack3.overlaps(enemy5)){

    enemy5.remove();
    slash_attack3.remove();
    attackingV = false;
    skeleton_death.play();
  }

}



function deathScreen(){

  if(life_counter == 6){
    for(let i = allSprites.length; i--;){
      allSprites[i].remove();
    }
  }
}

function removeCoins(){

  if(geralt.overlaps(coin1)){

    coin1.remove();
    coin_sound.play();
  }

  if(geralt.overlaps(coin2)){

    coin2.remove();
    coin_sound.play();
  }

  if(geralt.overlaps(coin3)){

    coin3.remove();
    coin_sound.play();
  }
  
  if(geralt.overlaps(coin4)){

    coin4.remove();
    coin_sound.play();
  }

  if(geralt.overlaps(coin5)){

    coin5.remove();
    coin_sound.play();
  }
  
  if(geralt.overlaps(coin6)){

    coin6.remove();
    coin_sound.play();
  }

  if(geralt.overlaps(coin7)){

    coin7.remove();
    coin_sound.play();
  }
  
  if(geralt.overlaps(coin8)){

    coin8.remove();
    coin_sound.play();
  }

  if(geralt.overlaps(coin2_1)){

    coin2_1.remove();
    coin_sound.play();
  }

  if(geralt.overlaps(coin2_2)){

    coin2_2.remove();
    coin_sound.play();
  }

  if(geralt.overlaps(coin2_3)){

    coin2_3.remove();
    coin_sound.play();
  }

  if(geralt.overlaps(coin2_4)){

    coin2_4.remove();
    coin_sound.play();
  }

  if(geralt.overlaps(coin2_5)){

    coin2_5.remove();
    coin_sound.play();
  }


  if(slash_attack.overlaps(coin1)){

    coin1.remove();
    coin_sound.play();
  }

  if(slash_attack.overlaps(coin2)){

    coin2.remove();
    coin_sound.play();
  }

  if(slash_attack.overlaps(coin3)){

    coin3.remove();
    coin_sound.play();
  }
  
  if(slash_attack.overlaps(coin4)){

    coin4.remove();
    coin_sound.play();
  }

  if(slash_attack.overlaps(coin5)){

    coin5.remove();
    coin_sound.play();
  }
  
  if(slash_attack.overlaps(coin6)){

    coin6.remove();
    coin_sound.play();
  }

  if(slash_attack.overlaps(coin7)){

    coin7.remove();
    coin_sound.play();
  }
  
  if(slash_attack.overlaps(coin8)){

    coin8.remove();
    coin_sound.play();
  }

  if(slash_attack.overlaps(coin2_1)){

    coin2_1.remove();
    coin_sound.play();
  }

  if(slash_attack.overlaps(coin2_2)){

    coin2_2.remove();
    coin_sound.play();
  }

  if(slash_attack.overlaps(coin2_3)){

    coin2_3.remove();
    coin_sound.play();
  }

  if(slash_attack.overlaps(coin2_4)){

    coin2_4.remove();
    coin_sound.play();
  }

  if(slash_attack.overlaps(coin2_5)){

    coin2_5.remove();
    coin_sound.play();
  }


  if(slash_attack2.overlaps(coin1)){

    coin1.remove();
    coin_sound.play();
  }

  if(slash_attack2.overlaps(coin2)){

    coin2.remove();
    coin_sound.play();
  }

  if(slash_attack2.overlaps(coin3)){

    coin3.remove();
    coin_sound.play();
  }
  
  if(slash_attack2.overlaps(coin4)){

    coin4.remove();
    coin_sound.play();
  }

  if(slash_attack2.overlaps(coin5)){

    coin5.remove();
    coin_sound.play();
  }
  
  if(slash_attack2.overlaps(coin6)){

    coin6.remove();
    coin_sound.play();
  }

  if(slash_attack2.overlaps(coin7)){

    coin7.remove();
    coin_sound.play();
  }
  
  if(slash_attack2.overlaps(coin8)){

    coin8.remove();
    coin_sound.play();
  }

  if(slash_attack2.overlaps(coin2_1)){

    coin2_1.remove();
    coin_sound.play();
  }

  if(slash_attack2.overlaps(coin2_2)){

    coin2_2.remove();
    coin_sound.play();
  }

  if(slash_attack2.overlaps(coin2_3)){

    coin2_3.remove();
    coin_sound.play();
  }

  if(slash_attack2.overlaps(coin2_4)){

    coin2_4.remove();
    coin_sound.play();
  }

  if(slash_attack2.overlaps(coin2_5)){

    coin2_5.remove();
    coin_sound.play();
  }



  

}






var attackingB = false;
var attackingC = false;
var attackingV = false;

function spawnAttack(){

  if(kb.presses('b') && (attackingB == false)){

    slash_attack = createSprite(geralt.x + 100, geralt.y - 15, 60, 50);
    slash_attack.addAnimation(slash_Right);
    slash_sound.play();
    slash_attack.rotationLock = true;
   
    slash_attack.vel.x = +3;
    slash_attack.vel.y=0;


    attackingB = true;
  
   
  }
  
  if(kb.presses('c') && (attackingC == false)){

    slash_attack2 = createSprite(geralt.x - 100, geralt.y - 15, 60, 50);
    slash_attack2.addAnimation(slash_Left);
    slash_sound.play();
                            
    slash_attack2.rotationLock = true;

    slash_attack2.vel.x = -3;
    slash_attack2.vel.y=0;
   
    attackingC = true;


  }

  if(kb.holding('v')  && (attackingV == false)){

    slash_attack3 = createSprite(geralt.x + 120, geralt.y - 15, 90, 50);
    slash_attack3.addAnimation(slash_main);
    slash_attack3.collider = 'static';
    slash_main_sound.play();
    slash_main_sound.loop();
    slash_attack3.rotationLock = true;

    
    attackingV = true;

  }


  if(slash_attack.y>=minHeight){   //COLLIDING ANTI GIA OVERLAPS AMA THELOUME NA KANEI KAI KNOCKBACK TO ENEMY1
    slash_attack.y = minHeight;
    slash_attack.remove();
    attackingB = false;
    
    
    
    
  }
 

  
  if(slash_attack2.y>=minHeight){   //COLLIDING ANTI GIA OVERLAPS AMA THELOUME NA KANEI KAI KNOCKBACK TO ENEMY1
    slash_attack2.remove();
    attackingC = false;
  }

  if(kb.released('v')){

    slash_attack3.remove();
    attackingV = false;
    slash_main_sound.stop();

  }
 

  
}




//function overlaps isws thelei enemies kai slash se ena function !!!!!!!!!!!!!!!!!!!!!


function backgroundMusic(){

  //background_sound.play();
  //background_sound.loop();
  //background_sound.setVolume(0.2);
  //userStartAudio();
}
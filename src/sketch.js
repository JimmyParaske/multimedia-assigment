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
var coin1;
var coin2;
var coin3;
var coin4;
var coin5;
var coin6;
var coin7;
var coin8;
var slash_attack;
var slash_attack2;



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


//sound effect variables
var background_sound;
var coin_sound;

function preload(){

  //player assets
  geraltAnimationIdleLeft = loadAnimation('./assets/images/Knight/noBKG_KnightIdle_strip4.png', { size: [128, 128], frames: 15 });
  geraltAnimationIdleRight = loadAnimation('./assets/images/Knight/noBKG_KnightIdle_strip4right.png', { size: [128, 128], frames: 15 });
  geraltAnimationRunLeft = loadAnimation('./assets/images/Knight/noBKG_KnightRun_strip2.png', { size: [192, 128], frames: 8 });
  geraltAnimationRunRight = loadAnimation('./assets/images/Knight/noBKG_KnightRun_strip2right.png', { size: [192, 128], frames: 8 });
  geraltAnimationAttackLeft = loadAnimation('./assets/images/Knight/noBKG_KnightAttack_strip2.png', { size: [288, 128], frames: 22 });
  geraltAnimationAttackRight = loadAnimation('./assets/images/Knight/noBKG_KnightAttack_strip2right.png', { size: [288, 128], frames: 22 });
  geraltAnimationDeath = loadAnimation('./assets/images/Knight/noBKG_KnightDeath_strip.png', { size: [128, 128], frames: 15 });
  geraltAnimationJump = loadAnimation('./assets/images/Knight/noBKG_KnightJumpAndFall_strip.png', { size: [309, 128], frames: 14 });

  //attack and effects assets
  slash_thinLeft = loadAnimation('./assets/images/Sword Slashes/slash_white_thin.png', { size: [68.75, 50], frames: 6 })
  slash_thinRight = loadAnimation('./assets/images/Sword Slashes/slash_white_thinright.png', { size: [68.75, 50], frames: 6 })
  slash_Left = loadAnimation('./assets/images/Sword Slashes/slash_white_wide.png', { size: [68.83, 50], frames: 6 })
  slash_Right = loadAnimation('./assets/images/Sword Slashes/slash_white_wideright.png', { size: [68.83, 50], frames: 6 })

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

  //enemies (2 types)
  enemyAnimationLeft = loadAnimation('./assets/images/Goblin/RunLeft.png', { size: [220, 220], frames: 8 });
  enemy2AnimationLeft = loadAnimation('./assets/images/Skeleton/WalkLeft.png', { size: [270, 270], frames: 4 });
  enemyAnimationRight = loadAnimation('./assets/images/Goblin/RunRight.png', { size: [220, 220], frames: 8 });
  enemy2AnimationRight = loadAnimation('./assets/images/Skeleton/WalkRight.png', { size: [270, 270], frames: 4 });


  enemyAnimationLeft.frameDelay = 10;
  enemy2AnimationLeft.frameDelay = 15;
  enemyAnimationRight.frameDelay = 10;
  enemy2AnimationRight.frameDelay = 15;

  //coins
  coins = loadAnimation('./assets/images/coin3_16x16.png', { size: [16, 22], frames: 14 });


  //sound effects
  soundFormats('mp3');
  coin_sound = loadSound('./assets/sounds/mario_coin_sound');
  background_sound = loadSound('./assets/sounds/background_music');

  
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
  geralt = createSprite(-3400,480,67,80);
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
  

  //attack slash sprite (move horizontaly)
 
  slash_attack = new Sprite();
  slash_attack.x = -3700;
  slash_attack2 = new Sprite();
  slash_attack2.x = -3700;


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

  enemy2 = createSprite(-1200,465,55,100);
  enemy2.rotationLock = true;
 
  enemy2.addAnimation('left',enemyAnimationLeft.clone());
  enemy2.addAnimation('right',enemyAnimationRight.clone());
  enemy2.layer = 2;

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
  

  coin3 = createSprite(-1000, 100, 10, 10);
  coin3.collider = 'static';
  coin3.addAnimation(coins.clone());
 

  coin4 = createSprite(300, 350, 10, 10);
  coin4.collider = 'static';
  coin4.addAnimation(coins.clone());
  

  coin5 = createSprite(1060, 80, 10, 10);
  coin5.collider = 'static';
  coin5.addAnimation(coins.clone());
 

  coin6 = createSprite(1555, 465, 10, 10);
  coin6.collider = 'static';
  coin6.addAnimation(coins.clone());
 

  coin7 = createSprite(2752, 180, 10, 10);
  coin7.collider = 'static';
  coin7.addAnimation(coins.clone());
 

  coin8 = createSprite(3850, 100, 10, 10);
  coin8.collider = 'static';
  coin8.addAnimation(coins.clone());
 
  

 

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
  enemyMovement();
  removeCoins();
  spawnAttack();
  
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

  if(kb.presses('b')){              

    geralt.vel.x=0;
    geralt.changeAnimation('attack_left');


  }
  else if(kb.released('b')){

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

collided = false;
collided2nd = false;
collided3rd = false;
collided4th = false;
collided5th = false;

function enemyMovement(){

  

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

  if(enemy1.collided(geralt)){

    if(geralt.x < enemy1.x){
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

  if(enemy2.collided(geralt)){

    if(geralt.x < enemy2.x){
      enemy2.vel.x=-1.2;
      enemy2.changeAnimation('right');
    }
    else{
      enemy2.vel.x = 1.2;
      enemy2.changeAnimation('left');
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

  if(enemy3.collided(geralt)){

    if(geralt.x < enemy3.x){
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

    enemy4.vel.x = 1.4;
    collided4th = true;
    enemy4.changeAnimation('left');
  }

  if(enemy4.collided(S2welltop)){

    enemy4.vel.x =-1.4;
    enemy4.changeAnimation('right');
    
  }

  if(enemy4.collided(S2crate3)){

    enemy4.vel.x = 1.4;
    enemy4.changeAnimation('left');
  }

  if(enemy4.collided(geralt)){

    if(geralt.x < enemy4.x){
      enemy4.vel.x=-1.4;
      enemy4.changeAnimation('right');
    }
    else{
      enemy4.vel.x = 1.4;
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

  if(enemy5.collided(geralt)){

    if(geralt.x < enemy5.x){
      enemy5.vel.x=-1.4;
      enemy5.changeAnimation('right');
    }
    else{
      enemy5.vel.x = 1.4;
      enemy5.changeAnimation('left');
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

}


function spawnAttack(){

  if(kb.presses('b')){

    slash_attack = createSprite(geralt.x + 100, geralt.y - 15, 60, 50);
    slash_attack.x = geralt.x + 100;
    slash_attack.y = geralt.y - 5;
    slash_attack.w = 60;
    slash_attack.h  = 50;
    slash_attack.collider = 'kinematic';  //SLASH ORIZONTIA
    slash_attack.rotationLock = true;
   
    slash_attack.vel.x = +3;
    slash_attack.vel.y=0;
   
  
   
  }
  
  if(kb.presses('c')){

    slash_attack2 = createSprite(geralt.x - 100, geralt.y - 15, 60, 50);
    slash_attack2.x = geralt.x - 100;
    slash_attack2.y = geralt.y - 5;
    slash_attack2.w = 60;
    slash_attack2.h = 50;
                                            //XWRIS KIMENATIC DHLADH DEFAULT DYNAMIC EINAI TO BOMB DROP
    slash_attack2.rotationLock = true;

    slash_attack2.vel.x = -3;
    slash_attack2.vel.y=0;
   
   
  }


  if(slash_attack.overlaps(enemy1) || slash_attack.overlaps(enemy2) || slash_attack.overlaps(enemy3) || slash_attack.overlaps(enemy4) || slash_attack.overlaps(enemy5) || slash_attack.y>=minHeight){   //COLLIDING ANTI GIA OVERLAPS AMA THELOUME NA KANEI KAI KNOCKBACK TO ENEMY1
    slash_attack.remove();
    
  }
 

  
  if(slash_attack2.overlaps(enemy1) || slash_attack2.overlaps(enemy2) || slash_attack2.overlaps(enemy3) || slash_attack2.overlaps(enemy4) || slash_attack2.overlaps(enemy5) || slash_attack2.y>=minHeight){   //COLLIDING ANTI GIA OVERLAPS AMA THELOUME NA KANEI KAI KNOCKBACK TO ENEMY1
    slash_attack2.remove();
  }
  
}

//function overlaps isws thelei enemies kai slash se ena function !!!!!!!!!!!!!!!!!!!!!


function backgroundMusic(){

  //background_sound.play();
  //background_sound.loop();
  //background_sound.setVolume(0.2);
  //userStartAudio();
}
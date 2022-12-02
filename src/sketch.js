// Game control
var stage = 1;
let geraltImg;
let hop=-8;
let fallingSpeed = 0.2;
let minHeight=465;
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



var geralt_sheet;
var idle_animation;
var coin_sheet;
var coin_animation;

function preload(){

  //player and all obstacle assets
  geraltImg = loadImage('./assets/images/geralt_of_rivia.png');
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
  enemyImg = loadImage('./assets/images/sprite_0.png');
  enemy2Img = loadImage('./assets/images/sprite_enemy_0_reverted.png');

  //coins
  coins = loadAnimation('./assets/images/coin3_16x16.png', { size: [16, 22], frames: 14 });
}

function setup() {
  // Setup
  createCanvas(900, 576);
  //idle_walk = loadAnimation('./assets/images/SteamMan_idle.png', {size: [192,48], frames: 4});
  
  rectMode(CENTER);
  textAlign(CENTER);
  imageMode(CENTER);

  // Background
  land = new Landscape();
  
  
  //camera
  //camera.x=100;
  //camera.y=400;

  //world gravity
  world.gravity.y=10;
  
  //floor
  //floor= createSprite(450,515,900,10);
  //floor.collider = 'static'
  // na exafanizetai
  //floor.visible = false;

  //block
  //block=createSprite(400,300,900,10);
  //block.collider='static'; 

  

  // Player
  geralt = createSprite(2500,465,67,80);
  //-3200
  //για να μην κανει rotate ο geralt 
  geralt.rotationLock = true;
  geraltImg.resize(88,80);
  geralt.addImage(geraltImg);
  //geralt.addAnimation('idle', './assets/images/SteamMan_idle.png', 4);
  geralt.layer = 2;
  

  enemy1 = createSprite(-2400,465,55,100);
  enemy1.rotationLock = true;
  enemyImg.resize(200,220);
  enemy1.addImage(enemyImg);
  enemy1.layer = 2;

  enemy2 = createSprite(-1200,465,55,100);
  enemy2.rotationLock = true;
  enemyImg.resize(200,220);
  enemy2.addImage(enemyImg);
  enemy2.layer = 2;

  enemy3 = createSprite(300,465,55,100);
  enemy3.rotationLock = true;
  enemy2Img.resize(130, 130);
  enemy3.addImage(enemy2Img);
  enemy3.layer = 2;

  enemy4 = createSprite(2300,465,55,100);
  enemy4.rotationLock = true;
  enemyImg.resize(200,220);
  enemy4.addImage(enemyImg);
  enemy4.layer = 2;

  enemy5 = createSprite(2800,465,55,100);
  enemy5.rotationLock = true;
  enemy2Img.resize(130, 130);
  enemy5.addImage(enemy2Img);
  enemy5.layer = 2;


  coin1 = createSprite(-2750, 200, 10, 10);
  coin1.collider = 'none';
  coin1.addAnimation(coins);
  

  coin2 = createSprite(-1950, 150, 10, 10);
  coin2.collider = 'none';
  coin2.addAnimation(coins.clone());
  

  coin3 = createSprite(-1000, 100, 10, 10);
  coin3.collider = 'none';
  coin3.addAnimation(coins.clone());
 

  coin4 = createSprite(300, 350, 10, 10);
  coin4.collider = 'none';
  coin4.addAnimation(coins.clone());
  

  coin5 = createSprite(1060, 80, 10, 10);
  coin5.collider = 'none';
  coin5.addAnimation(coins.clone());
 

  coin6 = createSprite(1555, 465, 10, 10);
  coin6.collider = 'none';
  coin6.addAnimation(coins.clone());
 

  coin7 = createSprite(2750, 180, 10, 10);
  coin7.collider = 'none';
  coin7.addAnimation(coins.clone());
 

  coin8 = createSprite(3850, 100, 10, 10);
  coin8.collider = 'none';
  coin8.addAnimation(coins.clone());
 
  

  //idle = loadAnimation('./assets/images/SteamMan_idle.png',{size: [192,48], frames: 4});

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


  S1platform2a = createSprite(-1195, 285, 185, 20);
  S1platform2a.collider = 'static';
 
  S1platform2b = createSprite(-1195, 383, 185, 20);
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
  

  //!!!!!!!!!! AXREIASTO  !!!!!!!!!!!!!
  //lamp = new Lamp(503, 397);


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
  

  floor1 = createSprite(844, 390, 145, 40);
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


  platform2a = createSprite(1690, 285, 185, 20);
  platform2a.collider = 'static';
 
  platform2b = createSprite(1690, 383, 185, 20);
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
  //S2welltop.addImage(welltopImg);
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

  //idle_walk.layer = 2;


}

function draw() {
  
  clear();
  //call functions
  //camera
  //camera.x=400;
  //camera.y=290;
  
  camera.on();
  //animation(idle_animation, -3200, 465);
  //image(idle_walk.spriteSheet, -3200, 400, 5000, 1500)

  

  if( geralt.x <= -3200){

    camera.x= -3150;
  }
  if(geralt.x >= 4000){

    camera.x= 4050;
  }
  keyPressed();
  keyReleased();
  enemyMovement();

  //BOUNDARIES FOR PLAYER
  if(geralt.x <= -3550){
    geralt.x=-3550;
  }
  if(geralt.x >=4450){
    geralt.x = 4450;
  }

 
  

  //pl.gravity();
  jump(geralt);
  
  
	//camera.y = geralt.y;
  if(geralt.x >= -3200 && geralt.x <= 4000){
    camera.x=geralt.x+50;
  }

    //!!!!!!!!!!emfanizei exafanizei ta sprites!!!!
  //drawSprites();

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

    // Collisions  
    //if ((pl.getX() + pl.getWidth() / 2 >= crate1.getX() - crate1.getWidth() / 2) && (pl.getX() - pl.getWidth() / 2 <= crate1.getX() + crate1.getWidth() / 2) && (pl.getY() + pl.getHeight() / 2 >= crate1.getY() - crate1.getHeight() / 2) && (pl.getY() - pl.getHeight() / 2 <= crate1.getY() + crate1.getHeight() / 2) && (pl.getJump() == false)) {
      //pl.setY(pl.getY());
      //pl.setVelocity(0);
      //pl.setJumpCounter(0);
    //}


    //geralt movement
    /*if (kb.pressing('ArrowLeft')) {
      geralt.vel.x = -4;
    }
    else {
      geralt.vel.x = 0;
    }
    
    if (kb.pressing('ArrowRight')) {
      geralt.vel.x = +4;
    }
    else {
      geralt.vel.x = 0;
    }
    */

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

//geralt movement

  if(keyIsDown(LEFT_ARROW)){

    geralt.vel.x = -5;
    

    /*if(geralt.x>400){
      camera.x += -5;
    }*/
  }
  else if(keyIsDown(RIGHT_ARROW)){
    geralt.vel.x = +5;
    
    /*camera.x += +5;*/
  }
  else{
    geralt.vel.x = 0;
    
  }

  
  // Left
  /*if (keyIsDown(LEFT_ARROW)) {
    if ((pl.getX() - pl.getWidth() / 2 >= 5) || (!(stage == 1) && (pl.getX() >= 5))) {
      pl.moveLeft();
    } else if (!(stage == 1)) {
      stage -= 1;
      pl.setX(width);
    }
  }

  // Right
  if (keyIsDown(RIGHT_ARROW)) {
    if ((pl.getX() + pl.getWidth() / 2 <= (width - 5)) || (!(stage == 3) && (pl.getX() <= (width - 5)))) {
      pl.moveRight();
    } else if (!(stage == 3)) {
      stage += 1;
      pl.setX(0);
    }
  }

  // AUTO OUSIASTIKA EINAI TRUE OSO PATAME TO KOUMPI ALLA EINAI LATHOS DIOTI TWRA TO PATAS MIA FORA KAI PHGAINEI PANW 
  // ARA PREPEI NA GINETAI MIA FORA OXI OSO PATAS TO PANW VELOS!!!!!!!!!!!!!!!!!

  // Jump
  if (keyCode === UP_ARROW) {
    //pl.jump();
  }
  
  */

}


function keyReleased(){


/*  if (keyCode === UP_ARROW) {
    //pl.noJump();
  }

  */
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
  

  //EDW THELEI SPRITE GROUPS GIA PLATFORMS BARRELS CRATES KLP
  // EINAI LIGO BUGGY AMA TA VALW SE ENA GROUP OPOTE PROS TO PARON TO KATHE ENA SE KSEXWRISTO IF !!!!

  if(sprite.colliding(crate)){
    sprite.vel.y=0;
    //sprite.y = 393;
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  } 

  if(sprite.colliding(barrel1)){
    sprite.vel.y=0;
    //sprite.y = 393;
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  } 
 
  if(sprite.colliding(barrel2)){
    sprite.vel.y=0;
    //sprite.y = 393;
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  } 

  if(sprite.colliding(sign)){
    sprite.vel.y=0;
    //sprite.y = 393;
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  } 


  if(sprite.colliding(wagon)){
    sprite.vel.y=0;
    //sprite.y = 393;
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  }


  if(sprite.colliding(crate1)){
    sprite.vel.y=0;
    //sprite.y = 393;
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  }

  if(sprite.colliding(crate2)){
    sprite.vel.y=0;
    //sprite.y = 393;
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  }

  if(sprite.colliding(crate3)){
    sprite.vel.y=0;
    //sprite.y = 393;
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  }


  if(sprite.colliding(floor1)){
    sprite.vel.y=0;
    //sprite.y = 393;
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  }


  if(sprite.colliding(floor2)){
    sprite.vel.y=0;
    //sprite.y = 393;
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  }


  if(sprite.colliding(welltop)){
    sprite.vel.y=0;
    //sprite.y = 393;
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  }


  if(sprite.colliding(platform1a)){
    sprite.vel.y=0;
    //sprite.y = 393;
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  }



  if(sprite.colliding(platform2a)){
    sprite.vel.y=0;
    //sprite.y = 393;
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  }

  if(sprite.colliding(S1barrel1)){
    sprite.vel.y=0;
    //sprite.y = 393;
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  }



  if(sprite.colliding(S1barrel2)){
    sprite.vel.y=0;
    //sprite.y = 393;
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  }



  if(sprite.colliding(S1crate)){
    sprite.vel.y=0;
    //sprite.y = 393;
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  }



  if(sprite.colliding(S1crate1)){
    sprite.vel.y=0;
    //sprite.y = 393;
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  }



  if(sprite.colliding(S1crate2)){
    sprite.vel.y=0;
    //sprite.y = 393;
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  }



  if(sprite.colliding(S1crate3)){
    sprite.vel.y=0;
    //sprite.y = 393;
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  }




  if(sprite.colliding(S1wagon)){
    sprite.vel.y=0;
    //sprite.y = 393;
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  }


  if(sprite.colliding(S1sign)){
    sprite.vel.y=0;
    //sprite.y = 393;
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  }


  if(sprite.colliding(S1crate4)){
    sprite.vel.y=0;
    //sprite.y = 393;
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  }

  if(sprite.colliding(S1platform1a)){
    sprite.vel.y=0;
    //sprite.y = 393;
  

    if(keyIsDown(UP_ARROW) ){

      sprite.vel.y = hop;
      
    }

  
    
  }


  if(sprite.colliding(S1platform2a)){
    sprite.vel.y=0;
    //sprite.y = 393;
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  }



  if(sprite.colliding(S2crate1)){
    sprite.vel.y=0;
    //sprite.y = 393;
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  }


  if(sprite.colliding(S2crate2)){
    sprite.vel.y=0;
    //sprite.y = 393;
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  }



  if(sprite.colliding(S2crate3)){
    sprite.vel.y=0;
    //sprite.y = 393;
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  }


  if(sprite.colliding(S2welltop)){
    sprite.vel.y=0;
    //sprite.y = 393;
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  }



  if(sprite.colliding(S2barrel1)){
    sprite.vel.y=0;
    //sprite.y = 393;
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  }



  if(sprite.colliding(S2barrel2)){
    sprite.vel.y=0;
    //sprite.y = 393;
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  }



  if(sprite.colliding(S2floor1)){
    sprite.vel.y=0;
    //sprite.y = 393;
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  }



  if(sprite.colliding(S2platform1a)){
    sprite.vel.y=0;
    //sprite.y = 393;
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  }

 
  if(sprite.colliding(S2platform2a)){
    sprite.vel.y=0;
    //sprite.y = 393;
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

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
  }

  if(enemy1.collided(S1wagon)){

    enemy1.vel.x =-1;
    
  }

  if(enemy1.collided(S1crate3)){

    enemy1.vel.x = 1;
  }

  if(enemy1.collided(geralt)){

    if(geralt.x < enemy1.x){
      enemy1.vel.x=-1;
    }
    else{
      enemy1.vel.x = 1;
    }
  }



  //second enemy 
  if(enemy2.y > minHeight){

    enemy2.y = minHeight;
  }


  if(enemy2.x <= -840 && collided2nd==false){

    enemy2.vel.x = 1.2;
    collided2nd = true;
  }

  if(enemy2.collided(crate)){

    enemy2.vel.x =-1.2;
    
  }

  if(enemy2.collided(S1crate4)){

    enemy2.vel.x = 1.2;
  }

  if(enemy2.collided(geralt)){

    if(geralt.x < enemy2.x){
      enemy2.vel.x=-1.2;
    }
    else{
      enemy2.vel.x = 1.2;
    }
  }



  //third enemy
  if(enemy3.y > minHeight){

    enemy3.y = minHeight;
  }


  if(enemy3.x <= 595 && collided3rd==false){

    enemy3.vel.x = 1.2;
    collided3rd = true;
  }

  if(enemy3.collided(crate2)){

    enemy3.vel.x =-1.2;
    
  }

  if(enemy3.collided(wagon)){

    enemy3.vel.x = 1.2;
  }

  if(enemy3.collided(geralt)){

    if(geralt.x < enemy3.x){
      enemy3.vel.x=-1.2;
    }
    else{
      enemy3.vel.x = 1.2;
    }
  }



  //fourth enemy
  if(enemy4.y > minHeight){

    enemy4.y = minHeight;
  }


  if(enemy4.x <= 2740 && collided4th==false){

    enemy4.vel.x = 1.2;
    collided4th = true;
  }

  if(enemy4.collided(S2welltop)){

    enemy4.vel.x =-1.2;
    
  }

  if(enemy4.collided(S2crate3)){

    enemy4.vel.x = 1.2;
  }

  if(enemy4.collided(geralt)){

    if(geralt.x < enemy4.x){
      enemy4.vel.x=-1.2;
    }
    else{
      enemy4.vel.x = 1.2;
    }
  }



  //fifth enemy
  if(enemy5.y > minHeight){

    enemy5.y = minHeight;
  }


  if(enemy5.x <= 3290 && collided5th==false){

    enemy5.vel.x = 1.4;
    collided5th = true;
  }

  if(enemy5.collided(S2barrel1)){

    enemy5.vel.x =-1.4;
    
  }

  if(enemy5.collided(S2welltop)){

    enemy5.vel.x = 1.4;
  }

  if(enemy5.collided(geralt)){

    if(geralt.x < enemy5.x){
      enemy5.vel.x=-1.4;
    }
    else{
      enemy5.vel.x = 1.4;
    }
  }

}

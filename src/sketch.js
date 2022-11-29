// Game control
var stage = 1;
let geraltImg;
let hop=-8;
let fallingSpeed = 0.2;
let minHeight=465;
// Classes
var land;
var pl;
let geralt;
let idle;
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


function preload(){

  geraltImg = loadImage('./assets/images/geralt_of_rivia.png');
  //geralt_sheet = loadSpriteSheet('./assets/images/SteamMan_idle.png', 192, 48, 4);
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

}

function setup() {
  // Setup
  createCanvas(900, 576);
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

  //jumping assets group
  jumpingAssets = new Group();
 

  // Player
  geralt = createSprite(-3200,465,67,80);
  //-3200
  //για να μην κανει rotate ο geralt 
  geralt.rotationLock = true;
  geraltImg.resize(88,80);
  geralt.addImage(geraltImg);
  //geralt.addAnimation('idle', './assets/images/SteamMan_idle.png', 4);
  geralt.layer = 2;
  
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


}

function draw() {
  
  //call functions
  //camera
  //camera.x=400;
  //camera.y=290;
  
  camera.on();
 

  if( geralt.x <= -3200){

    camera.x= -3150;
  }
  if(geralt.x >= 4000){

    camera.x= 4050;
  }
  keyPressed();
  keyReleased();
  

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
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
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
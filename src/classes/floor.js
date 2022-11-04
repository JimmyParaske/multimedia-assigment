import floorImage from './assets/floor.jpg';

export default class Floor {
  constructor(p5){
    this.p5 = p5;
    this.image = p5.loadImage(floorImage);
    this.startX = 0;
  }
  
  draw(){
     this.p5.image(this.image,0,0)
  }
}
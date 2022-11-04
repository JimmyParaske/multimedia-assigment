import {CANVAS_WIDTH,CANVAS_HEIGHT,BUTTON_WIDTH,BUTTON_HEIGHT} from './constants';

export default class button{
  contstructor(p5,x,y,text){
    this.p5=p5;
    //Coordinates
    this.x = x;
    this.y = y;
    //Characteristics
    this.width = BUTTON_WIDTH;
    this.height = BUTTON_HEIGHT;
    this.color = color(0,0,0);
    //Context
    this.text = text;
  }
  
  draw() {
    noFill();
    if (this.hovering) {
      fill(this.col);
    }

    if (this.clicked) {
      this.width = this.width * 1.2;
      this.height = this.height * 1.2;
    }

    rect(this.x, this.y, this.width, this.height);

    this.clicked = false;
    }

  click(){
    if (this.over()) {
      this.clicked = true;
    }
  }
}
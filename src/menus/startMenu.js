import menuBackground from './assets/menuBackground.png';
import Button from './src/button';

export default class startMenu{
  constructor(p5){
    this.p5 = p5;
    this.background = p5.loadImage(menuBackground);
    startButton = new Button(this.p5,10,10,'start');
  }
    
  draw(){
    this.p5.image(this.background,0,0);
    startButton.draw();
  }
}
//Imports
import P5 from 'p5';
import { CANVAS_HEIGHT, CANVAS_WIDTH } from './src/constants';
import startMenu from './src/startMenu';
import Floor from './src/floor';


const sketch = p5 => {
  let state = 'start';
  
  p5.setup = () => {
    var canvas = p5.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    
  }
  
  p5.draw = () => {
    if (state == 'start') {
      startMenu.draw();
    }
    
        
    
  }
}
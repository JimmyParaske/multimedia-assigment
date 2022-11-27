class Landscape {
    constructor() {
        this.image = loadImage('./assets/images/landscape.png');
        this.stage = 0;
    }

    display() {
      

        
        image(this.image, width / 2, height / 2, width * 3, height);
        
        //perigramma
        noFill();//keno
        stroke(0);//mauro xrwma
        strokeWeight(5);
        
    }

    getStage() {
        return this.stage;
    }

    setStage(stage) {
        this.stage = stage;
    }
}
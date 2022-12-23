class ReturnButton extends Button {
    constructor(x,y){
        super(x,y);
        this.width = 60;
        this.height = 60;

        this.image = loadImage('./assets/images/Buttons/return.png');
    }

    display() {
        image(this.image,this.x,this.y,this.width,this.height);
    }
}
class TextButton extends Button {
  constructor(x, y, text) {
    super(x,y);
    this.width = 300;
    this.height = 50;
    
    this.button = createButton(text);
    this.button.hide();
  }

  display() {
    this.button.show();
    this.button.size(this.width, this.height);
    this.button.position(this.x - this.width / 2, this.y - this.height / 2);
    this.button.style("font-family", "Comic Sans MS");
    this.button.style("font-size", "30px");
    this.button.style("color", color(161, 97, 82));
    this.button.style("background-color", color(0, 0, 0));

    fill(0, 0, 0);
    stroke(161, 97, 82);
    strokeWeight(2);
    rect(this.x, this.y, (this.width + 18), this.height + 10, 20);
  }

  show() {
    this.button.show();
  }

  hide() {
    this.button.hide();
  }

  remove() {
    this.button.remove();
  }
}
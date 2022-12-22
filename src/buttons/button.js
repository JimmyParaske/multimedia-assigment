class Button {
  constructor(x, y, text) {
    this.x = x;
    this.y = y;
    this.width = 300;
    this.height = 50;
    this.button = createButton(text);
  }

  display() {
    this.button.size(this.width, this.height);
    this.button.position(this.x - this.width/2, this.y - this.height/2);
    this.button.style("font-family", "Bodoni");
    this.button.style("font-size", "30px");
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }

  remove() {
    this.button.remove();
  }
}
class Player {
  constructor({ position = { x: 0, y: 0 } }) {
    this.position = position;
    this.width = 50;
    this.height = 50;

    this.gravityFactor = 0.5;
    this.velocity = {
      x: 0,
      y: 0,
    };

    this.sides = {
      bottom: this.position.y + this.height,
    };
  }
  draw() {
    c.fillStyle = "red";
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  update() {
   
    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;
    this.sides.bottom = this.position.y + this.height;
    if (this.sides.bottom + this.velocity.y < canvas.height) {
      this.velocity.y += this.gravityFactor;
    } else this.velocity.y = 0;

    this.draw();
  }
}


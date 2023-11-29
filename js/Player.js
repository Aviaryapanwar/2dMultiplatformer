class Player extends Spirit {
  constructor({ collisionBlocks = [], imageSrc }) {
    super({ imageSrc, frameRate: 11 });
    this.position = {
      x: 400,
      y: 400,
    };
    this.collisionBlocks = collisionBlocks;

    this.gravityFactor = 0.5;
    this.velocity = {
      x: 0,
      y: 0,
    };
  }

  update() {
    
    this.position.x += this.velocity.x;
   
    this.updateHitbox();

    this.checkForHorizontalCollisions();
    this.applyGravity();
    this.updateHitbox();
    this.checkForVerticalCollisions();
    
    //  c.fillStyle ='blue'
    //  c.fillRect(this.position.x,this.position.y,this.width,this.height);
    this.draw();
  }
  updateHitbox() {
    this.hitbox = {
      position: { x: this.position.x + 58, y: this.position.y + 34 },
      width: 50,
      height: 53,
    };
  }
  checkForHorizontalCollisions() {
    for (let i = 0; i < this.collisionBlocks.length; i++) {
      const block = this.collisionBlocks[i];

      if (
        block.position.x + block.width >= this.hitbox.position.x &&
        this.hitbox.position.x + this.hitbox.width >= block.position.x &&
        this.hitbox.position.y + this.hitbox.height >= block.position.y &&
        block.position.y + block.height >= this.hitbox.position.y
      ) {
        if (this.velocity.x < -1) {
          const offset = this.hitbox.position.x - this.position.x
          this.position.x = block.position.x + block.width -offset+ 0.01;
          break;
        }
        if (this.velocity.x > 1) {
          const offset =
            this.hitbox.position.x - this.position.x + this.hitbox.width;
          this.position.x = block.position.x -offset - 0.01;
          break;
        }
      }
    }
  }
  checkForVerticalCollisions() {
    for (let i = 0; i < this.collisionBlocks.length; i++) {
      const block = this.collisionBlocks[i];

      if (
        block.position.x + block.width >= this.hitbox.position.x &&
        this.hitbox.position.x + this.hitbox.width >= block.position.x &&
        this.hitbox.position.y + this.hitbox.height >= block.position.y &&
        block.position.y + block.height >= this.hitbox.position.y
      ) {
        if (this.velocity.y < 0) {
          this.velocity.y = 0;
          const offset = this.hitbox.position.y - this.position.y;
          this.position.y = block.position.y + block.height - offset + 0.01;
          break;
        }
        if (this.velocity.y > 0) {
          this.velocity.y = 0;
          const offset =
            this.hitbox.position.y - this.position.y + this.hitbox.height;
          this.position.y = block.position.y - offset - 0.01;
          break;
        }
      }
    }
  }
  applyGravity() {
    this.velocity.y += this.gravityFactor;
    this.position.y += this.velocity.y;
  }
}

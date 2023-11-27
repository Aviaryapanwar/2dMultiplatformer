class Player extends Spirit{


  constructor({collisionBlocks=[],imageSrc}) {
    super({imageSrc,frameRate:11})
    this.position = {
      x:200,y:200
    }
    this.collisionBlocks = collisionBlocks
 
  
 
    this.gravityFactor = 0.5;
    this.velocity = {
      x: 0,
      y: 0,
    };

    this.sides = {
      bottom: this.position.y + this.height,
    };
  }

  update() {
   
    this.position.x += this.velocity.x;
    this.hitbox = {
      position:{x:this.position.x+58,y:this.position.y+34},
      width:50,height:5
    }
    this.checkForHorizontalCollisions()
    this.applyGravity()
    this.checkForVerticalCollisions()
    this.draw();
  }

  checkForHorizontalCollisions(){
    for(let i = 0; i< this.collisionBlocks.length;i++){
      const block = this.collisionBlocks[i] 
  
      if(block.position.x + block.width >= this.position.x &&
        this.position.x +this.width >= block.position.x &&
        this.position.y + this.height >= block.position.y &&
        block.position.y + block.height >= this.position.y)
        {
          if(this.velocity.x  < -1){this.position.x = block.position.x + block.width + 0.01
          break}
          if(this.velocity.x  >  1){this.position.x = block.position.x -this.width - 0.01
          break}
   
        }
    }
  }
  checkForVerticalCollisions(){
    
    for(let i = 0; i< this.collisionBlocks.length;i++){
      const block = this.collisionBlocks[i] 
  
      if(block.position.x + block.width >= this.position.x &&
        this.position.x +this.width >= block.position.x &&
        this.position.y + this.height >= block.position.y &&
        block.position.y + block.height >= this.position.y)
        {
          if(this.velocity.y  < 0){this.position.y = block.position.y + block.height + 0.01
          this.velocity.y = 0
          break
        }
          if(this.velocity.y  >  0){this.velocity.y = 0
            this.position.y = block.position.y -this.height - 0.01
          break
          }
   
        }
    }
  }
  applyGravity(){
    this.velocity.y += this.gravityFactor;
    this.position.y += this.velocity.y;
  }
}

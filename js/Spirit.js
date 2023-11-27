class Spirit {
  constructor({ position, imageSrc ,frameRate=1}) {
    this.position = position;
    this.image = new Image();
    this.frameRate = frameRate
    this.currentFrame = 0
    this.image.onload = () => {
      this.loaded = true;
      this.width = this.image.width / this.frameRate;
      this.height = this.image.height;
    };
    this.image.src = imageSrc;
    this.loaded = true;
    this.elapsedFrame = 0
    this.frameBuffer = 5
  }
  draw() {
    if (!this.loaded) return;
    const cropbox = {
      position: {
        x: this.width*this.currentFrame,
        y: 0,
      },
      width: this.width,
      height: this.height,
      
    };
  
    c.drawImage(
      this.image,
      cropbox.position.x,
      cropbox.position.y,
      cropbox.width,
      cropbox.height,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    
    );
this.updateFrames()
  }
  updateFrames(){
    this.elapsedFrame++
    if((this.elapsedFrame %this.frameBuffer == 0)){
    this.currentFrame++
    this.currentFrame %= this.frameRate
}
    this.elapsedFrame %= this.frameRate*this.frameBuffer
}
}

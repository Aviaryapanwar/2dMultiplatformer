const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
canvas.width = 2048;
canvas.height = 1152;

const parsedCollisions = collisionLvl1.parse2d();
const collisionBlocks = parsedCollisions.createObjectsFrom2D();

const player = new Player({ collisionBlocks,imageSrc:"./assets/king/idle.png"});
const backgroundlvl1 = new Spirit({
  position: { x: 0, y: 0 },
  imageSrc: "./assets/backgroundLevel1.png",
});

const keys = {
  w: { pressed: false },
  a: { pressed: false },
  d: { pressed: false },
};

function animate() {
  window.requestAnimationFrame(animate);
  c.fillStyle = "white";
  c.fillRect(0, 0, canvas.width, canvas.height);
  backgroundlvl1.draw();
  window.scrollTo(player.position.x-200,player.position.y-200);
  collisionBlocks.forEach((block) => {
    block.draw();
  });

  player.velocity.x = 0;
  if (keys.a.pressed) {
    player.switchSpirit('runLeft')
    player.lastdirection = 'Left'
    player.velocity.x = -4;
   
  }
  else if (keys.d.pressed) {
     player.switchSpirit('runRight')
     player.lastdirection = 'Right'
    player.velocity.x = 4;
  }
  else {
    if(player.lastdirection === 'Right')
  player.switchSpirit('idleRight')
 else{
  player.switchSpirit('idleLeft')
 }
}

  player.update();
}

animate();

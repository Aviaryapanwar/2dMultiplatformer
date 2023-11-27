const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
canvas.width = 1024;
canvas.height = 576;

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

  collisionBlocks.forEach((block) => {
    block.draw();
  });

  player.velocity.x = 0;
  if (keys.a.pressed) player.velocity.x = -4;
  else if (keys.d.pressed) player.velocity.x = 4;
  player.update();
}
animate();

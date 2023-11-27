const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
canvas.width = 1024;
canvas.height = 576;
const player = new Player({position:{x:100,y:100}})
const keys = {
  w:{pressed : false},
  a:{pressed : false},
  d:{pressed : false},

}



function animate() {
  window.requestAnimationFrame(animate);
  c.fillStyle = "white";
  c.fillRect(0, 0, canvas.width, canvas.height);

  player.velocity.x = 0
  if(keys.a.pressed)player.velocity.x = -4
  else if(keys.d.pressed)player.velocity.x = 4
  player.update()
}
animate();






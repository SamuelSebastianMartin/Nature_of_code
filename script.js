const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

//ctx.fillStyle="white";
//ctx.fillRect(100, 100, 5, 5);

class Particle {
  constructor(){
    this.pos = [300, 300];
    this.velocity = [1, 1];
    this.accelleration = [0, 0];
    this.pointSize = 1;
    this.color = "white";
  }
  update(){
    this.velocity[0] += this.accelleration[0];
    this.velocity[1] += this.accelleration[1];
    this.pos[0] += this.velocity[0];
    this.pos[1] += this.velocity[1];
  }
  draw(){
    ctx.fillStyle = this.color;
    ctx.fillRect(this.pos[0], this.pos[1], this.pointSize, this.pointSize);
  }
}

dot = new Particle;

function animate(){
  dot.velocity[0] = Math.random() * 10 - 5;
  if (dot.pos[0] <= 0) dot.pos[0] = 1;
  if (dot.pos[0] >= CANVAS_WIDTH) dot.pos[0] = CANVAS_WIDTH - 1;
  if (dot.pos[1] <= 0) dot.pos[1] = 1;
  if (dot.pos[1] >= CANVAS_HEIGHT) dot.pos[1] = CANVAS_HEIGHT - 1;
  dot.velocity[1] = Math.random() * 10 - 5;
  dot.update();
  dot.draw(); requestAnimationFrame(animate);
}

animate();

import Shape from "./Shape.js";

class EvilCircle extends Shape {
  constructor(x, y) {
    super(x, y, 20, 20);
    this.color = "red";
    this.size = 30;

    window.addEventListener('keydown', (e) => {
        switch(e.key) {
          case 'a':
            this.x -= this.velX;
            break;
          case 'd':
            this.x += this.velX;
            break;
          case 'w':
            this.y -= this.velY;
            break;
          case 's':
            this.y += this.velY;
            break;
        }
      });
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.stroke();
  }

  checkBounds(screenWidth, screenHeight) {
    if (this.x + this.size >= screenWidth) {
      this.x -= this.size
    }

    if (this.x - this.size <= 0) {
      this.x = this.size
    }

    if (this.y + this.size >= screenHeight) {
      this.y -= this.size;
    }

    if (this.y - this.size <= 0) {
      this.y = this.size;
    }

  }

  collisionDetect(balls, collisionDetectAction) {
    for (const ball of balls) {
      if (ball.exists) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + ball.size) {
          ball.exists = false;
          collisionDetectAction();
        }
      }
    }
  }

}



export default EvilCircle;


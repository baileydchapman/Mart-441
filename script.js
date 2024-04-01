class GameObject {
    constructor(x, y, width, height, color, dx, dy) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.color = color;
      this.dx = dx;
      this.dy = dy;
    }
  
    draw(ctx) {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  
    update(canvas) {
      this.x += this.dx;
      this.y += this.dy;
  
      if (this.x <= 0 || this.x + this.width >= canvas.width) {
        this.dx *= -1;
      }
  
      if (this.y <= 0 || this.y + this.height >= canvas.height) {
        this.dy *= -1;
      }
    }
  }
  
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');
  
  const player = new GameObject(50, 50, 50, 50, 'blue', 0, 0);
  const autonomousObject = new GameObject(200, 200, 30, 30, 'red', 2, 2);
  
  function detectCollision(obj1, obj2) {
    return obj1.x < obj2.x + obj2.width &&
           obj1.x + obj1.width > obj2.x &&
           obj1.y < obj2.y + obj2.height &&
           obj1.y + obj1.height > obj2.y;
  }
  
  function handleCollision() {
    if (detectCollision(player, autonomousObject)) {
      canvas.style.backgroundColor = 'yellow';
      player.width -= 5;
      player.height -= 5;
      autonomousObject.width -= 5;
      autonomousObject.height -= 5;
    } else {
      canvas.style.backgroundColor = 'white';
    }
  }
  
  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    player.draw(ctx);
    autonomousObject.draw(ctx);
  
    player.update(canvas);
    autonomousObject.update(canvas);
  
    handleCollision();
  
    requestAnimationFrame(update);
  }
  
  document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (key === 'ArrowUp') {
      player.dy = -3;
    } else if (key === 'ArrowDown') {
      player.dy = 3;
    } else if (key === 'ArrowLeft') {
      player.dx = -3;
    } else if (key === 'ArrowRight') {
      player.dx = 3;
    }
  });
  
  document.addEventListener('keyup', () => {
    player.dx = 0;
    player.dy = 0;
  });
  
  update();
  
document.addEventListener("DOMContentLoaded", function() {
    const maze = document.getElementById("maze");
    const ball = document.createElement("div");
    ball.classList.add("ball");
    maze.appendChild(ball);
    
    let ballX = 40;
    let ballY = 40;
    let score = 0;
    let remainingStars = 5;
  
    const stars = [
      { x: 180, y: 40 },
      { x: 320, y: 100 },
      { x: 480, y: 180 },
      { x: 300, y: 380 },
      { x: 120, y: 480 }
    ];
  
    stars.forEach((star, index) => {
      const starElement = document.createElement("div");
      starElement.classList.add("star");
      starElement.style.left = star.x + "px";
      starElement.style.top = star.y + "px";
      maze.appendChild(starElement);
    });
  
    const walls = [
      { x: 0, y: 0, width: 600, height: 20 },
      { x: 0, y: 0, width: 20, height: 600 },
      { x: 0, y: 580, width: 600, height: 20 },
      { x: 580, y: 0, width: 20, height: 600 },
      { x: 100, y: 0, width: 20, height: 240 },
      { x: 220, y: 100, width: 20, height: 300 },
      { x: 400, y: 180, width: 20, height: 220 },
      { x: 280, y: 320, width: 300, height: 20 },
      { x: 160, y: 380, width: 120, height: 20 },
      { x: 100, y: 400, width: 20, height: 200 },
      { x: 220, y: 400, width: 20, height: 120 },
      { x: 100, y: 540, width: 420, height: 20 }
    ];
  
    walls.forEach(wall => {
      const wallElement = document.createElement("div");
      wallElement.classList.add("wall");
      wallElement.style.left = wall.x + "px";
      wallElement.style.top = wall.y + "px";
      wallElement.style.width = wall.width + "px";
      wallElement.style.height = wall.height + "px";
      maze.appendChild(wallElement);
    });
  
    const scoreboard = document.getElementById("scoreboard");
    const sign = document.getElementById("sign");
  
    function updateScore() {
      scoreboard.textContent = "Score: " + score;
    }
  
    function moveBall(dx, dy) {
      const newX = ballX + dx;
      const newY = ballY + dy;
      if (isWall(newX, newY)) {
        return;
      }
  
      ballX = newX;
      ballY = newY;
      ball.style.left = ballX + "px";
      ball.style.top = ballY + "px";
  
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        if (ballX >= star.x - 10 && ballX <= star.x + 10 && ballY >= star.y - 10 && ballY <= star.y + 10) {
          score += 100;
          remainingStars--;
          stars.splice(i, 1);
          maze.removeChild(maze.childNodes[i + 1]);
          updateScore();
          if (remainingStars === 0) {
            sign.style.display = "block";
          }
        }
      }
    }
  
    function isWall(x, y) {
      for (let i = 0; i < walls.length; i++) {
        const wall = walls[i];
        if (
          x >= wall.x && 
          x <= wall.x + wall.width &&
          y >= wall.y &&
          y <= wall.y + wall.height
        ) {
          return true;
        }
      }
      return false;
    }
  
    document.addEventListener("keydown", function(event) {
      switch (event.key) {
        case "ArrowLeft":
          moveBall(-10, 0);
          break;
        case "ArrowRight":
          moveBall(10, 0);
          break;
        case "ArrowUp":
          moveBall(0, -10);
          break;
        case "ArrowDown":
          moveBall(0, 10);
          break;
      }
    });
  });
  
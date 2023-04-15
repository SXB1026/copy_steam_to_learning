const canvas = document.getElementById("game");
const context = canvas.getContext("2d");
const tileSize = 20;
const startButton = document.getElementById("startButton");

let snake = [{ x: 3, y: 1 }];
let food = { x: 7, y: 7 };
let direction = { x: 1, y: 0 };

function startGame() {
  snake = [{ x: 3, y: 1 }];
  direction = { x: 1, y: 0 };
  update();
  draw();
}

function update() {
  const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };

  // Check if the snake hits the wall or itself
  if (
    head.x < 0 ||
    head.x >= canvas.width / tileSize ||
    head.y < 0 ||
    head.y >= canvas.height / tileSize ||
    snake.some((segment) => segment.x === head.x && segment.y === head.y)
  ) {
    // Reset the game by calling startGame
    startGame();
    return;
  }

  if (head.x === food.x && head.y === food.y) {
    // Generate new food location
    food.x = Math.floor(Math.random() * (canvas.width / tileSize));
    food.y = Math.floor(Math.random() * (canvas.height / tileSize));
  } else {
    snake.pop();
  }

  snake.unshift(head);

  setTimeout(update, 100);
}

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Draw snake
  context.fillStyle = "green";
  for (const segment of snake) {
    context.fillRect(segment.x * tileSize, segment.y * tileSize, tileSize, tileSize);
    context.strokeRect(segment.x * tileSize, segment.y * tileSize, tileSize, tileSize);
  }

  // Draw food
  context.fillStyle = "red";
  context.fillRect(food.x * tileSize, food.y * tileSize, tileSize, tileSize);
  context.strokeRect(food.x * tileSize, food.y * tileSize, tileSize, tileSize);
  
  requestAnimationFrame(draw);
  }
  
  startButton.addEventListener("click", startGame);
  
  document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp" && direction.y === 0) {
  direction = { x: 0, y: -1 };
  } else if (event.key === "ArrowDown" && direction.y === 0) {
  direction = { x: 0, y: 1 };
  } else if (event.key === "ArrowLeft" && direction.x === 0) {
  direction = { x: -1, y: 0 };
  } else if (event.key === "ArrowRight" && direction.x === 0) {
  direction = { x: 1, y: 0 };
  }
  });
  
  // This call is necessary to draw the initial state of the canvas
  draw();

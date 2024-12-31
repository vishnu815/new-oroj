// Elements
const chariot = document.getElementById('chariot');
const obstacle = document.getElementById('obstacle');
const scoreDisplay = document.getElementById('score');
const jumpButton = document.getElementById('jump-button');

// Variables
let isJumping = false;
let score = 0;

 

// Jump functionality
jumpButton.addEventListener('click', () => {
  if (!isJumping) {
    isJumping = true;
    chariot.classList.add('jump');
    setTimeout(() => {
      chariot.classList.remove('jump');
      isJumping = false;
    }, 500);
  }
});

// Collision detection (to collect snowballs)
function checkCollision() {
  const chariotRect = chariot.getBoundingClientRect();
  const obstacleRect = obstacle.getBoundingClientRect();

  if (
    chariotRect.right > obstacleRect.left &&
    chariotRect.left < obstacleRect.right &&
    chariotRect.bottom > obstacleRect.top &&
    chariotRect.top < obstacleRect.bottom
  ) {
    collectSnowball();
  }
}

// Handle collecting the snowball
function collectSnowball() {
  score += 1; // Increase score
  scoreDisplay.textContent = `Score: ${score}`;

  // Reset snowball to a random position
  obstacle.style.right = `${Math.random() * window.innerWidth}px`;
  obstacle.style.bottom = `${Math.random() * (window.innerHeight - 200) + 100}px`;
}

// Start game
function startGame() {
  obstacle.style.animation = 'moveObstacle 3s linear infinite, moveUpDown 2s ease-in-out infinite';
  setInterval(checkCollision, 100); // Check collision every 100ms
}

// Start the game on page load
window.onload = startGame;

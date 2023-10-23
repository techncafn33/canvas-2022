const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Function to generate a random integer within a range
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a random color in RGB format
function getRandomColor() {
  const r = getRandomInt(0, 255);
  const g = getRandomInt(0, 255);
  const b = getRandomInt(0, 255);
  return `rgb(${r}, ${g}, ${b})`;
}

// Function to draw random lines
function drawRandomLines() {
  const numLines = 100; // You can adjust the number of lines
  for (let i = 0; i < numLines; i++) {
    const startX = getRandomInt(0, canvas.width);
    const startY = getRandomInt(0, canvas.height);
    const endX = getRandomInt(0, canvas.width);
    const endY = getRandomInt(0, canvas.height);
    const color = getRandomColor();

    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.strokeStyle = color;
    ctx.lineWidth = 2; // You can adjust the line width
    ctx.stroke();
  }
}

// Call the function to draw random lines
drawRandomLines();









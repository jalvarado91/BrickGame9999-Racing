"use strict";

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var midX = canvas.width/2;
var midY = canvas.height/2;

/* Grid Class
 ********************/
function Grid(width, height) {
  this.width = width || 0;
  this.height = height || 0;
  this.cell = [[]];
}


/* Updating Functions
 ********************/


/* Drawing Functions
 ********************/



/* Misc Utilities */
function drawCircle(object) {
  ctx.fillStyle = object.drawColor;
  ctx.beginPath();
  ctx.arc(object.position.x, object.position.y, objectSize, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
}


/* Variables that use classes defined 
 * above placed here due to hoisting 
 *************************************/

// Brick Game 9999 in One's screen res was 10x20
var theGrid = new Grid(10, 20);



/* Loop Sequence */ 
function loop() {
  clear();
  update();
  draw();
  queue();
}

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function update() {
 // addParticles();
  //plotParticles(canvas.width, canvas.height);
}

function draw() {
  
}

function queue() {
  window.requestAnimationFrame(loop);
}

loop();
"use strict";

var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
setTimeout(function() {
  canvas.height = window.innerHeight;
}, 0);

var ctx = canvas.getContext('2d');

var midX = canvas.width/2;
var midY = canvas.height/2;

/* Grid Class
 ********************/
function Grid(width, height) {
  this.width = width || 0;
  this.height = height || 0;
  this.cells = create2DArray(width, height);
}

Grid.prototype.draw = function(cellSize, cellBorderWidth) {
  var cellSize = cellSize || 2;
  var cellBorderWidth = cellBorderWidth*5 || 1;
  for (var i = 0; i < this.width; i++) {
    for (var j = 0; j < this.height; j++) {
      
      if ( this.cells[i][j] == 1) {
        drawRectangle(i*cellSize, j*cellSize, cellSize, cellSize, '#141414');
        drawRectangle(i*cellSize + cellBorderWidth, j*cellSize + cellBorderWidth, 
                      //multiply by 2 to account for translation of orig coords
                      cellSize - cellBorderWidth*2, cellSize - cellBorderWidth*2, 'white');
      }
      else {
        drawRectangle(i*cellSize, j*cellSize, cellSize, cellSize, '#141414');
      }
   
    }
  }  
};

/* Car Class
 * A car has a width of two 3 cells and a height of 4 cells
 ********************/
function Car(top_left_x, top_left_y) {
  this.bound_tx = top_left_x;
  this.bound_ty = top_left_y;
  this.bound_bx = top_left_x + 3;
  this.bound_by = top_left_y + 4;
}
Car.prototype.draw = function(grid){
  //   x
  //  xxx
  //   x
  //  x x
  grid.cells[this.bound_tx + 1][this.bound_ty] = 1;   
  
  grid.cells[this.bound_tx    ][this.bound_ty + 1] = 1;
  grid.cells[this.bound_tx + 2][this.bound_ty + 1] = 1;
  grid.cells[this.bound_tx + 1][this.bound_ty + 1] = 1;
  
  grid.cells[this.bound_tx + 1][this.bound_ty + 2] = 1;
  
  grid.cells[this.bound_tx    ][this.bound_ty + 3] = 1;
  grid.cells[this.bound_tx + 2][this.bound_ty + 3] = 1;
}

/* Updating Functions
 ********************/


/* Drawing Functions
 ********************/



/* Misc Utilities */
function drawRectangle(x, y, width, height, fillColor, borderColor, borderWidth){
  ctx.beginPath();
  ctx.rect(x, y, width, height);
  ctx.fillStyle = fillColor || '#141414';
  ctx.fill();
  ctx.lineWidth = borderWidth || 1;
  ctx.strokeStyle = borderColor || 'white';
  ctx.stroke();
}

function drawCircle(object) {
  ctx.fillStyle = object.drawColor;
  ctx.beginPath();
  ctx.arc(object.position.x, object.position.y, objectSize, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
}
function create2DArray(width, height) {
    var arr = [];
    for(var x = 0; x < width; x++){
      arr[x] = [];    
      for(var y = 0; y < height; y++){ 
          arr[x][y] = 0;    
      }
    }
    return arr;
}

/* Variables that use classes defined 
 * above placed here due to hoisting 
 *************************************/

// Brick Game 9999 in One's screen res was 10x20
var theGrid = new Grid(10, 20);
var playerCar = new Car(5,16);
var secondCar = new Car(2, 5);

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
  //addParticles();
  //plotParticles(canvas.width, canvas.height);
}

function draw() {
  theGrid.draw(30, 1);
  playerCar.draw(theGrid);
  secondCar.draw(theGrid);
}

function queue() {
  window.requestAnimationFrame(loop);
}

loop();

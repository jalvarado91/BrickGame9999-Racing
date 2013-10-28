"use strict";

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var reset = document.querySelector('button');

reset.onclick = resetCounts;

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var numOfOutcomes = 20;
var growthSpeed = 3;

function resetCounts() {
  randomCounts = countsArray(numOfOutcomes);
}
var randomInt = function(upperBound) {
  return (Math.floor(Math.random()*upperBound));
}
var countsArray = function(numOfOutcomes) {
  var counts = new Array(numOfOutcomes);
  for (var i = 0; i < counts.length; i++) {
    counts[i] = 0;
  }
  return counts;
}
function addRandomCount() {
  var index = randomInt(numOfOutcomes);
  randomCounts[index] = randomCounts[index] + growthSpeed;
}


var randomCounts = countsArray(numOfOutcomes);

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
  addRandomCount();
}

function draw() {
  var w = canvas.width/numOfOutcomes;
  ctx.beginPath();
  for (var i = 0; i < randomCounts.length; i++) {
    ctx.rect(i*w, (canvas.height-randomCounts[i]), w-1, randomCounts[i]);
  }
  ctx.fillStyle = '#EFE242';
  ctx.fill();
  ctx.lineWidth = 3;
  ctx.strokeStyle = '#EF9D42';
  ctx.stroke();
}

function queue() {
  window.requestAnimationFrame(loop);
}

loop();
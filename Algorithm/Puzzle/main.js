var puzzle;

document.addEventListener("DOMContentLoaded", function() {
  var start = document.querySelector("#start");
  start.addEventListener("click", function(evt){
    var number = evt.target.previousElementSibling.value * 1;
    console.log(number);
    if(Number.isNaN(number) || number <= 1) return;
    puzzle = new Puzzle(number);
    puzzle.deletePuzzle();
    puzzle.makePuzzle();
  });

  var outBox = document.querySelector(".outBox");
  outBox.addEventListener("click", function(evt) {

    if(evt.target === outBox.children[puzzle.blank-puzzle.row]) {
      outBox.insertBefore(outBox.children[puzzle.blank], evt.target);
      outBox.insertBefore(evt.target, outBox.children[puzzle.blank+1]);

      puzzle.movePuzzle(puzzle.dir[0]);
      puzzle.endPuzzle();
      return;
    }
    if(evt.target === outBox.children[puzzle.blank-1] && Math.floor(puzzle.blank/puzzle.row) === Math.floor((puzzle.blank-1)/puzzle.row)) {
      outBox.insertBefore(outBox.children[puzzle.blank], evt.target);

      puzzle.movePuzzle(puzzle.dir[1]);
      puzzle.endPuzzle();
      return;
    }
    if(evt.target === outBox.children[puzzle.blank+1] && Math.floor(puzzle.blank/puzzle.row) === Math.floor((puzzle.blank+1)/puzzle.row)) {
      outBox.insertBefore(evt.target, outBox.children[puzzle.blank]);

      puzzle.movePuzzle(puzzle.dir[2]);
      puzzle.endPuzzle();
      return;
    }
    if(evt.target === outBox.children[puzzle.blank+puzzle.row]) {
      outBox.insertBefore(outBox.children[puzzle.blank], evt.target);
      outBox.insertBefore(evt.target, outBox.children[puzzle.blank]);

      puzzle.movePuzzle(puzzle.dir[3]);
      puzzle.endPuzzle();
      return;
    }
    return;

  });

});

var Puzzle = function(number) {
  this.row = number;
  this.number = number * number;
  this.array = [];
  this.blank = this.number-1;
  this.mix = this.number * this.number;
  this.dir = ["up", "left", "right", "down"];
  this.inWidth = 50;
  this.inHeight = 50;
  this.outWidth = number * this.inWidth;
  this.outHeight = number * this.inHeight;
  this.count = 0;
};

Puzzle.prototype.deletePuzzle = function() {
  var outBox = document.querySelector(".outBox");
  outBox.innerHTML = "";
};

Puzzle.prototype.makePuzzle = function() {
  var i = 0;
  var outBox = document.querySelector(".outBox");
  outBox.style.width = this.outWidth+"px";
  outBox.style.height = this.outHeight+"px";

  for(var j = 0; j < this.number; j++) {
    var inBox = document.createElement("div");
    inBox.classList.add("inBox");
    inBox.style.width = this.inWidth+"px";
    inBox.style.height = this.inHeight+"px";
    inBox.style.lineHeight = this.inHeight+"px";
    outBox.appendChild(inBox);

    this.array[j] = j+1;
  }

  var index = Math.floor(Math.random() * this.mix + this.mix/2);

  do {
    var mix = Math.floor(Math.random() * 4);

    puzzle.movePuzzle(this.dir[mix]);
    i++;

  }while(i<index)


  for(var k = 0; k < this.number; k++) {
    outBox.children[k].innerText = this.array[k];
  }

  outBox.children[this.array.indexOf(this.number)].innerText = "";
};

Puzzle.prototype.movePuzzle = function(dir) {
  switch(dir) {
    case "up":
    if(this.blank-this.row >= 0) {
      this.array[this.blank] = this.array[this.blank-this.row]
      this.array[this.blank-this.row] = this.number;
      this.blank = this.blank-this.row;
    }
    break;

    case "left":
    if(Math.floor(this.blank/this.row) === Math.floor((this.blank-1)/this.row) && this.blank-1 >=0) {
      this.array[this.blank] = this.array[this.blank-1]
      this.array[this.blank-1] = this.number;
      this.blank = this.blank-1;
    }
    break;

    case "right":
    if(Math.floor(this.blank/this.row) === Math.floor((this.blank+1)/this.row) && this.blank+1 < this.number) {
      this.array[this.blank] = this.array[this.blank+1]
      this.array[this.blank+1] = this.number;
      this.blank = this.blank+1;
    }
    break;

    case "down":
    if(this.blank+this.row < this.number) {
      this.array[this.blank] = this.array[this.blank+this.row]
      this.array[this.blank+this.row] = this.number;
      this.blank = this.blank+this.row;
    }
    break;
  }
};

Puzzle.prototype.endPuzzle = function() {
  this.count++;
  console.log(this.count);
  for(var z = 0; z < this.number-1; z++) {

    if(this.array[z+1]-this.array[z] !==1) return;
  }
  setTimeout(function() {
    alert("congratulations!! You move " + puzzle.count);
  }, 200);
};

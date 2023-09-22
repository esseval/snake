const Display = function (canvas) {

  this.buffer  = document.createElement("canvas").getContext("2d"),
  this.context = canvas.getContext("2d");
  this.buffer.canvas.width = this.context.canvas.width; 
  this.buffer.canvas.height = this.context.canvas.height; 

  this.drawRectangle = function (x, y, width, height, color) {
    this.buffer.fillStyle = color;
    this.buffer.fillRect(Math.floor(x), Math.floor(y), width, height);
  };

  this.drawBoard = function (board) {
    this.buffer.fillStyle = board.background;
    this.buffer.fillRect(
      0,
      0,
      this.buffer.canvas.width,
      this.buffer.canvas.height
    );
  };

  this.drawPlayer = function (player) {
    this.drawRectangle (player.x, player.y, player.width, player.height, player.color2); 
    this.drawRectangle (player.x + 2, player.y + 2, player.width - 4, player.height - 4, player.color1); 
  }

  this.drawFood = function (food) {
    this.drawRectangle (food.x, food.y, food.width, food.height, food.color); 
  }

  this.render = function () {

    this.context.drawImage(
      this.buffer.canvas,
      0,
      0,
      this.buffer.canvas.width,
      this.buffer.canvas.height,
      0,
      0,
      this.context.canvas.width,
      this.context.canvas.height
    );
  };
};

Display.prototype = {
  constructor: Display,
};

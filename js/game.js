const Game = function (canvas) {
  this.over = false;
  this.points = 0;
  this.board = new Game.Board(canvas);

  this.update = function () {
    this.board.update();
  };
};

Game.prototype = { constructor: Game };

Game.Board = function (canvas) {
  this.width = canvas.width;
  this.height = canvas.height;
  this.background = "white";
  this.blockSize = 20;
  this.player = new Game.Board.Player(this);
  this.food = new Game.Board.Food(this);
};

Game.Board.prototype = {
  constructor: Game.Board,

  collideObject: function (object) {
    // ...
    //console.log("collideObject");
  },

  eatFood: function (object) {
    // ...
    //console.log("eatFood");
  },

  update: function () {
    this.player.update();
    this.food.update();
    this.eatFood(this.food);
    this.collideObject(this.player);
  },
};

Game.Board.Player = function (board) {
  this.color1 = "lightgreen";
  this.color2 = "black";
  this.height = board.blockSize;
  this.width = board.blockSize;
  this.blockSize = board.blockSize;

  this.velocity_x = 0;
  this.velocity_y = 0;
  this.x = 100;
  this.y = 50;
};

Game.Board.Player.prototype = {
  constructor: Game.Board.Player,

  moveLeft: function () {
    this.velocity_y = 0;
    this.velocity_x = -this.blockSize;
  },
  moveRight: function () {
    this.velocity_y = 0;
    this.velocity_x = this.blockSize;
  },
  moveUp: function () {
    this.velocity_y = -this.blockSize;
    this.velocity_x = 0;
  },
  moveDown: function () {
    this.velocity_y = this.blockSize;
    this.velocity_x = 0;
  },

  update: function () {
    this.x += this.velocity_x;
    this.y += this.velocity_y;
  },
};

Game.Board.Food = function (board) {
  this.color = "red";
  this.height = board.blockSize;
  this.width = board.blockSize;
  this.blockSize = board.blockSize;
  this.x; 
  this.y; 

  this.create(board); 
};

Game.Board.Food.prototype = {
  constructor: Game.Board.Food,

  create: function (board) {
    /**
     * Obtener número aleatorio.
     * @param {Number} min Límite mínimo.
     * @param {Number} max Límite máximo.
     * @returns {Number}
     */
    function randomFood(min, max, unit) {
      const randNum =
        Math.round((Math.random() * (max - min) + min) / unit) * unit;
      return randNum;
    }

    // Obtener coordenadas para posicionar la Comida.
    this.x = randomFood(0, board.width - board.blockSize, this.blockSize);
    this.y = randomFood(0, board.height - board.blockSize, this.blockSize);
  },

  update: function () {},
};

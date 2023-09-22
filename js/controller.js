const Controller = function () {
  // Controles del Juego
  this.left = new Controller.ButtonInput();
  this.right = new Controller.ButtonInput();
  this.up = new Controller.ButtonInput();
  this.down = new Controller.ButtonInput();
  this.space = new Controller.ButtonInput();
  this.escape = new Controller.ButtonInput();

  // Manejador
  this.keyDownUp = function (type, key_code) {
    // Teclas
    const LEFT = 37;
    const UP = 38;
    const RIGHT = 39;
    const DOWN = 40;
    const SPACE = 32;
    const ESCAPE = 27;

    // ...
    let down = type == "keydown" ? true : false;

    // ...
    switch (key_code) {
      case ESCAPE:
        this.escape.getInput(down);
        break;
      case SPACE:
        this.space.getInput(down);
        break;
      case LEFT:
        this.left.getInput(down);
        break;
      case UP:
        this.up.getInput(down);
        break;
      case RIGHT:
        this.right.getInput(down);
        break;
      case DOWN:
        this.down.getInput(down);
    }
  };
};

Controller.prototype = {
  constructor: Controller,
};

Controller.ButtonInput = function () {
  this.active = this.down = false;
};

Controller.ButtonInput.prototype = {
  constructor: Controller.ButtonInput,

  getInput: function (down) {
    if (this.down != down) this.active = down;
    this.down = down;
  },
};

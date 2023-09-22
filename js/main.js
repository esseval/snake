window.addEventListener("load", function (event) {

  "use strict";

  /**
   * Funciones.
   */
  var keyDownUp = function (event) {
    controller.keyDownUp(event.type, event.keyCode);

    if (controller.space.active && false == engine.running) {
        controller.space.active = false; 
        engine.start();
    }

    if (controller.escape.active || game.over) {
        controller.escape.active = false; 
        engine.stop();
    }
  };

  var render = function () {
    display.drawBoard(game.board);
    display.drawFood(game.board.food);
    display.drawPlayer(game.board.player);
    display.render();
  };

  var update = function () {
    if (controller.left.active) {
      game.board.player.moveLeft();
    }
    if (controller.right.active) {
      game.board.player.moveRight();
    }
    if (controller.up.active) {
        game.board.player.moveUp();
    }
    if (controller.down.active) {
      game.board.player.moveDown();
    }
  
    game.update();
  };

  /**
   * Algunas Constantes.
   */
  const gameBoard = document.querySelector("#gameBoard");
  const fps = 24; 
  const step = 1000 / fps; 

  var controller = new Controller();
  var display    = new Display(gameBoard);
  var game       = new Game(gameBoard);
  var engine     = new Engine(step, render, update);

  // Eventos 
  window.addEventListener("keydown", keyDownUp);
  window.addEventListener("keyup",   keyDownUp);
});

const Engine = function(time_step, update, render) {
    this.running = false; 
    this.update = update; 
    this.render = render; 
    this.time_step = time_step; 
};

Engine.prototype = {

    constructor:Engine,
  
    start: function() {
        this.running = true; 
        this.run(); 
    },

    run: function() {
        if (this.running) {
            setTimeout(() => {
                this.update(); 
                this.render();
                this.run(); 
            }, this.time_step); 
        }
    },
  
    stop: function() {
        this.running = false; 
    }
}
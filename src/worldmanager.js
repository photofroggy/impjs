
/**
 * World manager. Manages the physical world of the game.
 * 
 * @class imp.WorldManager
 * @constructor
 */
imp.WorldManager = function( game ) {

    this.game = game;
    this.backgroundcolor = 0xFFFFFF;
    this.physics = Physics();
    this.physics.pause();
    
    var world = this;
    
    Physics.util.ticker.subscribe(function( time, dt ){

        world.physics.step( time );

        // only render if not paused
        if ( !world.physics.isPaused() ){
            world.physics.render();
        }
    });

};

/**
 * Add an item to the game world.
 * 
 * @method add
 */
imp.WorldManager.prototype.add = function( item ) {

    this.physics.add( item );

};

/**
 * Start the physics engine.
 * 
 * @method start
 */
imp.WorldManager.prototype.start = function(  ) {

    Physics.util.ticker.start();

};


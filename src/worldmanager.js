
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
 * Step through the simulation.
 * 
 * @method step
 */
imp.WorldManager.prototype.step = function( time ) {

    if( this.physics.isPaused() )
        return;
    
    this.physics.step( time );
    this.physics.render();

};


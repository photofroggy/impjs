
/**
 * Object representing a game.
 * 
 * @class imp.Game
 * @constructor
 * @param name {String} Name of the game
 * @param width {Integer} Width of the viewport in pixels
 * @param height {Integer} Height of the viewport in pixels
 * @param container {Object} DOM element to display the game in
 */
imp.Game = function( name, width, height, container ) {

    this.name = name;
    this.width = width;
    this.height = height;
    this.container = container;
    this.events = new EventEmitter;
    
    this.stage = null;
    this.view = null;
    this.renderer = null;
    
    // TODO: sub objects
    //this.asset = imp.AssetManager( this );
    //this.sprite = imp.SpriteManager( this );
    //this.texture = imp.TextureManager( this );
    //this.input = imp.InputManager( this );
    //this.tile = imp.TileManager( this );
    
    this.world = new imp.WorldManager( this );

};

/**
 * Set an event listener.
 * 
 * @method on
 * @param event {String} Event to listen for
 * @param handler {Function} Event handler
 */
imp.Game.prototype.on = function( event, handler ) {

    this.events.addListener( event, handler );

};

/**
 * Emit an event.
 * 
 * @method emit
 * @param event {String} Event to emit
 * @param data {Object} Event data
 */
imp.Game.prototype.emit = function( event, data ) {

    this.events.emit( event, data, this );

};

/**
 * Start the game.
 * 
 * @method start
 */
imp.Game.prototype.start = function(  ) {

    this.emit( 'start', { name: 'start' } );
    
    this.renderer = imp.createRenderer( {
        width: this.width,
        height: this.height,
        backgroundcolor: this.world.backgroundcolor,
        game: this
    } );
    
    this.world.add( this.renderer );
    this.world.start();

};

/**
 * Set the pixi stage for the game.
 * 
 * @method setStage
 */
imp.Game.prototype.setStage = function( stage ) {

    this.stage = stage;

};

/**
 * Render the pixi view for the game.
 * 
 * @method renderView
 */
imp.Game.prototype.renderView = function( view ) {

    this.view = view;
    this.container.appendChild( this.view );

};

/**
 * Initialised PhysicsJS.
 * 
 * @method init
 */
imp.Game.prototype.init = function(  ) {

    this.emit( 'init', { name: 'init' } );

};

/**
 * Update loop.
 * 
 * @method update
 */
imp.Game.prototype.update = function( bodies ) {

    // Update objects in managers and stuff...
    this.emit( 'update', { name: 'update', bodies: bodies } );

};

/**
 * Render the game.
 * 
 * @method render
 */
imp.Game.prototype.render = function(  ) {

    this.emit( 'render', { name: 'render' } );

};


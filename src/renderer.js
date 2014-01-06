
/**
 * PhysicsJS renderer.
 * 
 * @class imp.Renderer
 * @constructor
 */
imp.Renderer = function( parent ) {

    this.parent = parent;
    
    this.options = {};
    this.defaults = {
        width: 400,
        height: 300,
        backgroundcolor: 0xFFFFFF,
        game: null
    };
    
    this.game = null;
    this.stage = null;
    this.pixi = null;

};

/**
 * Initialise rendering.
 * 
 * @method init
 */
imp.Renderer.prototype.init = function( options ) {

    options = Physics.util.extend( this.defaults, options );
    this.parent.init.call(this, options);
    
    if( options.game == null )
        throw Error( 'No game given to PhysicsJS renderer' );
    
    this.game = options.game;
    this.stage = new PIXI.Stage( options.backgroundcolor );
    this.pixi = PIXI.autoDetectRenderer( options.width, options.height );
    this.game.setStage( this.stage );
    this.game.renderView( this.pixi.view );

};

/**
 * Render the scene.
 * 
 * @method render
 */
imp.Renderer.prototype.render = function( bodies, meta ) {
            
    this._world.publish({
        topic: 'beforeRender',
        renderer: this,
        bodies: bodies,
        meta: meta
    });

    if (this.options.meta){
        this.drawMeta( meta );
    }

    this.drawScene( bodies );

};

/**
 * Draw the scene.
 * 
 * @method drawScene
 */
imp.Renderer.prototype.drawScene = function( bodies ) {

    // TODO: Render the changes in positions
    this.game.update( bodies );
    this.game.render(  );
    this.pixi.render( this.stage );

};

/**
 * Draw meta data.
 * 
 * @method drawMeta
 */
imp.Renderer.prototype.drawMeta = function( meta ) {



};


/**
 * Set up the renderer with PhysicsJS.
 */
imp.setRenderer = function(  ) {

    Physics.renderer( 'impjs', function( parent ) {
    
        return new imp.Renderer( parent );
    
    } );

};


/**
 * Create a new PhysicsJS renderer.
 */
imp.createRenderer = function( options ) {

    return Physics.renderer( 'impjs', options );

};

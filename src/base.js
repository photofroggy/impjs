

/**
 * imp game library.
 */
var imp = {

    VERSION: '0.0.0',
    NAME: 'imp',
    games: {},
    store: null,
    running: false,
    hooked: false

};


/**
 * Create a new game object
 */
imp.createGame = function( name, width, height, container ) {

    imp.createStore();
    var game = new imp.Game( name, width, height, container );
    imp.games[name] = game;
    return game;

};


/**
 * Create store area.
 */
imp.createStore = function(  ) {

    if( imp.store != null )
        return imp.store;
    
    imp.setRenderer();
    imp.store = new imp.Store;
    return imp.store;

};


/**
 * imp main loop.
 */
imp.mainLoop = function( time ) {

    for( var key in imp.games ) {
    
        if( !imp.games.hasOwnProperty( key ) )
            continue;
        
        imp.games[key].step( time );
    
    }

};


/**
 * Hook in the main loop.
 */
imp.hookMainLoop = function(  ) {

    if( imp.hooked )
        return;
    
    Physics.util.ticker.subscribe(function( time, dt ){
        imp.mainLoop( time );
    });
    
    imp.hooked = true;

};


/**
 * Hook in the main loop.
 */
imp.startMainLoop = function(  ) {

    if( imp.running )
        return;
    
    imp.hookMainLoop();
    Physics.util.ticker.start();
    imp.running = true;

};

/**
 * Stop main loop.
 */
imp.stopMainLoop = function(  ) {

    if( !imp.running )
        return;
    
    Physics.util.ticker.stop();
    imp.running = false;

};


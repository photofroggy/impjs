

/**
 * imp game library.
 */
var imp = {

    VERSION: '0.0.0',
    NAME: 'imp',
    games: {},
    store: null

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


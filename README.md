impjs
=====

Thin wrapper combining pixi.js and PhysicsJS

Example:
```javascript
var game = imp.createGame( 'example', 400, 300, document.body );

// Do stuff when initialising the game.
game.on( 'init', function( event, game ) {} );

// Do stuff in our update loop.
game.on( 'update', function( event, game ) {} );

// Do stuff before rendering happens
game.on( 'render', function( event, game ) {} );

// Start the game.
game.start();

```
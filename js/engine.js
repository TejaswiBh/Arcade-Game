/*  This file provides the initial game board on the screen, and then calls the update and render methods on the player and enemy objects (provided in the app.js file).*/
var Engine = (function(global) {   /*this engine function draws the entire game screen and the entire "scene is being drawn. This engine makes the canvas' context (ctx) object globally available*/
    var doc = global.document,
        win = global.window,
        canvas = doc.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        lastTime;
    canvas.width = 505;
    canvas.height = 606;
    doc.body.appendChild(canvas);
    function main() {        /* This function properly calls the update and render methods.*/
        var now = Date.now(),
            dt = (now - lastTime) / 1000.0;   /* obtain time delta information which is required if the game requires smooth animation.*/
        update(dt);
        render();
        lastTime = now;   /* Set the lastTime variable which is used to determine the time delta*/
        win.requestAnimationFrame(main);   /*this function is called by the browser's requestAnimationFrame function as soon as the browser is able to draw another frame.*/
    }
    function init() {      /* This function sets the lastTime variable that is required for the game loop which should occur only once in the game*/
        reset();
        lastTime = Date.now();
        main();
    }
    function update(dt) {    /*this function calls the  updateEntities function which implements collision detection on the entities themselves within app.js file).*/
        updateEntities(dt);
    }
    function updateEntities(dt) {      /* loops through all of the objects within allEnemies defined in app.js and calls update() methods and then call the update function for the player object.*/
        allEnemies.forEach(function(enemy) {
            enemy.update(dt);
        });
        player.update();
    }
    function render() {    /* This function  draws the 'game level' and then calls the renderEntities function.*/
        var rowImages = [   /* This array holds the relative image path  used for that particular row of the game.*/
                'images/water-block.png',   // Top row is water
                'images/stone-block.png',   // Row 1 of 3 is stone
                'images/stone-block.png',   // Row 2 of 3 is stone
                'images/stone-block.png',   // Row 3 of 3 is stone
                'images/grass-block.png',   // Row 1 of 2 is grass
                'images/grass-block.png'    // Row 2 of 2 is grass
            ],
            numRows = 6,
            numCols = 5,
            row, col;
        ctx.clearRect(0,0,canvas.width,canvas.height);  // Before drawing, clearing existing canvas
        for (row = 0; row < numRows; row++) {
            for (col = 0; col < numCols; col++) {
                ctx.drawImage(Resources.get(rowImages[row]), col * 101, row * 83);  /*this function draws the given image at x,y positions(in the given three parameters)*/
            }
        }
        renderEntities();
    }
    function renderEntities() {    /* This function purpose is to call the render function for each enemy in allEnemies and player entities within app.js*/
        allEnemies.forEach(function(enemy) {
            enemy.render();
        });
        player.render();
    }
    function reset() {     /* This function does nothing but it can be used for a new game menu or a game over screen that sorts of things.*/
    }
    Resources.load([  /*loading all of the images that are needed in the game */
        'images/stone-block.png',
        'images/water-block.png',
        'images/grass-block.png',
        'images/enemy-bug.png',
        'images/char-princess-girl.png'
    ]);
    Resources.onReady(init);   /* setting init as the callback method so that when the images are properly loaded our game will start.*/
    global.ctx = ctx;   /* Assigning the canvas context object to the global variable */
})(this);

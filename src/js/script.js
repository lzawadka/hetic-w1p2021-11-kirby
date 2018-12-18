var direction;
var nextDirection;
var floor;
var speed = 100;
var portalPosition;
var size = 300;
var portal;
var opposites = {
  // Usefull to calculate an impossible turn
  left: 'right',
  up: 'down',
  right: 'left',
  down: 'up',
};
var portalPosition;

/* CLIC PASSAGE AU JEU */
oxo.inputs.listenKey('enter', function() {
  if (oxo.screens.getCurrentScreen !== 'game') {
    oxo.screens.loadScreen('game');
  }
});
/* CLIC PASSAGE AU JEU */

/* Move of obstacle */


portal = document.getElementById('portal');
oxo.animation.move(portal, 'right', speed * (1));
portalPosition = oxo.animation.getPosition(portal);

oxo.inputs.listenArrowKeys(function(key) {

  if (key !== opposites[direction]) {
    nextDirection = key;
  }
});

direction = nextDirection = 'right';
  oxo.animation.move(portal, direction, size, true); 
  portalPosition = oxo.animation.getPosition(portal);

  /* Move of obstacle */

/* move of the character */

/* move of the character */


var direction;
var nextDirection;
var floor;
var speed = 100;
var portalPosition;
var size = 300;
var gravity = 1;  //Speed of falling
var time;
var flying = true;
var chutInterval;
var directionDown = 'down';


/* CLIC PASSAGE AU JEU */
oxo.inputs.listenKeyOnce('enter', function() {
  if (oxo.screens.getCurrentScreen !== 'game') {
    oxo.screens.loadScreen('game', game);
  }
});
/* CLIC PASSAGE AU JEU */

/* Move of obstacle */

/* Move of obstacle */

/* move of the character */

function game() {
  chutInterval = setInterval(player, 1)

  var portal = document.getElementById('portal');   //platform object
  oxo.animation.setPosition(portal, {x: 0, y: 550});

  var character = document.getElementById('character');     //player object
  oxo.animation.setPosition(character, {x: 100, y: 550});


  

  //time = setInterval(down, gravity); 

    if ( flying === true) {
      oxo.animation.move(character, 'down', 10);
    };

    oxo.inputs.listenArrowKeys(function(key) {
      if ( key === 'down' ) {
        oxo.animation.move(character, 'down', 50);
      } else if (key === 'up') {
        oxo.animation.move(character, 'up', 200);
        setTimeout(() => {
          flying = true;
        }, 300);
      }
    });

  };

  function player() {
    oxo.animation.move(character, directionDown, gravity, true);
  }

/* move of the character */

/* flip screen */


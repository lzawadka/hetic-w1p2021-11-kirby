var direction;
var nextDirection;
var floor;
var speed = 100;
var characterPosition;
var size = 300;
var gravity = 5;  //Speed of falling
var time;
var flying = true;
var chutInterval;
var directionDown = 'down';
var character;
var ground;
var obstacleInterval;

/* CLIC PASSAGE AU JEU */
oxo.inputs.listenKeyOnce('enter', function() {
  if (oxo.screens.getCurrentScreen !== 'game') {
    oxo.screens.loadScreen('game', game);
    console.log(true);
  }
});
/* CLIC PASSAGE AU JEU */

/* move of the character */

function game() {
  chutInterval = setInterval(player, 1)

  //var portal = document.getElementById('portal'); 
  //oxo.animation.setPosition(portal, {x: 0, y: 550});

  character = document.getElementById('container__character');    
  oxo.animation.setPosition(character, {x: 100, y: 550});
  //obstacleInterval = setInterval(obstacle, speed * 10);
  obstacle();
  ground = document.getElementsByClassName('floor');
  
  

  //time = setInterval(down, gravity); 

    if ( flying === true) {
      oxo.animation.move(container__character, 'down', 10);
    };

    oxo.inputs.listenArrowKeys(function(key) {
      if ( key === 'down' ) {
        oxo.animation.move(container__character, 'down', 50);
      } else if (key === 'up') {
        oxo.animation.move(container__character, 'up', 600);
        setTimeout(() => {
          flying = true;
        }, 300);
      }
    });
  };

  function player() {
    oxo.animation.move(container__character, directionDown, gravity, true);
  }


function obstacle() {
    var bonus = oxo.elements.createElement({
      obstacle: true,
      class: 'floor',
      styles: {
        transform:
          'translate(100px, 700px)',
      },
    });

    /*setInterval(function() {
    console.log(bonus);

      oxo.animation.move(bonus, 'left', 10, true);
    }, 100);*/


    
  //oxo.elements.onCollisionWithElementOnce(character, portal, function() {
    //oxo.player.addToScore(1);
  //});
  }



// COLLISION
//   time = setInterval(down, gravity); 
    
//   oxo.elements.onCollisionWithElementOnce(character, portal, function (){
//     flying = false;
//     console.log('collision');
//   });
//   if (flying === true){
//     oxo.animation.move(character,'down', 10);
//   };
//   oxo.animation.move(character,'up', 200);
//     setTimeout(() => {
//       flying = true;
//     }, 300);




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
var objInterval;
var obstacle1;

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
  chutInterval = setInterval(player, 8);
  character = document.getElementById('container__character');    
  oxo.animation.setPosition(character, {x: 100, y: 600});
  floor();
  ground = document.getElementsByClassName('floor');
  obstacle1();
  ground2 = document.getElementsByClassName('obstacle1');
  

    if ( flying === true) {
      oxo.animation.move(container__character, 'down', 5);
    };

    oxo.inputs.listenArrowKeys(function(key) {
      if ( key === 'down' ) {
        oxo.animation.move(container__character, 'down', 50);
      } else if (key === 'up' && oxo.animation.getPosition(character).y >= 600) {
        
        oxo.animation.move(container__character, 'up', 400);
        setTimeout(() => {
          flying = true;

        }, 300);
      }
    });
  };

  

function player() {
  oxo.animation.move(container__character, directionDown, gravity, true);
}


function floor() {
    var floor = oxo.elements.createElement({
      obstacle: true,
      class: 'floor',
      styles: {
        transform:
          'translate(100px, 705px)',
      },
    });     
 }

 /*setInterval(function() {
  console.log(obstacle1);

    oxo.animation.move(obstacle1, 'left', 100, true);
  });*/

 function obstacle1() {
   obstacle1 = oxo.elements.createElement({
    obstacle: true,
    class: 'obstacle1',
    styles: {
      transform:
        'translate(200px, 300px)',
    },
  });     
}



/* character moves */


// elements obj


/*setTimeout(obstacle, 1000);


function obstacleMove() {
  oxo.animation.move(obstacleEl, 'left', gravity, true);
}


 function obstacle() {
  var obstacleEl = oxo.elements.createElement({
    class: "obstacle1",
    obstacle: true
  });

  var interval = setInterval(function() {
    oxo.animation.move(obstacleEl, 'left', size, true);
  }, 10);

  oxo.elements.onLeaveScreenOnce(
    obstacleEl,
    function() {
      obstacleEl.remove();
      clearInterval(interval);
      console.log("left");
    },
    true
  );

  setTimeout(obstacle, 1000 * oxo.utils.getRandomNumber(1, 5));
} */

// elements obj


// flip 

/*var kirby = document.getElementById('container__character');
var background = document.getElementById('background');


kirby.addEventListener('click', function(){
  background.classList.toggle('background__state--second')
  kirby.classList.toggle('flip__state--second')
});

background.addEventListener('click', function(){
  background.classList.toggle('background__state--second');
  kirby.classList.toggle('flip__state--second')

  console.log(false);
});*/

// flip



    /*setInterval(function() {
    console.log(bonus);

      oxo.animation.move(bonus, 'left', 10, true);
    }, 100);*/


    
  //oxo.elements.onCollisionWithElementOnce(character, portal, function() {
    //oxo.player.addToScore(1);
  //});
  


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


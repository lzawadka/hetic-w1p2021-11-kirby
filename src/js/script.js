

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
var charPosY = 600;
var theme;
var audiojump;
var audioportal;
var audiodeath;

/* CLIC PASSAGE AU JEU */
oxo.inputs.listenKeyOnce('enter', function() {
  if (oxo.screens.getCurrentScreen !== 'game') {
    oxo.screens.loadScreen('game', game);
    console.log(true);
  }
});

/* CLIC PASSAGE AU JEU */

/* move of the character */


//Appel des fonctions
function game() {
  theme = document.getElementById('audio__theme');
  theme.volume = 0.1;
  audiojump = document.getElementById('audio__jump');
  audioportal = document.getElementById('audio__portal')
  audioportal.volume = 0.3;
  chutInterval = setInterval(player, 8);
  character = document.getElementById('container__character');    
  oxo.animation.setPosition(character, {x: 100, y: 600});
  floor();
  ground = document.getElementsByClassName('floor');
  obstacle1();
  ground2 = document.getElementsByClassName('obstacle1');
  obstacle2();
  ground3 = document.getElementsByClassName('obstacle2');
  obstacle3();
  ground4 = document.getElementsByClassName('obstacle3');
  
/* move of the character */
    if ( flying === true) {
      oxo.animation.move(container__character, 'down', 1);
    };

    oxo.inputs.listenArrowKeys(function(key) {
      console.log(flying);
      console.log(`So6: ${oxo.animation.getPosition(character).y >= 601}`);
      if ( key === 'down' ) {
        oxo.animation.move(container__character, 'down', 50);
      } else if (key === 'up' && !flying) {
        audiojump.play();
        oxo.animation.move(container__character, 'up', 600);
          charPosY -= 800;
          flying = true;
      }
    });

    setInterval(
      function() {
        var obstacles2 = document.querySelector('.obstacle2');
    
        oxo.animation.move(obstacles2, 'left', 10, true);
      }, 
      20
    );

    //Fonction obstacle
    setInterval(
      function() {
        var obstacles = document.querySelector('.obstacle1');

        oxo.animation.move(obstacles, 'left', 10, true);
      }, 
      20
      
    );

    setInterval(
      function() {
        var obstacles3 = document.querySelector('.obstacle3');

        oxo.animation.move(obstacles3, 'left', 10, true);
      }, 
      20
      
    );
      };

  
//Fonction gravité character
function player() {
  if(charPosY <= 600){
    charPosY += gravity;
  }
  oxo.animation.move(container__character, directionDown, gravity, true);
  if(flying){
    //console.log(oxo.animation.getPosition(character));
    //console.log(oxo.animation.getPosition(character).y >= 601);
    if(charPosY >= 600){
      flying = false;
    }
  }
}

//Fonction floor
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

 

 function obstacle1() {
   var obstacle1 = oxo.elements.createElement({
    obstacle: true,
    class: 'obstacle1',
    
  });     

  oxo.elements.onCollisionWithElement(character, obstacle1, function() {
    oxo.screens.loadScreen('end', function() {
    });
  });
  //oxo.animation.setPosition(obstacle1, {x: 200, y: 500});
}



 function obstacle2() {
   var obstacle2 = oxo.elements.createElement({
    obstacle: true,
    class: 'obstacle2',   
  });     
  //oxo.animation.setPosition(obstacle1, {x: 200, y: 500});

  
  oxo.elements.onCollisionWithElement(character, obstacle2, function() {
    oxo.screens.loadScreen('end', function() {
      audiodeath.play();
    });
  });
  
}

function obstacle3() {
  var obstacle3 = oxo.elements.createElement({
   obstacle: true,
   class: 'obstacle3',   
 });     
 //oxo.animation.setPosition(obstacle1, {x: 200, y: 500});

 
 oxo.elements.onCollisionWithElement(character, obstacle3, function() {
  audioportal.play();
  // oxo.screens.loadScreen('end', function() {
  //  });
 });
 
}



// death //
// creer variable ennemy pour les obstacles//
/*oxo.elements.onCollisionWithElement(character, obstacle1, function() {
  oxo.screens.loadScreen('end', function() {
  });
});*/

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




var direction;
var nextDirection;
var floor;
var speed = 100;
var characterPosition;
var size = 300;
var gravity = 7;  //Speed of falling
var time;
var flying = true;
var chutInterval;
var directionDown = 'down';
var character;
var ground;
var objInterval;
var audioJump
var theme;
var audioPortal;
var charPosY = 600;

/* CLIC PASSAGE AU JEU */

oxo.inputs.listenKeyOnce('enter', function() {
  if (oxo.screens.getCurrentScreen !== 'game') {
    oxo.screens.loadScreen('game', game);
    console.log(true);
  }
});

//Appel des fonctions

function game() {
  audioJump = document.getElementById("audio__jump");
  theme = document.getElementById('audio__theme');
  theme.volume = 0.1;
  audioPortal = document.getElementById('audio__portal')
  audioPortal.volume = 0.3;
  chutInterval = setInterval(player, 7.5);
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
  obstacle4();
  ground5 = document.getElementsByClassName('obstacle4');
  obstacle5();
  ground6 = document.getElementsByClassName('obstacle5');

//move of the character


if ( flying === true) {
  oxo.animation.move(container__character, 'down', 3);
};

oxo.inputs.listenArrowKeys(function(key) {
  console.log(flying);
  console.log(`So6: ${oxo.animation.getPosition(character).y}`);
  if ( key === 'down' ) {
    oxo.animation.move(container__character, 'down', 100);
  } else if (key === 'up' && !flying) {
    audioJump.play();
    oxo.animation.move(container__character, 'up', 600, true);
      charPosY -= 800;
      flying = true;
  }
});


//Fonction obstacle1 

setInterval(
  function() {
    var obstacles = document.querySelector('.obstacle1');
    oxo.animation.move(obstacles, 'left', 8, true);
  }, 
  20      
);
    
//Fonction obstacle2  

setInterval(
  function() {
    var obstacles2 = document.querySelector('.obstacle2');

    oxo.animation.move(obstacles2, 'left', 8, true);
  }, 
  20
);  

//Fonction obstacle3

setInterval(
  function() {
    var obstacles3 = document.querySelector('.obstacle3');

    oxo.animation.move(obstacles3, 'left', 8, true);
  }, 
  20 
);

//Fonction obstacle4

setInterval(
  function() {
    var obstacles4 = document.querySelector('.obstacle4');

    oxo.animation.move(obstacles4, 'left', 8, true);
  }, 
  20 
);

//Fonction obstacle5

setInterval(
  function() {
    var obstacles5 = document.querySelector('.obstacle5');

    oxo.animation.move(obstacles5, 'left', 8, true);
  }, 
  20 
);

//Fonction gravité character

function player() {
  if(charPosY <= 800){
    charPosY += gravity;
  }
  oxo.animation.move(container__character, directionDown, gravity, true);
  if(flying){
  if(charPosY >= 800){
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

 
//obstacle1
 function obstacle1() {
   var obstacle1 = oxo.elements.createElement({
    obstacle: true,
    class: 'obstacle1', 
  });     

  oxo.elements.onCollisionWithElement(character, obstacle1, function() {
    oxo.screens.loadScreen('end', function() {
    });
  });
}

// obstacle2
 function obstacle2() {
   var obstacle2 = oxo.elements.createElement({
    obstacle: true,
    class: 'obstacle2',   
  });     
  
  oxo.elements.onCollisionWithElement(character, obstacle2, function() {
    oxo.screens.loadScreen('end', function() {
    });
  }); 
}

// portal obstacle3
function obstacle3() {
  var obstacle3 = oxo.elements.createElement({
   obstacle: true,
   class: 'obstacle3',   
 });     
 
 oxo.elements.onCollisionWithElement(character, obstacle3, function() {
  audioPortal.play();
 });
}

// obstacle4
function obstacle4() {
  var obstacle4 = oxo.elements.createElement({
   obstacle: true,
   class: 'obstacle4',   
 });     
 
 oxo.elements.onCollisionWithElement(character, obstacle4, function() {
  oxo.screens.loadScreen('end', function() {
  });
 });
}
// obstacle5
function obstacle5() {
  var obstacle5 = oxo.elements.createElement({
   obstacle: true,
   class: 'obstacle5',   
 });     
 
 oxo.elements.onCollisionWithElement(character, obstacle5, function() {
  oxo.screens.loadScreen('end', function() {
  });
 });
}

};

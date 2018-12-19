
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
var directionUp = 'up'; 
var character;
var ground;
var objInterval;
var audioJump
var theme;
var audioPortal;
var groundDark = document.querySelector('#ground__dark');
var darkWorld = false;
var negative;
var charPosY = 600;

/* CLIC PASSAGE AU JEU */

oxo.inputs.listenKeyOnce('enter', function() {
  if (oxo.screens.getCurrentScreen !== 'game') {
    oxo.screens.loadScreen('game', game);
    console.log(true);
  }
});

/* oxo.inputs.listenKey('space', function() {
  if (oxo.screens.getCurrentScreen !== 'home') {
    oxo.screens.loadScreen('home');
  }
});*/

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
  //darkFloor();
  //ground = document.getElementsByClassName('ground__dark');
  floor();
  ground0 = document.getElementsByClassName('floor');
  obstacle1();
  ground1 = document.getElementsByClassName('obstacle1');
  obstacle2();
  ground2 = document.getElementsByClassName('obstacle2');
  obstacle3();
  ground3 = document.getElementsByClassName('obstacle3');
  obstacle4();
  ground4 = document.getElementsByClassName('obstacle4');
  obstacle5();
  ground5 = document.getElementsByClassName('obstacle5');
  obstacle6();
  ground6 = document.getElementsByClassName('obstacle6');
  obstacle7();
  ground7 = document.getElementsByClassName('obstacle7');
  obstacle8();
  ground8 = document.getElementsByClassName('obstacle8');
  obstacle9();
  ground9 = document.getElementsByClassName('obstacle9');

//move of the character


/*if ( flying === true) {
  oxo.animation.move(container__character, 'down', 1);
  };

  oxo.inputs.listenArrowKeys(function(key) {
    if ( key === 'down' ) {
      oxo.animation.move(container__character, 'down', 50);
    } else if (key === 'up' && !flying) {
      audioJump.play();
      oxo.animation.move(container__character, 'up', 600 * negative);
        charPosY -= 900 * negative;
        flying = true;
    }
  });*/

if ( flying === true) {
  oxo.animation.move(container__character, 'down', 3);
};

oxo.inputs.listenArrowKeys(function(key) {
  if ( key === 'down' ) {
    oxo.animation.move(container__character, 'down', 100);
  } else if (key === 'up' && !flying) {
    audioJump.play();
    oxo.animation.move(container__character, 'up', 800, true);
      charPosY -= 900;
      flying = true;
  }
});


//Fonction obstacle1 

setInterval(
  function() {
    var obstacles = document.querySelector('.obstacle1');
    oxo.animation.move(obstacles, 'left', 9, true);
  }, 
  20      
);
    
//Fonction obstacle2  

setInterval(
  function() {
    var obstacles2 = document.querySelector('.obstacle2');

    oxo.animation.move(obstacles2, 'left', 9, true);
  }, 
  20
);  

//Fonction obstacle3

setInterval(
  function() {
    var obstacles3 = document.querySelector('.obstacle3');

    oxo.animation.move(obstacles3, 'left', 9, true);
  }, 
  20 
);

//Fonction obstacle4

setInterval(
  function() {
    var obstacles4 = document.querySelector('.obstacle4');

    oxo.animation.move(obstacles4, 'left', 9, true);
  }, 
  20 
);

//Fonction obstacle5

setInterval(
  function() {
    var obstacles5 = document.querySelector('.obstacle5');

    oxo.animation.move(obstacles5, 'left', 9, true);
  }, 
  20 
);

//Fonction obstacle6

setInterval(
  function() {
    var obstacles6 = document.querySelector('.obstacle6');

    oxo.animation.move(obstacles6, 'left', 9, true);
  }, 
  20 
);

//Fonction obstacle7

setInterval(
  function() {
    var obstacles7 = document.querySelector('.obstacle7');

    oxo.animation.move(obstacles7, 'left', 9, true);
  }, 
  20 
);

//Fonction obstacle8

setInterval(
  function() {
    var obstacles8 = document.querySelector('.obstacle8');

    oxo.animation.move(obstacles8, 'left', 9, true);
  }, 
  20 
);

//Fonction obstacle9

setInterval(
  function() {
    var obstacles9 = document.querySelector('.obstacle9');

    oxo.animation.move(obstacles9, 'left', 9, true);
  }, 
  20 
);



//Fonction gravité character

function player() {
  if(charPosY <= 900){
    charPosY += gravity;
  }
  oxo.animation.move(character, directionDown, gravity, true);
  if(flying){
  if(charPosY >= 900){
      flying = false;
    }
  }
}

/*function player() {
  if(charPosY <= 600 && negative === 1){ // Si la position verticale de kirby est inférieur ou égale à 600 && que var negative est égale à 1 
    charPosY += gravity; // Alors on applique une gravité positive
  }else if(charPosY >= -600 && negative === -1){
    charPosY -= gravity; // Sinon on applique une gravité négative
  }
  if(negative === 1){
    oxo.animation.move(container__character, directionDown, gravity, true);
  }else{
    oxo.animation.move(container__character, directionUp, gravity, true);
  }
  if(flying){
    if(charPosY >= 600 * negative){
      flying = false;
    }
  }
} */

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

function darkFloor () {
  var darkFloor = oxo.elements.createElements({
    obstacle : true,
    class: 'ground__dark',
    transform:
    'translate(100px, 0px)',
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

// obstacle6
function obstacle6() {
  var obstacle6 = oxo.elements.createElement({
    obstacle: true,
    class: 'obstacle6',   
 });     
 
  oxo.elements.onCollisionWithElement(character, obstacle6, function() {
    oxo.screens.loadScreen('end', function() {
  });
 });
}

// obstacle7
function obstacle7() {
  var obstacle7 = oxo.elements.createElement({
    obstacle: true,
    class: 'obstacle7',   
 });     
 
  oxo.elements.onCollisionWithElement(character, obstacle7, function() {
    oxo.screens.loadScreen('end', function() {
  });
 });
}

// obstacle8
function obstacle8() {
  var obstacle8 = oxo.elements.createElement({
    obstacle: true,
    class: 'obstacle8',   
 });     
 
  oxo.elements.onCollisionWithElement(character, obstacle8, function() {
    oxo.screens.loadScreen('end', function() {
  });
 });
}

// obstacle9
function obstacle9() {
  var obstacle9 = oxo.elements.createElement({
    obstacle: true,
    class: 'obstacle9',   
 });     
 
  oxo.elements.onCollisionWithElement(character, obstacle9, function() {
    oxo.screens.loadScreen('end', function() {
  });
 });
}


//
/*oxo.elements.onCollisionWithElement(character, obstacle3, function(){
  if(!darkWorld) {
    negative = -1;
    groundDark.classList = "ground__dark--is-collided";
    darkWorld = true;
  } else {
    negative = 1;
    groundDark.classList = "ground__dark";
    darkWorld = false; 
  }
});*/
};

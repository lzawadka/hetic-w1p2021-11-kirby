
var direction;
var nextDirection;
var floor;
var speed = 100;
var characterPosition;
var size = 300;
var gravity = 25;  //Speed of falling
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
var audioDark;
var finalScore;
var groundDark;
var darkWorld = false;
var negative = 1;
var charPosY = 600;
var obstacle3;
var obstacleInterval;

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
  //groundDark2 = document.querySelector('#ground__dark');
  groundDark = document.querySelector('#ground__dark--is-collided');
  audioJump = document.getElementById("audio__jump");
  audioDark = document.getElementById("audio__dark")
  audioDark.volume = 0.2
  theme = document.getElementById('audio__theme');
  theme.volume = 0.1;
  audioPortal = document.getElementById('audio__portal')
  audioPortal.volume = 0.3;
  chutInterval = setInterval(player, 7.5);
  character = document.querySelector('.container__character');    
  oxo.animation.setPosition(character, {x: 100, y: 600});
  floor();
  ground0 = document.getElementsByClassName('floor');
  darkFloor();
  ground = document.getElementsByClassName('ground__dark');
  obstacle1();
  ground1 = document.getElementsByClassName('obstacle1');
  obstacle2();
  ground2 = document.getElementsByClassName('obstacle2');
  getObstacle3();
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
  obstacle10();
  ground10 = document.getElementsByClassName('obstacle10');
  obstacle11();
  ground11 = document.getElementsByClassName('obstacle11');
  obstacle12();
  ground12 = document.getElementsByClassName('obstacle12');
  obstacle13();
  ground13 = document.getElementsByClassName('obstacle13');
  obstacle14();
  ground14 = document.getElementsByClassName('obstacle14');
  obstacle15();
  ground15 = document.getElementsByClassName('obstacle15');
  obstacle16();
  ground16 = document.getElementsByClassName('obstacle16');
  obstacle17();
  ground17 = document.getElementsByClassName('obstacle17');
  obstacle18();
  ground18 = document.getElementsByClassName('obstacle18');
  obstacle19();
  ground19 = document.getElementsByClassName('obstacle19');
  obstacle20();
  ground20 = document.getElementsByClassName('obstacle20');
  obstacle21();
  ground21 = document.getElementsByClassName('obstacle21');
  obstacle22();
  ground22 = document.getElementsByClassName('obstacle22');
  obstacle23();
  ground23 = document.getElementsByClassName('obstacle23');
  obstacle24();
  ground24 = document.getElementsByClassName('obstacle24');
  obstacle25();
  ground25 = document.getElementsByClassName('obstacle25');
  obstacle26();
  ground26 = document.getElementsByClassName('obstacle26');
  obstacle27();
  ground27 = document.getElementsByClassName('obstacle27');
  obstacle28();
  ground28 = document.getElementsByClassName('obstacle28');
  obstacle29();
  ground29 = document.getElementsByClassName('obstacle29');
  obstacle30();
  ground30 = document.getElementsByClassName('obstacle30');
  obstacle31();
  ground31 = document.getElementsByClassName('obstacle31');

  //SCORE
  function score() {
    oxo.player.getScore();
    oxo.player.addToScore(1);
    };
  
  function timeScore() {
    setInterval(score, 500);
    };
  
  timeScore();

//move of the character

if ( flying === true) {
  oxo.animation.move(container__character, 'down', 1);
  };

  oxo.inputs.listenArrowKeys(function(key) {
    if ( key === 'down' ) {
      oxo.animation.move(container__character, 'down', 50);
    } else if ((key === 'up') && (!flying)) {
      console.log(flying);
      audioJump.play();
      oxo.animation.move(container__character, 'up', 500 * negative);
        charPosY -= 500 * negative;
        flying = true;
    }
  });

 /* if ( flying === true) {
    oxo.animation.move(container__character, 'down', 1);
  };

  oxo.inputs.listenArrowKeys(function(key) {
    if ( key === 'down' ) {
      oxo.animation.move(container__character, 'down', 100);
    } else if (key === 'up' && !flying) {
      audioJump.play();
      oxo.animation.move(container__character, 'up', 500, true);
        charPosY -= 600;
        flying = true;
    }
  });*/

//Fonction gravité character

 /* function player() {
    if(charPosY <= 900){
      charPosY += gravity;
    }
    oxo.animation.move(character, directionDown, gravity, true);
    if(flying){
    if(charPosY >= 900){
        flying = false;
      }
    }
  }*/

function player() {
  if(charPosY <= 600 && negative === 1){ // Si la position verticale de kirby est inférieur ou égale à 600 && que var negative est égale à 1 
    charPosY += gravity; // Alors on applique une gravité positive
  }else if(charPosY >= -400 && negative === -1){
    charPosY -= gravity; // Sinon on applique une gravité négative
  }
  if(negative === 1){
    oxo.animation.move(container__character, directionDown, gravity, true);
  }else{
    oxo.animation.move(container__character, directionUp, gravity, true);
  }
  if(flying){
    /*
    if(negative === 1){ 
      charPosY += gravity; // Alors on applique une gravité positive
    }else if(negative === -1){
      charPosY -= gravity; // Sinon on applique une gravité négative
    }
    */
    if(charPosY >= 600 * negative){
      flying = false;
    }
  }
} 


//GRAVITE INVERSÉ AU PORTAIL
console.log(character, obstacle3);

oxo.elements.onCollisionWithElement(character, obstacle3, function(){
  if(!darkWorld) {
    const backgroundImg = document.querySelector('.container');
    backgroundImg.style.background = ("url('Dark_background-1280-TWISTER (1).d0facfa1.png')")
    const backgroundFloor= document.querySelector('.ground__pink');
    backgroundFloor.style.background = ("url('dark-ground.d9c90977.png')")
    const characterFlip= document.querySelector('.container__character');
    characterFlip.style.background = ("url('kirby-reverse.36d7822a.gif')")
    //character.style.transform = "scaleY(-1)";
    negative = -1;
    groundDark.classList = "ground__dark--is-collided";
    darkWorld = true;
  } else {
    negative = 1;
    groundDark.classList = "ground__dark";
    darkWorld = false; 
  }
});

// FONCTION OBSTACLE ANIMATION

//Fonction obstacle1 

//obstacleInterval = 
setInterval(
  function() {
    var obstacles = document.querySelector('.obstacle1');
    oxo.animation.move(obstacles, 'left', 25, true);
  }, 
  20      
);
//clearInterval(obstacleInterval);
  
//Fonction obstacle2  

setInterval(
  function() {
    var obstacles2 = document.querySelector('.obstacle2');

    oxo.animation.move(obstacles2, 'left', 25, true);
  }, 
  20
);  

//Fonction obstacle3

setInterval(
  function() {
    obstacles3 = document.querySelector('.obstacle3');

    oxo.animation.move(obstacles3, 'left', 20, true);
  }, 
  20 
);

//Fonction obstacle4

setInterval(
  function() {
    var obstacles4 = document.querySelector('.obstacle4');

    oxo.animation.move(obstacles4, 'left', 25, true);
  }, 
  20 
);

//Fonction obstacle5

setInterval(
  function() {
    var obstacles5 = document.querySelector('.obstacle5');

    oxo.animation.move(obstacles5, 'left', 25, true);
  }, 
  20 
);

//Fonction obstacle6

setInterval(
  function() {
    var obstacles6 = document.querySelector('.obstacle6');

    oxo.animation.move(obstacles6, 'left', 25, true);
  }, 
  20 
);

//Fonction obstacle7

setInterval(
  function() {
    var obstacles7 = document.querySelector('.obstacle7');

    oxo.animation.move(obstacles7, 'left', 25, true);
  }, 
  20 
);

//Fonction obstacle8

setInterval(
  function() {
    var obstacles8 = document.querySelector('.obstacle8');

    oxo.animation.move(obstacles8, 'left', 25, true);
  }, 
  20 
);

//Fonction obstacle9

setInterval(
  function() {
    var obstacles9 = document.querySelector('.obstacle9');

    oxo.animation.move(obstacles9, 'left', 25, true);
  }, 
  20 
);

//Fonction obstacle10

setInterval(
  function() {
    var obstacles10 = document.querySelector('.obstacle10');

    oxo.animation.move(obstacles10, 'left', 25, true);
  }, 
  20 
);

//Fonction obstacle11

setInterval(
  function() {
    var obstacles11 = document.querySelector('.obstacle11');

    oxo.animation.move(obstacles11, 'left', 25, true);
  }, 
  20 
);

//Fonction obstacle12

setInterval(
  function() {
    var obstacles12 = document.querySelector('.obstacle12');

    oxo.animation.move(obstacles12, 'left', 25, true);
  }, 
  20 
);

//Fonction obstacle13

setInterval(
  function() {
    var obstacles13 = document.querySelector('.obstacle13');

    oxo.animation.move(obstacles13, 'left', 25, true);
  }, 
  20 
);

//Fonction obstacle14

setInterval(
  function() {
    var obstacles14 = document.querySelector('.obstacle14');

    oxo.animation.move(obstacles14, 'left', 25, true);
  }, 
  20 
);

//Fonction obstacle15

setInterval(
  function() {
    var obstacles15 = document.querySelector('.obstacle15');

    oxo.animation.move(obstacles15, 'left', 10, true);
  }, 
  20 
);

//Fonction obstacle16

setInterval(
  function() {
    var obstacles16 = document.querySelector('.obstacle16');

    oxo.animation.move(obstacles16, 'left', 10, true);
  }, 
  20 
);

//Fonction obstacle17

setInterval(
  function() {
    var obstacles17 = document.querySelector('.obstacle17');

    oxo.animation.move(obstacles17, 'left', 10, true);
  }, 
  20 
);

//Fonction obstacle18

setInterval(
  function() {
    var obstacles18 = document.querySelector('.obstacle18');

    oxo.animation.move(obstacles18, 'left', 10, true);
  }, 
  20 
);

//Fonction obstacle19

setInterval(
  function() {
    var obstacles19 = document.querySelector('.obstacle19');

    oxo.animation.move(obstacles19, 'left', 10, true);
  }, 
  20 
);

//Fonction obstacle20

setInterval(
  function() {
    var obstacles20 = document.querySelector('.obstacle20');

    oxo.animation.move(obstacles20, 'left', 10, true);
  }, 
  20 
);

//Fonction obstacle21

setInterval(
  function() {
    var obstacles21 = document.querySelector('.obstacle21');

    oxo.animation.move(obstacles21, 'left', 10, true);
  }, 
  20 
);

//Fonction obstacle22

setInterval(
  function() {
    var obstacles22 = document.querySelector('.obstacle22');

    oxo.animation.move(obstacles22, 'left', 10, true);
  }, 
  20 
);

//Fonction obstacle23

setInterval(
  function() {
    var obstacles23 = document.querySelector('.obstacle23');

    oxo.animation.move(obstacles23, 'left', 10, true);
  }, 
  20 
);

//Fonction obstacle24

setInterval(
  function() {
    var obstacles24 = document.querySelector('.obstacle24');

    oxo.animation.move(obstacles24, 'left', 10, true);
  }, 
  20 
);

//Fonction obstacle25

setInterval(
  function() {
    var obstacles25 = document.querySelector('.obstacle25');

    oxo.animation.move(obstacles25, 'left', 10, true);
  }, 
  20 
);

//Fonction obstacle26

setInterval(
  function() {
    var obstacles26 = document.querySelector('.obstacle26');

    oxo.animation.move(obstacles26, 'left', 10, true);
  }, 
  20 
);

//Fonction obstacle27

setInterval(
  function() {
    var obstacles27 = document.querySelector('.obstacle27');

    oxo.animation.move(obstacles27, 'left', 10, true);
  }, 
  20 
);

//Fonction obstacle28

setInterval(
  function() {
    var obstacles28 = document.querySelector('.obstacle28');

    oxo.animation.move(obstacles28, 'left', 10, true);
  }, 
  20 
);

//Fonction obstacle29

setInterval(
  function() {
    var obstacles29 = document.querySelector('.obstacle29');

    oxo.animation.move(obstacles29, 'left', 10, true);
  }, 
  20 
);

//Fonction obstacle30

setInterval(
  function() {
    var obstacles30 = document.querySelector('.obstacle30');

    oxo.animation.move(obstacles30, 'left', 10, true);
  }, 
  20 
);

//Fonction obstacle31

setInterval(
  function() {
    var obstacles31 = document.querySelector('.obstacle31');

    oxo.animation.move(obstacles31, 'left', 10, true);
  }, 
  20 
);

/*setInterval(
  function() {
    var obstaclesTab = document.querySelectorAll('.obstacle');
    for(let so6 = 0; so6 < obstaclesTab.length; so6++){
      oxo.animation.move(obstaclesTab[so6], 'left', 10, true);
    }
  }, 
  20 
);*/


//CREATION D'ELEMENTS

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
  var darkFloor = oxo.elements.createElement({
    obstacle : true,
    class: 'dark__ground--obstacle',
    styles: {
      position:
        'absolute',
      left: 
        '100px',
      height: 
        '100px',
      width: 
        '100%',
      transform:
        'translate(50px, 0px)',
    }
  });
  console.log(darkFloor);
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
  function getObstacle3() {
    obstacle3 = oxo.elements.createElement({
      obstacle: true,
      class: 'obstacle3',   
  });     
  
    oxo.elements.onCollisionWithElement(character, obstacle3, function() {
      theme.pause();
      audioPortal.play();
      audioDark.play();

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
      oxo.screens.loadScreen( function() {
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

  // obstacle10
  function obstacle10() {
    var obstacle10 = oxo.elements.createElement({
      obstacle: true,
      class: 'obstacle10',   
  });     

    oxo.elements.onCollisionWithElement(character, obstacle10, function() {
      oxo.screens.loadScreen('end', function() {
    });
  });
  }

  // obstacle11
  function obstacle11() {
    var obstacle11 = oxo.elements.createElement({
      obstacle: true,
      class: 'obstacle11',   
  });     
  
    oxo.elements.onCollisionWithElement(character, obstacle11, function() {
      oxo.screens.loadScreen('end', function() {
    });
  });
  }

  // obstacle12
  function obstacle12() {
    var obstacle12 = oxo.elements.createElement({
      obstacle: true,
      class: 'obstacle12',   
  });     
  
    oxo.elements.onCollisionWithElement(character, obstacle12, function() {
      oxo.screens.loadScreen('end', function() {
    });
  });
  }

  // obstacle13
  function obstacle13() {
    var obstacle13 = oxo.elements.createElement({
      obstacle: true,
      class: 'obstacle13',   
  });     
  
    oxo.elements.onCollisionWithElement(character, obstacle13, function() {
      oxo.screens.loadScreen('end', function() {
    });
  });
  }

  // obstacle14
  function obstacle14() {
    var obstacle14 = oxo.elements.createElement({
      obstacle: true,
      class: 'obstacle14',   
  });     
  
    oxo.elements.onCollisionWithElement(character, obstacle14, function() {
      oxo.screens.loadScreen('end', function() {
    });
  });
  }

  // obstacle15
  function obstacle15() {
    var obstacle15 = oxo.elements.createElement({
      obstacle: true,
      class: 'obstacle15',   
  });     
  
    oxo.elements.onCollisionWithElement(character, obstacle15, function() {
      oxo.screens.loadScreen('end', function() {
    });
  });
  }

  // obstacle16
  function obstacle16() {
    var obstacle16 = oxo.elements.createElement({
      obstacle: true,
      class: 'obstacle16',   
  });     
  
    oxo.elements.onCollisionWithElement(character, obstacle16, function() {
      oxo.screens.loadScreen('end', function() {
    });
  });
  }

  // obstacle17
  function obstacle17() {
    var obstacle17 = oxo.elements.createElement({
      obstacle: true,
      class: 'obstacle17',   
  });     
  
    oxo.elements.onCollisionWithElement(character, obstacle17, function() {
      oxo.screens.loadScreen('end', function() {
    });
  });
  }

  // obstacle18
  function obstacle18() {
    var obstacle18 = oxo.elements.createElement({
      obstacle: true,
      class: 'obstacle18',   
  });     
  
    oxo.elements.onCollisionWithElement(character, obstacle18, function() {
      oxo.screens.loadScreen('end', function() {
    });
  });
  }

  // obstacle19
  function obstacle19() {
    var obstacle19 = oxo.elements.createElement({
      obstacle: true,
      class: 'obstacle19',   
  });     
  
    oxo.elements.onCollisionWithElement(character, obstacle19, function() {
      oxo.screens.loadScreen('end', function() {
    });
  });
  }

  // obstacle20
  function obstacle20() {
    var obstacle20 = oxo.elements.createElement({
      obstacle: true,
      class: 'obstacle20',   
  });     
  
    oxo.elements.onCollisionWithElement(character, obstacle20, function() {
      oxo.screens.loadScreen('end', function() {
    });
  });
  }

  // obstacle21
  function obstacle21() {
    var obstacle21 = oxo.elements.createElement({
      obstacle: true,
      class: 'obstacle21',   
  });     
  
    oxo.elements.onCollisionWithElement(character, obstacle21, function() {
      oxo.screens.loadScreen('end', function() {
    });
  });
  }

  // obstacle22
  function obstacle22() {
    var obstacle22 = oxo.elements.createElement({
      obstacle: true,
      class: 'obstacle22',   
  });     
  
    oxo.elements.onCollisionWithElement(character, obstacle22, function() {
      oxo.screens.loadScreen('end', function() {
    });
  });
  }

  // obstacle23
  function obstacle23() {
    var obstacle23 = oxo.elements.createElement({
      obstacle: true,
      class: 'obstacle23',   
  });     
  
    oxo.elements.onCollisionWithElement(character, obstacle23, function() {
      oxo.screens.loadScreen('end', function() {
    });
  });
  }

  // obstacle24
  function obstacle24() {
    var obstacle24 = oxo.elements.createElement({
      obstacle: true,
      class: 'obstacle24',   
  });     
  
    oxo.elements.onCollisionWithElement(character, obstacle24, function() {
      oxo.screens.loadScreen('end', function() {
    });
  });
  }

  // obstacle25
  function obstacle25() {
    var obstacle25 = oxo.elements.createElement({
      obstacle: true,
      class: 'obstacle25',   
  });     
  
    oxo.elements.onCollisionWithElement(character, obstacle25, function() {
      oxo.screens.loadScreen('end', function() {
    });
  });
  }

// obstacle26
function obstacle26() {
  var obstacle26 = oxo.elements.createElement({
    obstacle: true,
    class: 'obstacle26',   
});     

  oxo.elements.onCollisionWithElement(character, obstacle26, function() {
    oxo.screens.loadScreen('end', function() {
  });
});
}

  // obstacle27
  function obstacle27() {
    var obstacle27 = oxo.elements.createElement({
      obstacle: true,
      class: 'obstacle27',   
  });     
  
    oxo.elements.onCollisionWithElement(character, obstacle27, function() {
      oxo.screens.loadScreen('end', function() {
    });
  });
  }

  // obstacle28
  function obstacle28() {
    var obstacle28 = oxo.elements.createElement({
      obstacle: true,
      class: 'obstacle28',   
  });     
  
    oxo.elements.onCollisionWithElement(character, obstacle28, function() {
      oxo.screens.loadScreen('end', function() {
    });
  });
  }

  // obstacle29
  function obstacle29() {
    var obstacle29 = oxo.elements.createElement({
      obstacle: true,
      class: 'obstacle29',   
  });     
  
    oxo.elements.onCollisionWithElement(character, obstacle29, function() {
      oxo.screens.loadScreen('end', function() {
    });
  });
  }

  // obstacle30
  function obstacle30() {
    var obstacle30 = oxo.elements.createElement({
      obstacle: true,
      class: 'obstacle30',   
  });     
  
    oxo.elements.onCollisionWithElement(character, obstacle30, function() {
      oxo.screens.loadScreen('end', function() {
    });
  });
  }

  // obstacle29
  function obstacle31() {
    var obstacle31 = oxo.elements.createElement({
      obstacle: true,
      class: 'obstacle31',   
  });     
  
    oxo.elements.onCollisionWithElement(character, obstacle31, function() {
      oxo.screens.loadScreen('end', function() {
    });
  });
  }

};

var player1;
var player2;
var barValue = 50;
var pourcent = '%';
var toPress1;
var toPress2;
var keysJ1 = ['z', 'q', 's', 'd'];
var keysJ2 = ['o', 'k', 'l', 'm'];

oxo.inputs.listenKey('enter', function () {
  if (oxo.screens.getCurrentScreen !== 'game') {
    oxo.screens.loadScreen('game', game);
  }
});




function game() {


  toPress1 = setKeyToPress(keysJ1);
  toPress2 = setKeyToPress(keysJ2);
  console.log(toPress1);

  oxo.inputs.listenKeys(keysJ1, function (key) {
    if (key === toPress1) {
      console.log('win');
      barValue += 5;
      if (barValue > 100) {
        barValue = 100;
      }
      
      document.getElementById('bar').style.width = barValue + '%';
      toPress1 = setKeyToPress(keysJ1);
    } else if (key !== toPress1) {
      console.log('lost');
      barValue -= 5;
      if (barValue < 0) {
        barValue = 0;
      }
      
      document.getElementById('bar').style.width = barValue + '%';
      console.log(barValue);
    }
  });
  oxo.inputs.listenKeys(keysJ2, function (key) {
    if (key === toPress2) {
      console.log('win');
      barValue -= 5;
      if (barValue < 0) {
        barValue = 0;
      }
      document.getElementById('bar').style.width = barValue + '%';
      console.log(barValue);
      toPress2 = setKeyToPress(keysJ2);
    } else if (key !== toPress2) {
      console.log('lost');
      barValue += 5;
      if (barValue > 100) {
        barValue = 100;
      }
      document.getElementById('bar').style.width = barValue + '%';
      console.log(barValue);
    }
  });



  // Init some variables when game starts
  player1 = document.getElementById('p1state1');
  oxo.animation.setPosition(player1, { x: 350, y: 600 });
  player2 = document.getElementById('p2state1');
  oxo.animation.setPosition(player2, { x: 1120, y: 600 });

}

function setKeyToPress(keys) {
  var toPress = keys[oxo.utils.getRandomNumber(0, 3)];

  if (toPress == 'z') {
    document.getElementById('Z').classList.replace("keyZ-hidden", "keyZ");
    document.getElementById('Q').classList.replace("keyQ", "keyQ-hidden");
    document.getElementById('S').classList.replace("keyS", "keyS-hidden");
    document.getElementById('D').classList.replace("keyD", "keyD-hidden");
  
  } else if (toPress == 'q') {
    document.getElementById('Q').classList.replace("keyQ-hidden", "keyQ");
    document.getElementById('Z').classList.replace("keyZ", "keyZ-hidden");
    document.getElementById('S').classList.replace("keyS", "keyS-hidden");
    document.getElementById('D').classList.replace("keyD", "keyD-hidden");
  

  } else if (toPress == 's') {
    document.getElementById('S').classList.replace("keyS-hidden", "keyS");
    document.getElementById('Z').classList.replace("keyZ", "keyZ-hidden");
    document.getElementById('Q').classList.replace("keyQ", "keyQ-hidden");
    document.getElementById('D').classList.replace("keyD", "keyD-hidden");
  
  } else if (toPress == 'd') {
    document.getElementById('D').classList.replace("keyD-hidden", "keyD");
    document.getElementById('Z').classList.replace("keyZ", "keyZ-hidden");
    document.getElementById('S').classList.replace("keyS", "keyS-hidden");
    document.getElementById('Q').classList.replace("keyQ", "keyQ-hidden");
  } 

    if (toPress == 'o') {
      document.getElementById('O').classList.replace("keyO-hidden", "keyO");
      document.getElementById('K').classList.replace("keyK", "keyK-hidden");
      document.getElementById('L').classList.replace("keyL", "keyL-hidden");
      document.getElementById('M').classList.replace("keyM", "keyM-hidden");
    } else if (toPress == 'k') {
      document.getElementById('K').classList.replace("keyK-hidden", "keyK");
      document.getElementById('O').classList.replace("keyO", "keyO-hidden");
      document.getElementById('L').classList.replace("keyL", "keyL-hidden");
      document.getElementById('M').classList.replace("keyM", "keyM-hidden");
    } else if (toPress == 'l') {
      document.getElementById('L').classList.replace("keyL-hidden", "keyL");
      document.getElementById('O').classList.replace("keyO", "keyO-hidden");
      document.getElementById('K').classList.replace("keyK", "keyK-hidden");
      document.getElementById('M').classList.replace("keyM", "keyM-hidden");
    } else if (toPress == 'm') {
      document.getElementById('M').classList.replace("keyM-hidden", "keyM");
      document.getElementById('O').classList.replace("keyO", "keyO-hidden");
      document.getElementById('L').classList.replace("keyL", "keyL-hidden");
      document.getElementById('K').classList.replace("keyK", "keyK-hidden");
    }
    if (barValue == 0) {
      oxo.screens.loadScreen('end');
    } else if (barValue == 100) {
      oxo.screens.loadScreen('end');
    }

    return toPress;
  }


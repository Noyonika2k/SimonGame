var gamePattern = [];
var userPattern = [];
var level = 0;

$("body").on("keydown", function() {
   restart();
  $("h1").text("Level " + level);
  nextSeq();
});



var userColor;

$(".btn").on("click", function() {

  userColor = this.id;
  playSound(userColor);
  animate(userColor);
  userPattern.push(userColor);


  if (checkAns(level)) {
    setTimeout(function() {
      nextSeq();
    }, 1000);
  } else if (userPattern.length >= gamePattern.length) {
    lost();
  }

});

function checkAns(level) {
  if (userPattern.length === gamePattern.length) {
    for (var i = 0; i <= level; i++) {
      if (userPattern[i] !== gamePattern[i]) {
        return false;
      }
    } {
      return true;
    }
  } else {
    return false;
  }
}







function nextSeq() {
  var buttonColors = ["red", "blue", "green", "yellow"];
  var rand = Math.floor(Math.random() * 4);

  var randColor = buttonColors[rand];
  playSound(randColor);
  animate(randColor);
  gamePattern.push(randColor);
  level++;
  $("h1").text("Level " + level);

  userPattern = [];

}








function animate(curColor) {
  $("#" + curColor).addClass("pressed");
  setTimeout(function() {
    $("#" + curColor).removeClass("pressed");
  }, 100);

  $("#" + curColor).fadeOut(100).fadeIn(100);
}


function playSound(curColor) {
  var sound = new Audio("sounds/" + curColor + ".mp3");
  sound.play();
}


function lost() {
  var wrong = new Audio("sounds/wrong.mp3");
  wrong.play();
  $("body").addClass("game-over");
  setTimeout(function() {
    $("body").removeClass("game-over");
  }, 500);
  $("h1").text("Game Over, Press Any Key To Restart");
  restart();
}


function restart() {
  gamePattern = [];
  userPattern = [];
  level = 0;

}

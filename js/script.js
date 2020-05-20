var music = document.getElementById("myMusic");
var music_state = 1;
var scaleFirst = "translate(-1.2rem)"
var scaleSecond = "translate(-.6rem)";
var scaleThird = "translate(-.3rem)";
var scaleDefault = "translate(0)";
// var scaleFirst = "scale(1.07)";
// var scaleSecond = "scale(1.04)";
// var scaleThird = "scale(1.02)";
// var scaleDefault = "scale(1)";
music.volume = 0.3;
music.loop = true;
function musicControl() {
  music_state = !music_state;
  if (!music_state) {
    document.getElementById("btn-music").innerHTML = "volume_up";
    music.play();
  }
  else {
    document.getElementById("btn-music").innerHTML = "volume_off";
    music.pause();
  }
}
function scaleThis(element) {
  var secondLayerP = element.previousElementSibling ? element.previousElementSibling : false;
  var secondLayerN = element.nextElementSibling ? element.nextElementSibling : false;
  var thirdLayerP = secondLayerP.previousElementSibling ? secondLayerP.previousElementSibling : false;
  var thirdLayerN = secondLayerN.nextElementSibling ? secondLayerN.nextElementSibling : false;
  if(secondLayerP) {
    secondLayerP.style.transition = ".6s";
    secondLayerP.style.transform = scaleSecond;
    if(thirdLayerP) {
      thirdLayerP.style.transition = ".9s";
      thirdLayerP.style.transform = scaleThird;
    }
  }
  if(secondLayerN) {
    secondLayerN.style.transition = ".6s";
    secondLayerN.style.transform = scaleSecond;
    if(thirdLayerN) {
      thirdLayerN.style.transition = ".9s";
      thirdLayerN.style.transform = scaleThird;
    }
  }
  element.style.transition = ".3s";
  element.style.transform = scaleFirst;
}
function noscaleThis(element) {
  var secondLayerP = element.previousElementSibling ? element.previousElementSibling : false;
  var secondLayerN = element.nextElementSibling ? element.nextElementSibling : false;
  var thirdLayerP = secondLayerP.previousElementSibling ? secondLayerP.previousElementSibling : false;
  var thirdLayerN = secondLayerN.nextElementSibling ? secondLayerN.nextElementSibling : false;
  if(secondLayerP) {
    secondLayerP.style.transform = scaleDefault;
    if(thirdLayerP)
    thirdLayerP.style.transform = scaleDefault;
  }
  if(secondLayerN) {
    secondLayerN.style.transform = scaleDefault;
    if(thirdLayerN)
    thirdLayerN.style.transform = scaleDefault;
  }
  element.style.transform = scaleDefault;
}

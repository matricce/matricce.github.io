var music = document.getElementById("myMusic");
var music_state = 1;
var scaleFirst = "scale(1.07)"
var scaleSecond = "scale(1.035)";
var scaleThird = "scale(1.012)";
var scaleDefault = "scale(1)";
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
  if(element.previousElementSibling) {
    element.previousElementSibling.style.transform = scaleSecond;
    if(element.previousElementSibling.previousElementSibling)
    element.previousElementSibling.previousElementSibling.style.transform = scaleThird;
  }
  if(element.nextElementSibling) {
    element.nextElementSibling.style.transform = scaleSecond;
    if(element.nextElementSibling.nextElementSibling)
    element.nextElementSibling.nextElementSibling.style.transform = scaleThird;
  }
  element.style.transform = scaleFirst;
}
function noscaleThis(element) {
  if(element.previousElementSibling) {
    element.previousElementSibling.style.transform = scaleDefault;
    if(element.previousElementSibling.previousElementSibling)
    element.previousElementSibling.previousElementSibling.style.transform = scaleDefault;
  }
  if(element.nextElementSibling) {
    element.nextElementSibling.style.transform = scaleDefault;
    if(element.nextElementSibling.nextElementSibling)
    element.nextElementSibling.nextElementSibling.style.transform = scaleDefault;
  }
  element.style.transform = scaleDefault;
}
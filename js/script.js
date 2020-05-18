var music = document.getElementById("myMusic");
var music_state = 1;
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
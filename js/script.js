const music = document.getElementById("myMusic")
const music_state = 1
const scaleFirst = "translate(-5rem)"
const scaleSecond = "translate(-3rem)"
const scaleThird = "translate(-1.8rem)"
const scaleDefault = "translate(0)"
music.volume = 0.3
music.loop = true
function musicControl() {
  music_state = !music_state
  if (!music_state) {
    document.getElementById("btn-music").innerHTML = "volume_up"
    music.play()
  } else {
    document.getElementById("btn-music").innerHTML = "volume_off"
    music.pause()
  }
}
function scaleThis(element) {
  const secondLayerP = element.previousElementSibling
    ? element.previousElementSibling
    : false
  const secondLayerN = element.nextElementSibling
    ? element.nextElementSibling
    : false
  const thirdLayerP = secondLayerP.previousElementSibling
    ? secondLayerP.previousElementSibling
    : false
  const thirdLayerN = secondLayerN.nextElementSibling
    ? secondLayerN.nextElementSibling
    : false
  if (secondLayerP) {
    secondLayerP.style.transition = ".6s"
    secondLayerP.style.transform = scaleSecond
    if (thirdLayerP) {
      thirdLayerP.style.transition = ".9s"
      thirdLayerP.style.transform = scaleThird
    }
  }
  if (secondLayerN) {
    secondLayerN.style.transition = ".6s"
    secondLayerN.style.transform = scaleSecond
    if (thirdLayerN) {
      thirdLayerN.style.transition = ".9s"
      thirdLayerN.style.transform = scaleThird
    }
  }
  element.style.transition = ".3s"
  element.style.transform = scaleFirst
}
function noscaleThis(element) {
  const secondLayerP = element.previousElementSibling
    ? element.previousElementSibling
    : false
  const secondLayerN = element.nextElementSibling
    ? element.nextElementSibling
    : false
  const thirdLayerP = secondLayerP.previousElementSibling
    ? secondLayerP.previousElementSibling
    : false
  const thirdLayerN = secondLayerN.nextElementSibling
    ? secondLayerN.nextElementSibling
    : false
  if (secondLayerP) {
    secondLayerP.style.transform = scaleDefault
    if (thirdLayerP) thirdLayerP.style.transform = scaleDefault
  }
  if (secondLayerN) {
    secondLayerN.style.transform = scaleDefault
    if (thirdLayerN) thirdLayerN.style.transform = scaleDefault
  }
  element.style.transform = scaleDefault
}

import soundKeys from './soundKeys.js'

        let {soundKeyEnterURL, soundKeyAny} = soundKeys
let audioEnterObject = new Audio(soundKeyEnterURL)
let audioObjects = []
for (let i = 0;
i < soundKeyAny.length; i++) {
  audioObjects.push(new Audio(soundKeyAny[i]))
}
let soundKeyAnyIndex = 0
let lastKeyCode

export default {
  enable: true,
  setEnable: function (enable) {
    this.enable = enable
  },
  playEnterSound: function () {
    if (this.enable === false) {
      return false
    }

    let audioEnter = audioEnterObject
    if (!audioEnter.paused) {
      audioEnter.currentTime = 0
    } else {
      audioEnter.play()
    }
  },
  playKeysSound: function (keyCode) {
    if (this.enable === false) {
      return false
    }

    if (!keyCode || keyCode !== lastKeyCode) {
      soundKeyAnyIndex = (soundKeyAnyIndex + 1) % soundKeyAny.length
    }


    //let soundKeyAnyURL = soundKeyAny[soundKeyAnyIndex]
    //console.log(soundKeyAnyURL)
    let audioAny = audioObjects[soundKeyAnyIndex]
    //audioAny.play()
    if (!audioAny.paused) {
      audioAny.currentTime = 0
    } else {
      audioAny.play()
    }
  }
}
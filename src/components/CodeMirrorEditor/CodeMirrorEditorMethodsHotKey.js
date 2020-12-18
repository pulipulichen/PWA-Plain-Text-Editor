import $ from 'jquery'
import soundKeys from './sound/soundKeys.js'

export default function (CodeMirrorEditor) {
//  CodeMirrorEditor.methods.initAnywordHint = function () {
//    //window.CME = this.$refs.cmEditor
//    //console.log(this.$refs.cmEditor.CodeMirror.registerHelper)
//  }
    
  let hintExcludeText = [
    ' ',
    '\t',
    '\n'
  ]
  
  let inputedText = ''
  CodeMirrorEditor.methods.onCodeMirrorKeyHandled = function (cm, input) {
    if (input.origin === 'paste') {
      return false
    }
    
    //this.playKeyPressSound(cm, input)
    
    let t = input.text[0]
    this.playTypewritterSound(t)
    
    if (hintExcludeText.indexOf(t) > -1) {
      inputedText = ''
      //console.log('no hint')
      return cm.closeHint()
    }
    
    let text = inputedText + t
    //console.log(text)
    
    
    //console.log(cm)
    //console.log(pos)
    //console.log(e, s)
    //this.$refs.cmEditor.codemirror.execCommand('autocomplete')
    cm.showHint()
    //window.CM = cm
    //console.log(cm.listSelections())
    
    //await this.utils.AsyncUtils.sleep(100)
    let hintsContainer = $('.CodeMirror-hints.default:first')
    hintsContainer.hide()
    
    //console.log(hintsContainer.children().length)
    if (hintsContainer.children().length === 0) {
      inputedText = ''
      //console.log('closeHint 1', text)
      return cm.closeHint()
    }
    
    //hintsContainer.children(`:not(:container(${text}))`).remove()
    hintsContainer.children().each((i, li) => {
      //console.log(li)
      let hint = li.innerText.trim()
      //console.log(hint, text)
      if (hint.startsWith(text) === false) {
        $(li).remove()
      }
    })
    
    //console.log(hintsContainer.children().length)
    if (hintsContainer.children().length === 0) {
      inputedText = ''
      //console.log('closeHint 2')
      return cm.closeHint()
    }
    
    //setTimeout(() => {
      //console.log(hintsContainer)
      hintsContainer.show()
      
      inputedText = text
    //}, 50)
  }

  let {soundKeyEnterURL, soundKeyAny} = soundKeys
  let audioEnterObject = new Audio(soundKeyEnterURL)
  let audioObjects = []
  for (let i = 0; i < soundKeyAny.length; i++) {
    audioObjects.push(new Audio(soundKeyAny[i]))
  }
  let soundKeyAnyIndex = 0
  let lastKeyCode
  /*
  let playTypeWriterSound = function (event) {
    if (_this.options.enableTypeWriterSoundEffect !== true
            || event.ctrlKey
            || event.altKey
            || scrollVerticalCenterSkipKeyCode.indexOf(event.keyCode) > -1) {
      //console.log(event.keyCode)
      return false
    }
    //console.log(event.keyCode)

    if (event.keyCode === key.code.ENTER) {
      //console.log('play enter')
      let audioEnter = audioEnterObject
      if (!audioEnter.paused) {
        audioEnter.currentTime = 0
      }
      else {
        audioEnter.play()
      }
    }
    else {
      //console.log('play type')
      if (event.keyCode !== lastKeyCode) {
        soundKeyAnyIndex = (soundKeyAnyIndex + 1) % soundKeyAny.length
      }


      let soundKeyAnyURL = soundKeyAny[soundKeyAnyIndex]
      //console.log(soundKeyAnyURL)
      let audioAny = audioObjects[soundKeyAnyIndex]
      //audioAny.play()
      if (!audioAny.paused) {
        audioAny.currentTime = 0
      }
      else {
        audioAny.play()
      }
    }
  }
  */
  CodeMirrorEditor.methods.onKeyHandled = function (code, name, event) {
    if (name === 'Enter') {
      this.playEnterSound()
    }
  }
 
  CodeMirrorEditor.methods.playEnterSound = function (code, name, event) {
    if (this.localConfig.enableTypewritterSound === false) {
      return false
    }
    
    let audioEnter = audioEnterObject
      if (!audioEnter.paused) {
        audioEnter.currentTime = 0
      }
      else {
        audioEnter.play()
      }
  }
  
  CodeMirrorEditor.methods.playTypewritterSound = function (keyCode) {
    if (this.localConfig.enableTypewritterSound === false) {
      return false
    }
    
    if (keyCode !== lastKeyCode) {
      soundKeyAnyIndex = (soundKeyAnyIndex + 1) % soundKeyAny.length
    }


    //let soundKeyAnyURL = soundKeyAny[soundKeyAnyIndex]
    //console.log(soundKeyAnyURL)
    let audioAny = audioObjects[soundKeyAnyIndex]
    //audioAny.play()
    if (!audioAny.paused) {
      audioAny.currentTime = 0
    }
    else {
      audioAny.play()
    }
  }
  
}
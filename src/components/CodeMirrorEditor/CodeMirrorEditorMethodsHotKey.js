import $ from 'jquery'

export default function (CodeMirrorEditor) {
//  CodeMirrorEditor.methods.initAnywordHint = function () {
//    //window.CME = this.$refs.cmEditor
//    //console.log(this.$refs.cmEditor.CodeMirror.registerHelper)
//  }
    
  let hintExcludeText = [
    '',
    ' ',
    '\t',
    '\n'
  ]
  
  let inputedText = ''
  CodeMirrorEditor.methods.onCodeMirrorHintHandler = function (cm, input) {
    if (input.origin === 'paste') {
      return false
    }
    
    //this.playKeyPressSound(cm, input)
    
    let t = input.text[0]
    this.TypewriterSoundEffect.playKeysSound(t)
    
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

  CodeMirrorEditor.methods.onKeyHandled = function (code, name, event) {
    if (name === 'Enter') {
      this.TypewriterSoundEffect.playEnterSound()
    }
  }
   
  CodeMirrorEditor.methods.playTypewritterSoundTest = function (keyCode) {
    console.log('test')
  }
  
}
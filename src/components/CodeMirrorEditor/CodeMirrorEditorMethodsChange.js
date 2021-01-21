export default function (CodeMirrorEditor) {
  
  /**
   * 這一個似乎是無效的
   */
  CodeMirrorEditor.methods.onEditorChange = async function () {
    if (this.simpleMode === true) {
      return false
    }

    if (this.setValueLock === true) {
      return false
    }
    this.setValueLock = true
    let lastTextContent = this.localConfig.textContent
    if (lastTextContent !== this.codemirror.getValue()) {
      setTimeout(() => {
        //if (this.onPressKey === false) {
          this.TypewriterSoundEffect.playKeysSound()
        //}
      }, 100)
    }
    this.localConfig.textContent = this.codemirror.getValue()
    await this.utils.AsyncUtils.sleep(0)
    this.highlightText()
    this.setValueLock = false
  }
  
  CodeMirrorEditor.methods.updateDocumentTitle = function () {
    let textContentTrim = this.$parent.textContentTrim
    if (textContentTrim === '') {
      document.title = 'Plain Text Editor'
      this.localConfig.filename = null
      return false
    }
    
    //console.log(this.localConfig.filename)
    if (this.localConfig.filename) {
      document.title = this.localConfig.filename
      return true
    }
    
    //let textContentTrim = this.$parent.textContentTrim
    if (textContentTrim === '') {
      document.title = 'Plain Text Editor'
    } else {
      document.title = textContentTrim
    }
  }
  
  CodeMirrorEditor.methods.onCodeMirrorDrop = function (codemirror, event) {
    //console.log(event)
    //console.log('onCodeMirrorDrop')
    event.preventDefault()
    event.stopPropagation()
    
    
    //console.log(event)
    let dt = event.dataTransfer
    let files = dt.files


    if (files.length === 0) {
      return false
    }
    //console.log(files.length)
    
    let file = files[0]
    
    let filename = file.name
    //console.log(file)
    let reader = new FileReader()
    
    reader.onloadend = () => {
      //this.imgSrc = reader.result
      this.code = reader.result
      this.localConfig.filename = filename
      //console.log(filename)
      this.setModeByFilename(filename)
    }
    reader.readAsText(file)
  }
  
  let replaceAll = function (str, find, replace) {
    if (Array.isArray(find)) {
      for (let i = find.length; i > 0; i--) {
        str = replaceAll(str, find[i], replace)
      }
      return str
    }
    else {
      return str.split(find).join(replace)
    }
  }
  
  CodeMirrorEditor.methods.playSoundOnCodeDifference = function () {
    if (this.code !== this.localConfig.textContent) {
      let after = this.code
      let before = this.localConfig.textContent
      setTimeout(() => {
        if (this.onPressKey === false) {
          let beforeLength = replaceAll(before, [' ', '\t', '\n'], '').length
          let afterLength = replaceAll(after, [' ', '\t', '\n'], '').length
          //window.alert([beforeLength, afterLength].join(','))
          if (afterLength > beforeLength) {
            this.TypewriterSoundEffect.playKeysSound()
          }
        }
      }, 100)
    }

  }
}
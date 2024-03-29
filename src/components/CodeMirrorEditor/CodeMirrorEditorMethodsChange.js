export default function (CodeMirrorEditor) {
  
  /**
   * 這一個似乎是無效的
   */
  CodeMirrorEditor.methods.onEditorChange = async function () {
    if (this.localConfig.editorSimpleMode === true) {
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
  
  //let imageFileTypes = ['image/png', 'image/gif', 'image/jpeg']
  CodeMirrorEditor.methods.onCodeMirrorDrop = async function (codemirror, event) {
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
    let filetype = file.type
    
    //if (imageFileTypes.indexOf(filetype) > -1) {
    if (filetype.startsWith('image/')) {
      this.code = await this.$refs.OCRHandler.processOCR(file)
    }
    else {
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
  
  CodeMirrorEditor.methods.replaceSelection = function (replaceStr) {
    let doc = this.codemirror.getDoc();
    
    let cursor1 = doc.getCursor();

    var pos1 = {
       line: cursor1.line,
       ch: cursor1.ch
    }

    //doc.replaceRange(str, pos);
    //console.log(pos1)
    
    this.codemirror.replaceSelection(replaceStr)
    let cursor2 = doc.getCursor();

    var pos2 = {
       line: cursor2.line,
       ch: cursor2.ch
    }

    //doc.replaceRange(str, pos);
    //console.log(pos2)
    
    doc.setSelection(pos1, pos2, {
      scroll: true
    })
  }
}
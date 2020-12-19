export default function (CodeMirrorEditor) {
    
  CodeMirrorEditor.methods.onEditorChange = async function () {
    if (this.simpleMode === true) {
      return false
    }

    if (this.setValueLock === true) {
      return false
    }
    this.setValueLock = true
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
}
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
    if (this.localConfig.filename) {
      return this.localConfig.filename
    }
    
    let textContentTrim = this.$parent.textContentTrim
    if (textContentTrim === '') {
      document.title = 'Plain Text Editor'
    } else {
      document.title = textContentTrim
    }
  }
}
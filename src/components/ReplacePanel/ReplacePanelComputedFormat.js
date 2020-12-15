export default function (ReplacePanel) {
  
  ReplacePanel.computed.computedFormatActionButtonClassNameList = function () {
    let list = []
    
    let tool = this.localConfig.formatTool
    //console.log(tool, this.isTrimEnabled)
    
    if ((tool === 'lines-trim' && this.isTrimEnabled === false)
            || (tool === 'lines-ltrim' && this.isLTrimEnabled === false)
            || (tool === 'lines-rtrim' && this.isRTrimEnabled === false)) {
      list.push('disabled')
    }
    
    return list.join(' ')
  }
  
  ReplacePanel.computed.isMinifyDisabled = function () {
    let mode = this.CodeMirrorEditor.getMode()
    if (mode !== 'javascript'
            || mode !== 'css'
            || mode !== 'html') {
      return 'disabled'
    }
    
    if (this.isTrimEnabled === true
            || this.textContentLines.length > 1) {
      return undefined
    }
    else {
      return 'disabled'
    }
  }
  
  ReplacePanel.computed.isBeautifyDisabled = function () {
    let mode = this.CodeMirrorEditor.getMode()
    if (mode !== 'javascript'
            || mode !== 'css'
            || mode !== 'html') {
      return 'disabled'
    }
    
    if (this.isModifiedAfterBeautification === true) {
      return undefined
    }
    else {
      return 'disabled'
    }
  }
}
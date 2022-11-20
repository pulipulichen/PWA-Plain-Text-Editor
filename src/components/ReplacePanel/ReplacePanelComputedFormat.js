export default function (ReplacePanel) {
  
  ReplacePanel.computed.computedFormatActionButtonClassNameList = function () {
    if (!this.isEnable) {
      return undefined
    }
    
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
    if (!this.isEnable) {
      return undefined
    }
    
    if (this.config.inited === false) {
      return 'disabled'
    }
    
    let editor = this.$parent.$refs.CodeMirrorEditor
    if (!editor) {
      return 'disabled'
    }
    
    let mode = editor.getMode()
    //console.log(mode)
    
    if (mode !== 'javascript'
            && mode !== 'css'
            && mode !== 'html') {
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
    if (!this.isEnable) {
      return undefined
    }
    
    if (this.config.inited === false) {
      return 'disabled'
    }
    
    let editor = this.$parent.$refs.CodeMirrorEditor
    //console.log(editor)
    if (!editor) {
      return 'disabled'
    }
    
    let mode = editor.getMode()
    //console.log(mode)
    if (mode !== 'javascript' && 
          mode !== 'css' && 
          mode !== 'html') {
      return 'disabled'
    }
    
    if (this.isModifiedAfterBeautification === true) {
      return undefined
    }
    else {
      return 'disabled'
    }
  }

  ReplacePanel.computed.isCodeToJSONDisabled = function () {
    return (this.textContentTrim && 
      ((this.textContentTrim.startsWith('{') && this.textContentTrim.endsWith('}')) || 
      (this.textContentTrim.startsWith('[') && this.textContentTrim.endsWith(']'))))
  }


  let isAutoFormatEnableList = [
    'lines-trim',
    'lines-ltrim',
    'lines-ltrim',
    'lines-rtrim',
    'remove-line-breaks',
    'empty-lines-remove',
    'duplicate-empty-lines-remove',      
  ]
  ReplacePanel.computed.isAutoFormatEnable = function () {
    return (isAutoFormatEnableList.indexOf(this.localConfig.formatTool) > -1)
  }
}
import $ from 'jquery'

export default function (FloatActionButton) {
  FloatActionButton.computed.computedStyle = function () {
    //console.log()
    if (this.positionBottom === false) {
      return false
    }
    
    if (this.localConfig.editorSimpleMode) {
      return {
        'bottom': `1rem`
      }
    }

    let style = {
      'bottom': `calc(1rem + ${this.config.panelHeight})`
    }
    //console.log(style)
    return style
  }
  FloatActionButton.computed.computedClassNameList = function () {
    return {
      top: !this.positionBottom,
      compact: (this.config.viewportSize.height < this.viewportHeightPositionThreshold)
      //'display-replace-panel': (this.$parent.config.displayPanel === 'replace')
    }
  }
  
  FloatActionButton.computed.selectedTextTrim = function () {
    // console.log({button: this.config.selectedText})
    let text = this.config.selectedText
    if (typeof(text) !== 'string') {
      // console.log({textS: typeof(text)})
      return ''
    }
    // console.log({text})
    return text.trim()
  }
  
  FloatActionButton.computed.isURLSelected = function () {
    // console.log({url: this.selectedTextTrim})
    // console.log({isURLSelected: this.utils.URLUtils.isURL(this.selectedTextTrim)})
    return this.utils.URLUtils.isURL(this.selectedTextTrim)
  }
  
  FloatActionButton.computed.isShortenURLSelected = function () {
    // console.log({isURLSelected: this.isURLSelected, select: this.selectedTextTrim, result: (this.isURLSelected && this.selectedTextTrim.startsWith('https://tinyurl.com/')) , mode: this.localConfig.editorSimpleMode})
    // console.log({select: this.selectedTextTrim.startsWith('https://tinyurl.com/')})
    return (this.selectedTextTrim.startsWith('https://tinyurl.com/'))
  }

  FloatActionButton.computed.isEmailSelected = function () {
    return this.utils.URLUtils.isEmail(this.config.selectedText)
  }
  
  FloatActionButton.computed.isPuliWorkSelected = function () {
    //console.log(this.config.selectedText, this.utils.URLUtils.isEmail(this.config.selectedText))
    let text = this.config.selectedText
    if (!text) {
      text = this.localConfig.textContent
    }
    
    text = text.trim()
    
    return (text.startsWith('#PULI_WORK\n') || text.startsWith('#PULI_HOME\n'))
  }
  
  FloatActionButton.computed.computedMainIconClassNameList = function () {
    let list = []
    
//    if (this.config.viewportSize.height < this.viewportHeightMainButtonThreshold) {
//      list.push('angle down')
//    }
    if (this.isSpeaking) {
      list.push('assistive listening systems')
    }
    else if (this.isURLSelected) {
      list.push('linkify')
    }
    else if (this.isEmailSelected) {
      list.push('envelope outline')
    }
    else if (this.isPuliWorkSelected) {
      list.push('facebook')
    }
    else if (this.hasSelectedOneLineText) {
      list.push('search')
    }
    else {
      let mainButtonAction = this.localConfig.mainButtonAction
      
      if (this.lastTextContent !== '') {
        list.push('undo')
      }
      else if (mainButtonAction === 'copy') {
        list.push('copy')
      }
      else if (mainButtonAction === 'copy & clear') {
        list.push('copy outline')
      }
      else if (mainButtonAction === 'select all') {
        list.push('i cursor')
      }
    }
    list.push('icon')
    
    return list.join(' ')
  }
  
  FloatActionButton.computed.computedMainIconText = function () {
//    if (this.config.viewportSize.height < this.viewportHeightMainButtonThreshold) {
//      return undefined
//    }
    if (this.isSpeaking) {
      return 'Stop speaking (Alt+O)'
    }
    else if (this.isURLSelected) {
      return 'Open link (Alt+O)'
    }
    else if (this.isEmailSelected) {
      return 'Send e-mail (Alt+O)'
    }
    else if (this.isPuliWorkSelected) {
      return 'Open #PULI_WORK (Alt+O)'
    }
    else if (this.hasSelectedOneLineText) {
      return 'Search web (Alt+O)'
    }
    else {
      let mainButtonAction = this.localConfig.mainButtonAction
      
      if (this.lastTextContent !== '') {
        return 'Redo (Alt+O)'
      }
      else if (mainButtonAction === 'copy') {
        return 'Copy (Alt+O)'
      }
      else if (mainButtonAction === 'copy & clear') {
        return 'Copy & Clear (Alt+O)'
      }
      else if (mainButtonAction === 'select all') {
        return 'Select All (Ctrl+A)'
      }
    }
  }
  
  FloatActionButton.computed.hasSelectedText = function () {
    return (this.config.selectedText && this.config.selectedText !== '')
  }
  
  FloatActionButton.computed.hasSelectedOneLineText = function () {
    return (this.config.selectedText && this.config.selectedText !== '' && this.config.selectedText.indexOf('\n') === -1)
  }
}
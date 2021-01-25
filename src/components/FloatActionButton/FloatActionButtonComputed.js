import $ from 'jquery'

export default function (FloatActionButton) {
  FloatActionButton.computed.computedStyle = function () {
    //console.log()
    if (this.positionBottom === false) {
      return false
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
    let text = this.config.selectedText
    if (typeof(text) !== 'string') {
      return ''
    }
    
    return text.trim()
  }
  
  FloatActionButton.computed.isURLSelected = function () {
    return this.utils.URLUtils.isURL(this.selectedTextTrim)
  }
  
  FloatActionButton.computed.isShortenURLSelected = function () {
    return (this.isURL && this.selectedTextTrim.startsWith('https://rebrand.ly/' ))
  }
  
  FloatActionButton.computed.isEmailSelected = function () {
    //console.log(this.config.selectedText, this.utils.URLUtils.isEmail(this.config.selectedText))
    return this.utils.URLUtils.isEmail(this.config.selectedText)
  }
  
  FloatActionButton.computed.isPuliWorkSelected = function () {
    //console.log(this.config.selectedText, this.utils.URLUtils.isEmail(this.config.selectedText))
    let text = this.config.selectedText
    if (!text) {
      text = this.localConfig.textContent
    }
    
    return text.trim().startsWith('#PULI_WORK\n')
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
    else if (this.hasSelectedText) {
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
    else if (this.hasSelectedText) {
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
}
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
      //'display-replace-panel': (this.$parent.config.displayPanel === 'replace')
    }
  }
  
  FloatActionButton.computed.isURLSelected = function () {
    return this.utils.URLUtils.isURL(this.config.selectedText)
  }
  
  FloatActionButton.computed.computedMainIconClassNameList = function () {
    let list = []
    
    if (this.isURLSelected) {
      list.push('linkify')
    }
    else {
      list.push('copy')
    }
    list.push('icon')
    
    return list.join(' ')
  }
  
  FloatActionButton.computed.computedMainIconText = function () {
    if (this.isURLSelected) {
      return 'Open link'
    }
    else {
      return 'Copy'
    }
  }
  
}
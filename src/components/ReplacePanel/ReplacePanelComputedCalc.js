export default function (ReplacePanel) {
  ReplacePanel.computed.calcResult = function () {
    if (!this.isEnable) {
      return undefined
    }
    
    let textContent
    if (this.config.selectedText && this.config.selectedText !== '') {
      textContent = this.config.selectedText
    }
    else {
      textContent = this.localConfig.textContent.trim()
    }
    this.calcResultCopied = false

    if (textContent.indexOf('\n') === -1) {
      // 表示只有一行
      try {
        let result
        eval(`result = (${textContent})`)
        
        if (typeof(result) === 'object' && result.toString() == '[object Object]') {
          return undefined
        }
        
        return result
      } catch (e) {
      }
    } else {
      // 試著把最後一行加上return
      //let lastBreak = textContent.lastIndexOf('\n')
      //textContent = textContent.slice(0, lastBreak + 1) + 'return ' + textContent.slice(lastBreak + 1)
      let lines = textContent.trim().split('\n')
      let lastLine = lines[(lines.length - 1)].trim()
      if (!lastLine.startsWith('return ')) {
        lines[(lines.length - 1)] = 'return ' + lastLine
      }
      
      textContent = lines.join('\n')
      //console.log(textContent)

      try {
        let result
        eval(`result = (function () {
  ${textContent}
  })()`)
        
        if (typeof(result) === 'object' && result.toString() == '[object Object]') {
          return undefined
        }
        
        return result
      } catch (e) {
      }
    }
  }
  ReplacePanel.computed.computedCalcButtonClassName = function () {
    if (!this.isEnable) {
      return undefined
    }
    
    return {
      'disabled': !this.calcResult,
      'positive': (this.calcResult && this.calcResultCopied === false)
    }
  }
  ReplacePanel.computed.computedCalcButtonText = function () {
    if (!this.isEnable) {
      return undefined
    }
    
    let result = this.calcResult

    if (!result) {
      return '(NULL)'
    }

    let lengthLimit = 13

    result = String(result).trim()
    result = result.split('\n').join(' ')
    if (result.length > lengthLimit) {
      result = result.slice(0, lengthLimit)
    }
    return `Copy: ${result}`
  }
}